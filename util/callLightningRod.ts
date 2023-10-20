import { BLOCK_DATA } from "../lib/blockData/blockData";
import { LightningRod } from "../lib/lightningRod"

const callLightningRod = (id: number, x: number, y: number, z: number) => {
    const lightningRod = new LightningRod(x, y, z);
    const LIGHTNING_ROD = BLOCK_DATA.LIGHTNING_ROD;

    const idNum1 = Math.floor(id * 10) / 10;

    switch(idNum1){
        case LIGHTNING_ROD:
            const xlightningRodId = returnId(id, 0);
            const xlightningRod = lightningRod.xDir;

            if(xlightningRodId === 1) return xlightningRod.xMinus();
            else if(xlightningRodId === 2) return xlightningRod.xPlus();

            return "";

        case LIGHTNING_ROD + 0.1:
            const ylightningRodId = returnId(id, 0.1);
            const ylightningRod = lightningRod.yDir;

            if(ylightningRodId === 1) return ylightningRod.yMinus();
            else if(ylightningRodId === 2) return ylightningRod.yPlus();

            return "";

        case LIGHTNING_ROD + 0.2:
            const zlightningRodId = returnId(id, 0.2);
            const zlightningRod = lightningRod.zDir;

            if(zlightningRodId === 1) return zlightningRod.zMinus();
            else if(zlightningRodId === 2) return zlightningRod.zPlus();

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
    return Math.round((id - (BLOCK_DATA.LIGHTNING_ROD + plusNum)) * 100);
}

export { callLightningRod }