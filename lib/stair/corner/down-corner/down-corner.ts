import { Block } from "../../../block";

import { XMinusZMinus as XMinusZMinusOu } from "./ou/x-minus-z-minus";
import { XMinusZPlus as XMinusZPlusOu } from "./ou/x-minus-z-plus";
import { XPlusZMinus as XPlusZMinusOu } from "./ou/x-plus-z-minus";
import { XPlusZPlus as XPlusZPlusOu } from "./ou/x-plus-z-plus";


import { XMinusZMinus as XMinusZMinusTotu } from "./totu/x-minus-z-minus";
import { XMinusZPlus as XMinusZPlusTotu } from "./totu/x-minus-z-plus";
import { XPlusZMinus as XPlusZMinusTotu } from "./totu/x-plus-z-minus";
import { XPlusZPlus as XPlusZPlusTotu } from "./totu/x-plus-z-plus";

class DownCorner extends Block{
    public readonly ou = {
        xMinusZMinus: this.xMinusZMinusOu.bind(this),
        xMinusZPlus: this.xMinusZPlusOu.bind(this),
        xPlusZMinus: this.xPlusZminusOu.bind(this),
        xPlusZPlus: this.xPlusZPlusOu.bind(this),
    }

    public readonly totu = {
        xMinusZMinus: this.xMinusZMinusTotu.bind(this),
        xMinusZPlus: this.xMinusZPlusTotu.bind(this),
        xPlusZMinus: this.xPlusZminusTotu.bind(this),
        xPlusZPlus: this.xPlusZPlusTotu.bind(this),
    }

    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    private xMinusZMinusOu(){
        return new XMinusZMinusOu(this.x, this.y, this.z).xMinusZMinus();
    }

    private xMinusZPlusOu(){
        return new XMinusZPlusOu(this.x, this.y, this.z).xMinusZPlus();
    }

    private xPlusZminusOu(){
        return new XPlusZMinusOu(this.x, this.y, this.z).xPlusZMinus();
    }

    private xPlusZPlusOu(){
        return new XPlusZPlusOu(this.x, this.y, this.z).XPlusZPlus();
    }


    private xMinusZMinusTotu(){
        return new XMinusZMinusTotu(this.x, this.y, this.z).xMinusZMinus();
    }

    private xMinusZPlusTotu(){
        return new XMinusZPlusTotu(this.x, this.y, this.z).xMinusZPlus();
    }

    private xPlusZminusTotu(){
        return new XPlusZMinusTotu(this.x, this.y, this.z).xPlusZMinus();
    }

    private xPlusZPlusTotu(){
        return new XPlusZPlusTotu(this.x, this.y, this.z).xPlusZPlus();
    }
}

export { DownCorner }