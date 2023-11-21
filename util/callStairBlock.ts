import { BLOCK_DATA } from "../lib/blockData/blockData";
import { StairBlock } from "../lib/stairBlock"

const callStairBlock = (id: number, x: number, y: number, z: number, scale : number, direction: "x-plus" | "x-minus" | "z-plus" | "z-minus" | "" = "") => {
    const stairBlock = new StairBlock(x, y, z, direction);
    const STAIR_BLOCK = BLOCK_DATA.STAIR_BLOCK;

    const idNum1 = Math.floor(id * 10) / 10;

    switch(idNum1){
        case STAIR_BLOCK:
        case STAIR_BLOCK + 0.1:
        case STAIR_BLOCK + 0.2:
        case STAIR_BLOCK + 0.3:
            return stairBlock.down(scale);
        
        case STAIR_BLOCK + 0.4:
        case STAIR_BLOCK + 0.5:
        case STAIR_BLOCK + 0.6:
        case STAIR_BLOCK + 0.7:
            return stairBlock.up(scale);

        case STAIR_BLOCK + 0.8:
            const shapeId1 = returnId(id, 0.8);
            const cornerStairDown = stairBlock.cornerStair.downCorner;

            if(shapeId1 === 1){
                const directionId = returnTail(id, 0.81);
                const totuStair = cornerStairDown.totu;

                if(directionId === 1) return totuStair.xMinusZMinus(scale);
                else if(directionId === 2) return totuStair.xMinusZPlus(scale);
                else if(directionId === 3) return totuStair.xPlusZMinus(scale);
                else if(directionId === 4) return totuStair.xPlusZPlus(scale);
            }

            else if(shapeId1 === 2){
                const directionId = returnTail(id, 0.82);
                const ouStair = cornerStairDown.ou;

                if(directionId === 1) return ouStair.xMinusZMinus(scale);
                else if(directionId === 2) return ouStair.xMinusZPlus(scale);
                else if(directionId === 3) return ouStair.xPlusZMinus(scale);
                else if(directionId === 4) return ouStair.xPlusZPlus(scale);
            }

            return "";

        case STAIR_BLOCK + 0.9:
            const shapeId2 = returnId(id, 0.9);
            const cornerStairUp = stairBlock.cornerStair.upCorner;

            if(shapeId2 === 1){
                const directionId = returnTail(id, 0.91);
                const totuStair = cornerStairUp.totu;

                if(directionId === 1) return totuStair.xMinusZMinus(scale);
                else if(directionId === 2) return totuStair.xMinusZPlus(scale);
                else if(directionId === 3) return totuStair.xPlusZMinus(scale);
                else if(directionId === 4) return totuStair.xPlusZPlus(scale);
            }

            else if(shapeId2 === 2){
                const directionId = returnTail(id, 0.92);
                const ouStair = cornerStairUp.ou;

                if(directionId === 1) return ouStair.xMinusZMinus(scale);
                else if(directionId === 2) return ouStair.xMinusZPlus(scale);
                else if(directionId === 3) return ouStair.xPlusZMinus(scale);
                else if(directionId === 4) return ouStair.xPlusZPlus(scale);
            }

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
    return Math.round((id - (BLOCK_DATA.STAIR_BLOCK + plusNum)) * 100);
}

const returnTail = (id: number, plusNum: number) => {
    return Math.round((id - (BLOCK_DATA.STAIR_BLOCK + plusNum)) * 1000);
}

export { callStairBlock }