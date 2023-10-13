import { Block } from "../block";
import { XDown } from "./dir-x/down";
import { XUp } from "./dir-x/up";

class DirXTrapDoor extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    down(){
        return new XDown(this.x, this.y, this.z).xDown();
    }

    up(){
        return new XUp(this.x, this.y, this.z).xUp();
    }
}

export { DirXTrapDoor }