import { Block } from "../block";
import { ZMinus } from "./dir-z/zMinus";
import { ZPlus } from "./dir-z/zPlus";

class DirZButton extends Block{
    public readonly zDir = {
        zMinus: this.zMinus.bind(this),
        zPlus: this.zPlus.bind(this)
    }


    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    private zMinus(){
        return new ZMinus(this.x, this.y, this.z).zMinus();
    }

    private zPlus(){
        return new ZPlus(this.x, this.y, this.z).zPlus();
    }
}

export { DirZButton }