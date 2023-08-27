import { createTransport } from "nodemailer";
import { config } from "dotenv";

config();

async function sendMail(reciverAddress: string, stlData: string){
    const MAIL = process.env.MAIL_ADDRESS;
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

    const transporter = createTransport({
        service: "gmail",
        auth: {
            type: "OAUTH2",
            user: MAIL,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN
        }
      });

    try {
        await transporter.sendMail({
        from: MAIL,
        to: reciverAddress,
        subject: "ファイルのお届け",
        text: "あなたが作成した3Dデータを送りました。",
        attachments: [
            {
                filename: "result.stl",
                content: stlData
            }
        ]
        });
    } catch (e) {
        console.log(e);
    }
}

export {sendMail}