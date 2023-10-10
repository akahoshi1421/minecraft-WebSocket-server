import { BLOCK_DATA } from "../lib/blockData/blockData";
import { FenceGate } from "../lib/fenceGate"

const callFenceGate = (id: number, x: number, y: number, z: number) => {
    const fenceGate = new FenceGate(x, y, z);
    const FENCE_GATE = BLOCK_DATA.FENCE_GATE;

    const idNum1 = Math.floor(id * 10) / 10;
    
    switch(idNum1){
        case FENCE_GATE:
            const xFenceGateId = returnId(id, 0);
            const xFenceGate = fenceGate.xDir;

            if(xFenceGateId === 1) return xFenceGate.normal();
            else if(xFenceGateId === 2) return xFenceGate.lower();

            return "";

        case FENCE_GATE + 0.1:
            const zFenceGateId = returnId(id, 0.1);
            const zFenceGate = fenceGate.xDir;

            if(zFenceGateId === 1) return zFenceGate.normal();
            else if(zFenceGateId === 2) return zFenceGate.lower();

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
    return Math.round((id - (BLOCK_DATA.FENCE_GATE + plusNum)) * 100);
}

export { callFenceGate }