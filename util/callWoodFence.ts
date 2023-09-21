import { Fence } from "../lib/fence";
import { BLOCK_DATA } from "../lib/blockData/blockData";

const callWoodFence = (id: number, x: number, y: number, z: number) => {
    const woodFence = new Fence(x, y, z).woodFence;
    const WOOD_FENCE_BLOCK = BLOCK_DATA.WOOD_FENCE;

    const idNum1 = Math.floor(id * 10) / 10;

    switch(idNum1){
        case WOOD_FENCE_BLOCK:
            return woodFence.zero.normal();

        case WOOD_FENCE_BLOCK + 0.1:
            const woodFenceOne = woodFence.one;
            const directionId1 = returnId(id, 0.1);

            if(directionId1 === 1){
                return woodFenceOne.xMinus();
            }
            else if(directionId1 === 2){
                return woodFenceOne.xPlus();
            }
            else if(directionId1 === 3){
                return woodFenceOne.zMinus();
            }
            else if(directionId1 === 4){
                return woodFenceOne.zPlus();
            }

            return "";

        case WOOD_FENCE_BLOCK + 0.2:
            const woodFenceTwo = woodFence.two;
            const directionId2 = returnId(id, 0.2);

            if(directionId2 === 1){
                return woodFenceTwo.xMinusZMinus();
            }
            else if(directionId2 === 2){
                return woodFenceTwo.xMinusZPlus();
            }
            else if(directionId2 === 3){
                return woodFenceTwo.xPlusXMinus();
            }
            else if(directionId2 === 4){
                return woodFenceTwo.xPlusZMinus();
            }
            else if(directionId2 === 5){
                return woodFenceTwo.xPlusZPlus();
            }
            else if(directionId2 === 6){
                return woodFenceTwo.zPlusZMinus();
            }

            return "";

        case WOOD_FENCE_BLOCK + 0.3:
            const woodFenceThree = woodFence.three;
            const directionId3 = returnId(id, 0.3);

            if(directionId3 === 1){
                return woodFenceThree.xMinusZPlusZMinus();
            }
            else if(directionId3 === 2){
                return woodFenceThree.xPlusXMinusZMinus();
            }
            else if(directionId3 === 3){
                return woodFenceThree.xPlusXMinusZPlus();
            }
            else if(directionId3 === 4){
                return woodFenceThree.xPlusZPlusZMinus();
            }

            return "";

        case WOOD_FENCE_BLOCK + 0.4:
            return woodFence.four.xPlusXMinusZPlusZMinus();

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
    return Math.round((id - (BLOCK_DATA.WOOD_FENCE + plusNum)) * 100);
}

export { callWoodFence }