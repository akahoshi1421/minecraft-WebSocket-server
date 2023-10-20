import { Block } from "../block";
import { ZMinus } from "../button/dir-z/zMinus";
import { ZPlus } from "./dir-z/zPlus";

class DirZLightningRod extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    zMinus(){
        return new ZMinus(this.x, this.y, this.z).zMinus();
    }

    zPlus(){
        return new ZPlus(this.x, this.y, this.z).zPlus();
    }
}

export { DirZLightningRod }