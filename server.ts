import * as ws from "ws";
import * as uuid from "uuid";
import { stlConvert } from "./stlConverter";
import { sendMail } from "./sendMail";
import { UserData } from "./types";
import { dataBaseAccesser } from "./dataBaseAccesser";

const wss = new ws.WebSocketServer({
    port: 9999,
});

const PATTERN = /^(\[\w+\]) (.*)/;

wss.on("connection", function (ws) {
    console.log("接続完了！");

    ws.on("error", console.error);

    ws.on("message", async function (rawData) {
        const content = JSON.parse(rawData.toString());

        if("body" in content){
            const chatMsg = content.body.message;

            try{
                const reResult = chatMsg.match(PATTERN);
                const blockData = JSON.parse(reResult[2]);

                const userData: UserData = {
                    email: blockData.email,
                    state: blockData.state,
                    scale: blockData.scale,
                    data: blockData.data
                }

                const dataBaseResult = await dataBaseAccesser(userData);

                if(!dataBaseResult) return;
                
                const stlData = stlConvert(JSON.parse(dataBaseResult));
                
                sendMail(userData.email, stlData);

            }
            catch(e){
                console.log(e);
            }
        }
        
    
    });

    // step1: get playerName
    // ws.requestIdForGeteduclientinfo = sendCommand("/getchunkdata overworld -6 -4 5");

    const subscribeMessageJSON = {
        "header": {
          "version": 1, // プロトコルのバージョンを指定。1.18.2の時点では1で問題ない
          "requestId": uuid.v4(), // UUIDv4を指定
          "messageType": "commandRequest",  // "commandRequest" を指定
          "messagePurpose": "subscribe", // "subscribe" を指定
        },
        "body": {
          "eventName": "PlayerMessage" // イベント名を指定。イベント名は後述(PlayerMessage)
        },
      };
    
      // イベント購読用のJSONをシリアライズ（文字列化）して送信
      ws.send(JSON.stringify(subscribeMessageJSON));
});