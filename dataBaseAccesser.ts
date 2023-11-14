import { PrismaClient } from "@prisma/client";
import { UserData } from "./types"

const prisma = new PrismaClient();

const dataBaseAccesser = async (userData: UserData): Promise<string | null> => {
    const user = await prisma.user.findUnique({
        where: {
            email: userData.email
        }
    })

    // データベースの作成
    if(!user){
        await prisma.user.create({
            data: {
                email: userData.email,
                data: userData.data
            }
        });

        return null;
    }

    await prisma.user.update({
        where: {
            email: userData.email
        },
        data: {
            data: (userData.state === 0 ?  "" : user.data) + userData.data
        }
    });

    if(userData.state === 0 || userData.state === 1) return null;

    const stlData = user.data + userData.data;
    
    return decodeURI(stlData);
};

export { dataBaseAccesser }