const ws = require("ws");
const uuid = require("uuid");
const stlConvert = require("./stlConverter");
const sendMail = require("./sendMail");

const wss = new ws.WebSocketServer({
    port: 9999,
});

const PATTERN = /^(\[\w+\]) (.*)/;

wss.on("connection", function (ws) {
    console.log("接続完了！");

    ws.on("message", function (rawData) {
        const content = JSON.parse(rawData.toString());

        if("body" in content){
            const chatMsg = content.body.message;

            try{
                const reResult = chatMsg.match(PATTERN);
                const blockData = JSON.parse(reResult[2]);
                const stlData = stlConvert.stlConvert(blockData["structure"]);
                
                sendMail.sendMail(blockData["email"], stlData);

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

    function sendCommand(cmd) {
        const requestId = uuid.v4()

        ws.send(JSON.stringify({
            header: {
                version: 1,
                requestId: requestId,
                messageType: "commandRequest",
                messagePurpose: "commandRequest",
                commandSetId: "",
            },
            body: {
                origin: {
                    type: "player", // 誰がコマンドを実行するかを指定（ただし、Player以外にどの値が利用可能かは要調査）
                },
                version: 1,
                commandLine: cmd, // マイクラで実行したいコマンドを指定
            },
        }));

        return requestId;
    }
});