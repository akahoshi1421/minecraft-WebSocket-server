import { Vector3 } from "../vector3";
import { XMinus } from "./dir-x/xMinus";
import { XPlus } from "./dir-x/xPlus";

class DirXEndRod extends Vector3{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    xMinus(scale: number){
        return new XMinus(this.x, this.y, this.z).xMinus(scale);
    }

    xPlus(scale: number){
        return new XPlus(this.x, this.y, this.z).xPlus(scale);
    }
}

export { DirXEndRod }