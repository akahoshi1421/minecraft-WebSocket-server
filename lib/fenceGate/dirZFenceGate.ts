import { Block } from "../block";
import { ZLower } from "./dir-z/lower";
import { ZNormal } from "./dir-z/normal";

class DirZFenceGate extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    normal(scale: number){
        return new ZNormal(this.x, this.y, this.z).zNormal(scale);
    }

    lower(scale: number){
        return new ZLower(this.x, this.y, this.z).zLower(scale);
    }
}

export { DirZFenceGate }