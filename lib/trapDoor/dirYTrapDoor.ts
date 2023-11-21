import { Block } from "../block";
import { YDown } from "./dir-y/down";
import { YUp } from "./dir-y/up";

class DirYTrapDoor extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    down(scale: number){
        return new YDown(this.x, this.y, this.z).yDown(scale);
    }

    up(scale: number){
        return new YUp(this.x, this.y, this.z).yUp(scale);
    }
}

export { DirYTrapDoor }