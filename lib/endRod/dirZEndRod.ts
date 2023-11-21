import { Block } from "../block";
import { ZMinus } from "./dir-z/zMinus";
import { ZPlus } from "./dir-z/zPlus";

class DirZEndRod extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    zMinus(scale: number){
        return new ZMinus(this.x, this.y, this.z).zMinus(scale);
    }

    zPlus(scale: number){
        return new ZPlus(this.x, this.y, this.z).zPlus(scale);
    }
}

export { DirZEndRod }