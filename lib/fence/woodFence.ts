import { Block } from "../block";
import { FourXPlusXMinusZPlusZMinus } from "./woodFence/four/xPlusXMinusZPlusZMinus";
import { OneXMinus } from "./woodFence/one/xMinus";
import { OneXPlus } from "./woodFence/one/xPlus";
import { OneZMinus } from "./woodFence/one/zMinus";
import { OneZplus } from "./woodFence/one/zPlus";
import { ThreeXMinusZPlusZMinus } from "./woodFence/three/xMinusZPlusZMinus";
import { ThreeXPlusXMinusZMinus } from "./woodFence/three/xPlusXMinusZMinus";
import { ThreeXPlusXMinusZPlus } from "./woodFence/three/xPlusXMinusZPlus";
import { ThreeXPlusZPlusZMinus } from "./woodFence/three/xPlusZPlusZMinus";
import { TwoXMinusZMinus } from "./woodFence/two/xMinusZMinus";
import { TwoXMinusZPlus } from "./woodFence/two/xMinusZPlus";
import { TwoXPlusXMinus } from "./woodFence/two/xPlusXMinus";
import { TwoXPlusZMinus } from "./woodFence/two/xPlusZMinus";
import { TwoXPlusZPlus } from "./woodFence/two/xPlusZPlus";
import { TwoZPlusZMinus } from "./woodFence/two/zPlusZMinus";
import { ZeroNormal } from "./woodFence/zero/normal";

class WoodFence extends Block{
    public readonly zero = {
        normal: this.zeroNormal.bind(this)
    }
    public readonly one = {
        xMinus: this.oneXMinus.bind(this),
        xPlus: this.oneXPlus.bind(this),
        zMinus: this.oneZMinus.bind(this),
        zPlus: this.oneZPlus.bind(this)
    }
    public readonly two = {
        xMinusZMinus: this.twoXMinusZMinus.bind(this),
        xMinusZPlus: this.twoXMinusZPlus.bind(this),
        xPlusXMinus: this.twoXPlusXMinus.bind(this),
        xPlusZMinus: this.twoXPlusZMinus.bind(this),
        xPlusZPlus: this.twoXPlusZPlus.bind(this),
        zPlusZMinus: this.twoZPlusZMinus.bind(this) 
    }
    public readonly three = {
        xMinusZPlusZMinus: this.threeXMinusZPlusZMinus.bind(this),
        xPlusXMinusZMinus: this.threeXPlusXMinusZMinus.bind(this),
        xPlusXMinusZPlus: this.threeXPlusXMinusZPlus.bind(this),
        xPlusZPlusZMinus: this.threeXPlusZPlusZMinus.bind(this) 
    }
    public readonly four = {
        xPlusXMinusZPlusZMinus: this.fourXPlusXMinusZPlusZMinus.bind(this)
    }


    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    // 0個
    private zeroNormal(scale: number){
        return new ZeroNormal(this.x, this.y, this.z).normal(scale);
    }

    // 1個
    private oneXMinus(scale: number){
        return new OneXMinus(this.x, this.y, this.z).xMinus(scale);
    }

    private oneXPlus(scale: number){
        return new OneXPlus(this.x, this.y, this.z).xPlus(scale);
    }

    private oneZMinus(scale: number){
        return new OneZMinus(this.x, this.y, this.z).zMinus(scale);
    }

    private oneZPlus(scale: number){
        return new OneZplus(this.x, this.y, this.z).zPlus(scale);
    }

    // 2個
    private twoXMinusZMinus(scale: number){
        return new TwoXMinusZMinus(this.x, this.y, this.z).xMinusZMinus(scale);
    }

    private twoXMinusZPlus(scale: number){
        return new TwoXMinusZPlus(this.x, this.y, this.z).xMinusZPlus(scale);
    }

    private twoXPlusXMinus(scale: number){
        return new TwoXPlusXMinus(this.x, this.y, this.z).xPlusXMinus(scale);
    }

    private twoXPlusZMinus(scale: number){
        return new TwoXPlusZMinus(this.x, this.y, this.z).xPlusZMinus(scale);
    }

    private twoXPlusZPlus(scale: number){
        return new TwoXPlusZPlus(this.x, this.y, this.z).xPlusZPlus(scale);
    }

    private twoZPlusZMinus(scale: number){
        return new TwoZPlusZMinus(this.x, this.y, this.z).zPlusZMinus(scale);
    }

    // 3個
    private threeXMinusZPlusZMinus(scale: number){
        return new ThreeXMinusZPlusZMinus(this.x, this.y, this.z).xMinusZPlusZMinus(scale);
    }

    private threeXPlusXMinusZMinus(scale: number){
        return new ThreeXPlusXMinusZMinus(this.x, this.y, this.z).xPlusXMinusZMinus(scale);
    }

    private threeXPlusXMinusZPlus(scale: number){
        return new ThreeXPlusXMinusZPlus(this.x, this.y, this.z).xPlusXMinusZPlus(scale);
    }

    private threeXPlusZPlusZMinus(scale: number){
        return new ThreeXPlusZPlusZMinus(this.x, this.y, this.z).xPlusZPlusZMinus(scale);
    }

    // 4個
    private fourXPlusXMinusZPlusZMinus(scale: number){
        return new FourXPlusXMinusZPlusZMinus(this.x, this.y, this.z).xPlusXMinusZPlusZMinus(scale);
    }
}

export { WoodFence }