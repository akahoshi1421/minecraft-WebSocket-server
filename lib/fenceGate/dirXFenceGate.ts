import { Block } from "../block";
import { XLower } from "./dir-x/lower";
import { XNormal } from "./dir-x/normal";

class DirXFenceGate extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    normal(){
        return new XNormal(this.x, this.y, this.z).xNormal();
    }

    lower(){
        return new XLower(this.x, this.y, this.z).xLower();
    }
}

export { DirXFenceGate }