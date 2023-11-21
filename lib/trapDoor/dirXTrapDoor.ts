import { Block } from "../block";
import { XDown } from "./dir-x/down";
import { XUp } from "./dir-x/up";

class DirXTrapDoor extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    down(scale: number){
        return new XDown(this.x, this.y, this.z).xDown(scale);
    }

    up(scale: number){
        return new XUp(this.x, this.y, this.z).xUp(scale);
    }
}

export { DirXTrapDoor }