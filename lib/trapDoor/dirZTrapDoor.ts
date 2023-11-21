import { Block } from "../block";
import { ZDown } from "./dir-z/down";
import { ZUp } from "./dir-z/up";

class DirZTrapDoor extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    down(scale: number){
        return new ZDown(this.x, this.y, this.z).zDown(scale);
    }

    up(scale: number){
        return new ZUp(this.x, this.y, this.z).zUp(scale);
    }
}

export { DirZTrapDoor }