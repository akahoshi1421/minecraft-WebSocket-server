import { BLOCK_DATA } from "../lib/blockData/blockData";
import { StairBlock } from "../lib/stairBlock"

const callStairBlock = (id: number, x: number, y: number, z: number, direction: "x-plus" | "x-minus" | "z-plus" | "z-minus") => {
    const stairBlock = new StairBlock(x, y, z, direction);
    const STAIR_BLOCK = BLOCK_DATA.STAIR_BLOCK;

    switch(id){
        case STAIR_BLOCK:
        case STAIR_BLOCK + 0.1:
        case STAIR_BLOCK + 0.2:
        case STAIR_BLOCK + 0.3:
            return stairBlock.down();
        
        case STAIR_BLOCK + 0.4:
        case STAIR_BLOCK + 0.5:
        case STAIR_BLOCK + 0.6:
        case STAIR_BLOCK + 0.7:
            return stairBlock.up();
    }

    return "";
}

export { callStairBlock }