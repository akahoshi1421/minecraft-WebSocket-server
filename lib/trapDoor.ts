import { Block } from "./block";
import { DirXTrapDoor } from "./trapDoor/dirXTrapDoor";
import { DirYTrapDoor } from "./trapDoor/dirYTrapDoor";
import { DirZTrapDoor } from "./trapDoor/dirZTrapDoor";

class TrapDoor extends Block{
    public readonly xDir: DirXTrapDoor;
    public readonly yDir: DirYTrapDoor;
    public readonly zDir: DirZTrapDoor;

    constructor(x: number, y: number, z: number){
        super(x, y, z);

        this.xDir = new DirXTrapDoor(this.x, this.y, this.z);
        this.yDir = new DirYTrapDoor(this.x, this.y, this.z);
        this.zDir = new DirZTrapDoor(this.x, this.y, this.z);
    }
}

export { TrapDoor }