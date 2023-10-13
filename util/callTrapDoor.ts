import { BLOCK_DATA } from "../lib/blockData/blockData";
import { TrapDoor } from "../lib/trapDoor"

const callTrapDoor = (id: number, x: number, y: number, z: number) => {
    const trapDoor = new TrapDoor(x, y, z);
    const TRAP_DOOR = BLOCK_DATA.TRAP_DOOR;

    const idNum1 = Math.floor(id * 10) / 10;

    switch(idNum1){
        case TRAP_DOOR:
            const xTrapDoorId = returnId(id, 0);
            const xTrapDoor = trapDoor.xDir;

            if(xTrapDoorId === 1) return xTrapDoor.down();
            else if(xTrapDoorId === 2) return xTrapDoor.up();

            return "";

        case TRAP_DOOR + 0.1:
            const yTrapDoorId = returnId(id, 0.1);
            const yTrapDoor = trapDoor.yDir;

            if(yTrapDoorId === 1) return yTrapDoor.down();
            else if(yTrapDoorId === 2) return yTrapDoor.up();

            return "";

        case TRAP_DOOR + 0.2:
            const zTrapDoorId = returnId(id, 0.2);
            const zTrapDoor = trapDoor.zDir;

            if(zTrapDoorId === 1) return zTrapDoor.down();
            else if(zTrapDoorId === 2) return zTrapDoor.up();

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

export { callTrapDoor }