import { Block } from "../block";
import { YDown } from "./dir-y/down";
import { YUp } from "./dir-y/up";

class DirYTrapDoor extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    down(){
        return new YDown(this.x, this.y, this.z).yDown();
    }

    up(){
        return new YUp(this.x, this.y, this.z).yUp();
    }
}

export { DirYTrapDoor }