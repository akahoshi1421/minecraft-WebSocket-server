import { Block } from "../../block";

import { XMinusZMinus as XMinusZMinusOu } from "./down-corner/ou/x-minus-z-minus";
import { XMinusZPlus as XMinusZPlusOu } from "./down-corner/ou/x-minus-z-plus";
import { XPlusZMinus as XPlusZMinusOu } from "./down-corner/ou/x-plus-z-minus";
import { XPlusZPlus as XPlusZPlusOu } from "./down-corner/ou/x-plus-z-plus";


import { XMinusZMinus as XMinusZMinusTotu } from "./down-corner/totu/x-minus-z-minus";
import { XMinusZPlus as XMinusZPlusTotu } from "./down-corner/totu/x-minus-z-plus";
import { XPlusZMinus as XPlusZMinusTotu } from "./down-corner/totu/x-plus-z-minus";
import { XPlusZPlus as XPlusZPlusTotu } from "./down-corner/totu/x-plus-z-plus";

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

    private xMinusZMinusOu(scale: number){
        return new XMinusZMinusOu(this.x, this.y, this.z).xMinusZMinus(scale);
    }

    private xMinusZPlusOu(scale: number){
        return new XMinusZPlusOu(this.x, this.y, this.z).xMinusZPlus(scale);
    }

    private xPlusZminusOu(scale: number){
        return new XPlusZMinusOu(this.x, this.y, this.z).xPlusZMinus(scale);
    }

    private xPlusZPlusOu(scale: number){
        return new XPlusZPlusOu(this.x, this.y, this.z).xPlusZPlus(scale);
    }


    private xMinusZMinusTotu(scale: number){
        return new XMinusZMinusTotu(this.x, this.y, this.z).xMinusZMinus(scale);
    }

    private xMinusZPlusTotu(scale: number){
        return new XMinusZPlusTotu(this.x, this.y, this.z).xMinusZPlus(scale);
    }

    private xPlusZminusTotu(scale: number){
        return new XPlusZMinusTotu(this.x, this.y, this.z).xPlusZMinus(scale);
    }

    private xPlusZPlusTotu(scale: number){
        return new XPlusZPlusTotu(this.x, this.y, this.z).xPlusZPlus(scale);
    }
}

export { DownCorner }