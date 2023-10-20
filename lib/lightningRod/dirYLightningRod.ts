import { Block } from "../block";
import { YMinus } from "./dir-y/yMinus";
import { YPlus } from "./dir-y/yPlus";

class DirYLightningRod extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    yMinus(){
        return new YMinus(this.x, this.y, this.z).yMinus();
    }

    yPlus(){
        return new YPlus(this.x, this.y, this.z).yPlus();
    }
}

export { DirYLightningRod }