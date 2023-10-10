import { Block } from "../block";
import { YMinus } from "./dir-y/yMinus";
import { YPlus } from "./dir-y/yPlus";

class DirXButton extends Block{
    public readonly yDir = {
        yMinus: this.yMinus.bind(this),
        yPlus: this.yPlus.bind(this)
    }


    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    private yMinus(){
        return new YMinus(this.x, this.y, this.z).yMinus();
    }

    private yPlus(){
        return new YPlus(this.x, this.y, this.z).yPlus();
    }
}

export { DirXButton }