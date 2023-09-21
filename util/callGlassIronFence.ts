import { Fence } from "../lib/fence";
import { BLOCK_DATA } from "../lib/blockData/blockData";

const callGlassIronFence = (id: number, x: number, y: number, z: number) => {
    const glassIronFence = new Fence(x, y, z).glassIronFence;
    const GLASS_IRON_FENCE_BLOCK = BLOCK_DATA.GLASS_IRON_FENCE;

    const idNum1 = Math.floor(id * 10) / 10;

    switch(idNum1){
        case GLASS_IRON_FENCE_BLOCK:
            return glassIronFence.zero.normal();

        case GLASS_IRON_FENCE_BLOCK + 0.1:
            const glassIronFenceOne = glassIronFence.one;
            const directionId1 = returnId(id, 0.1);

            if(directionId1 === 1){
                return glassIronFenceOne.xMinus();
            }
            else if(directionId1 === 2){
                return glassIronFenceOne.xPlus();
            }
            else if(directionId1 === 3){
                return glassIronFenceOne.zMinus();
            }
            else if(directionId1 === 4){
                return glassIronFenceOne.zPlus();
            }

            return "";

        case GLASS_IRON_FENCE_BLOCK + 0.2:
            const glassIronFenceTwo = glassIronFence.two;
            const directionId2 = returnId(id, 0.2);

            if(directionId2 === 1){
                return glassIronFenceTwo.xMinusZMinus();
            }
            else if(directionId2 === 2){
                return glassIronFenceTwo.xMinusZPlus();
            }
            else if(directionId2 === 3){
                return glassIronFenceTwo.xPlusXMinus();
            }
            else if(directionId2 === 4){
                return glassIronFenceTwo.xPlusZMinus();
            }
            else if(directionId2 === 5){
                return glassIronFenceTwo.xPlusZPlus();
            }
            else if(directionId2 === 6){
                return glassIronFenceTwo.zPlusZMinus();
            }

            return "";

        case GLASS_IRON_FENCE_BLOCK + 0.3:
            const glassIronFenceThree = glassIronFence.three;
            const directionId3 = returnId(id, 0.3);

            if(directionId3 === 1){
                return glassIronFenceThree.xMinusZPlusZMinus();
            }
            else if(directionId3 === 2){
                return glassIronFenceThree.xPlusXMinusZMinus();
            }
            else if(directionId3 === 3){
                return glassIronFenceThree.xPlusXMinusZPlus();
            }
            else if(directionId3 === 4){
                return glassIronFenceThree.xPlusZPlusZMinus();
            }

            return "";

        case GLASS_IRON_FENCE_BLOCK + 0.4:
            return glassIronFence.four.xPlusXMinusZPlusZMinus();

    }

    return "";
};

/**
 * 少数の末尾の数字を返してくれる関数
 * @param id id
 * @param plusNum 足される値
 * @returns 
 */
const returnId = (id: number, plusNum: number) => {
    return Math.round((id - (BLOCK_DATA.GLASS_IRON_FENCE + plusNum)) * 100);
}

export { callGlassIronFence }