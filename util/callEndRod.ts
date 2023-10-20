import { BLOCK_DATA } from "../lib/blockData/blockData";
import { EndRod } from "../lib/endRod"

const callEndRod = (id: number, x: number, y: number, z: number) => {
    const endRod = new EndRod(x, y, z);
    const END_ROD = BLOCK_DATA.END_ROD;

    const idNum1 = Math.floor(id * 10) / 10;

    switch(idNum1){
        case END_ROD:
            const xEndRodId = returnId(id, 0);
            const xEndRod = endRod.xDir;

            if(xEndRodId === 1) return xEndRod.xMinus();
            else if(xEndRodId === 2) return xEndRod.xPlus();

            return "";

        case END_ROD + 0.1:
            const yEndRodId = returnId(id, 0.1);
            const yEndRod = endRod.yDir;

            if(yEndRodId === 1) return yEndRod.yMinus();
            else if(yEndRodId === 2) return yEndRod.yPlus();

            return "";

        case END_ROD + 0.2:
            const zEndRodId = returnId(id, 0.2);
            const zEndRod = endRod.zDir;

            if(zEndRodId === 1) return zEndRod.zMinus();
            else if(zEndRodId === 2) return zEndRod.zPlus();

            return "";
    }

    return "";
}

/**
 * 小数点第二位の値を返してくれる関数
 * @param id id
 * @param plusNum 足される値
 * @returns 
 */
const returnId = (id: number, plusNum: number) => {
    return Math.round((id - (BLOCK_DATA.END_ROD + plusNum)) * 100);
}

export { callEndRod }