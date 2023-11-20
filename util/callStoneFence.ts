import { Fence } from "../lib/fence";
import { BLOCK_DATA } from "../lib/blockData/blockData";

const callStoneFence = (id: number, x: number, y: number, z: number, scale: number) => {
    const STONE_FENCE_BLOCK = BLOCK_DATA.STONE_FENCE;

    const idNum1 = Math.floor(id * 10) / 10;
    const tailNumbers = getTailNumberes(id);

    const tfLists = tailNumbers.split("").map(num => {
        return  num === "1" ? false : true;
    });

    switch(idNum1){
        case STONE_FENCE_BLOCK:
            return new Fence(x, y, z).stoneFence.zero.normal(scale);

        case STONE_FENCE_BLOCK + 0.1:
            const directionId1 = returnId(id, 0.1);            

            if(directionId1 === 1){
                return new Fence(x, y, z, false, tfLists[0]).stoneFence.one.xMinus(scale);
            }
            else if(directionId1 === 2){
                return new Fence(x, y, z, tfLists[0]).stoneFence.one.xPlus(scale);
            }
            else if(directionId1 === 3){
                return new Fence(x, y, z, false, false, false, tfLists[0]).stoneFence.one.zMinus(scale);
            }
            else if(directionId1 === 4){
                return new Fence(x, y, z, false, false, tfLists[0]).stoneFence.one.zPlus(scale);
            }

            return "";

        case STONE_FENCE_BLOCK + 0.2:
            const directionId2 = returnId(id, 0.2);

            if(directionId2 === 1){
                return new Fence(x, y, z, false, tfLists[0], false, tfLists[1]).stoneFence.two.xMinusZMinus(scale);
            }
            else if(directionId2 === 2){
                return new Fence(x, y, z, false, tfLists[0], tfLists[1]).stoneFence.two.xMinusZPlus(scale);
            }
            else if(directionId2 === 3){
                return new Fence(x, y, z, tfLists[0], tfLists[1], false, false, tfLists[2], tfLists[3]).stoneFence.two.xPlusXMinus(scale);
            }
            else if(directionId2 === 4){
                return new Fence(x, y, z, tfLists[0], false, false, tfLists[1]).stoneFence.two.xPlusZMinus(scale);
            }
            else if(directionId2 === 5){
                return new Fence(x, y, z, tfLists[0], false, tfLists[1]).stoneFence.two.xPlusZPlus(scale);
            }
            else if(directionId2 === 6){
                return new Fence(x, y, z, false, false, tfLists[0], tfLists[1], tfLists[2], tfLists[3]).stoneFence.two.zPlusZMinus(scale);
            }

            return "";
            
        case STONE_FENCE_BLOCK + 0.3:
            const directionId3 = returnId(id, 0.3);

            if(directionId3 === 1){
                return new Fence(x, y, z, false, tfLists[0], tfLists[1], tfLists[2]).stoneFence.three.xMinusZPlusZMinus(scale);
            }
            else if(directionId3 === 2){
                return new Fence(x, y, z, tfLists[0], tfLists[1], false, tfLists[2]).stoneFence.three.xPlusXMinusZMinus(scale);
            }
            else if(directionId3 === 3){
                return new Fence(x, y, z, tfLists[0], tfLists[1], tfLists[2]).stoneFence.three.xPlusXMinusZPlus(scale);
            }
            else if(directionId3 === 4){
                return new Fence(x, y, z, tfLists[0], false, tfLists[1], tfLists[2]).stoneFence.three.xPlusZPlusZMinus(scale);
            }

        case STONE_FENCE_BLOCK + 0.4:
            return new Fence(x, y, z, tfLists[0], tfLists[1], tfLists[2], tfLists[3]).stoneFence.four.xPlusXMinusZPlusZMinus(scale);
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
    return Math.round((id - (BLOCK_DATA.STONE_FENCE + plusNum)) * 100);
}

/**
 * 小数点第三位以下の数字を返してくれる関数
 * @param id id
 * @returns 
 */
const getTailNumberes = (id: number) => {
    const pattern = /^\d{1}\.\d{2}(\d+)/

    const result = id.toString().match(pattern);

    if(result) return result[1];
    else return "";
}

export { callStoneFence }