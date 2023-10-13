import { Block } from "../block";
import { ZDown } from "./dir-z/down";
import { ZUp } from "./dir-z/up";

class DirZTrapDoor extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    down(){
        return new ZDown(this.x, this.y, this.z).zDown();
    }

    up(){
        return new ZUp(this.x, this.y, this.z).zUp();
    }
}

export { DirZTrapDoor }