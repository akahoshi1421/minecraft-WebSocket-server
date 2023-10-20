import { Block } from "../block";
import { XMinus } from "./dir-x/xMinus";
import { XPlus } from "./dir-x/xPlus";

class DirXLightningRod extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    xMinus(){
        return new XMinus(this.x, this.y, this.z).xMinus();
    }

    xPlus(){
        return new XPlus(this.x, this.y, this.z).xPlus();
    }
}

export { DirXLightningRod }