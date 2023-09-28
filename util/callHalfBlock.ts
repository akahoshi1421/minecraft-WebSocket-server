import { BLOCK_DATA } from "../lib/blockData/blockData"
import { HalfBlock } from "../lib/halfBlock";

const callHalfBlock = (id: number, x: number, y: number, z: number) => {
    const halfBlock = new HalfBlock(x, y, z);
    const HALF_BLOCK = BLOCK_DATA.HALF_BLOCK;

    switch(id){
        case HALF_BLOCK:
            return halfBlock.up();

        case HALF_BLOCK + 0.1:
            return halfBlock.down();
    }

    return "";
}

export { callHalfBlock }