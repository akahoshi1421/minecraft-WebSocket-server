import { Block } from "../block";
import { XMinus } from "./dir-x/xMinus";
import { XPlus } from "./dir-x/xPlus";

class DirXButton extends Block{
    public readonly xDir = {
        xMinus: this.xMinus.bind(this),
        xPlus: this.xPlus.bind(this)
    }


    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    private xMinus(){
        return new XMinus(this.x, this.y, this.z).xMinus();
    }

    private xPlus(){
        return new XPlus(this.x, this.y, this.z).xPlus();
    }
}

export { DirXButton }