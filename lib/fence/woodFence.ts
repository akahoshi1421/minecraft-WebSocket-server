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
    private zeroNormal(){
        return new ZeroNormal(this.x, this.y, this.z).normal();
    }

    // 1個
    private oneXMinus(){
        return new OneXMinus(this.x, this.y, this.z).xMinus();
    }

    private oneXPlus(){
        return new OneXPlus(this.x, this.y, this.z).xPlus();
    }

    private oneZMinus(){
        return new OneZMinus(this.x, this.y, this.z).zMinus();
    }

    private oneZPlus(){
        return new OneZplus(this.x, this.y, this.z).zPlus();
    }

    // 2個
    private twoXMinusZMinus(){
        return new TwoXMinusZMinus(this.x, this.y, this.z).xMinusZMinus();
    }

    private twoXMinusZPlus(){
        return new TwoXMinusZPlus(this.x, this.y, this.z).xMinusZPlus();
    }

    private twoXPlusXMinus(){
        return new TwoXPlusXMinus(this.x, this.y, this.z).xPlusXMinus();
    }

    private twoXPlusZMinus(){
        return new TwoXPlusZMinus(this.x, this.y, this.z).xPlusZMinus();
    }

    private twoXPlusZPlus(){
        return new TwoXPlusZPlus(this.x, this.y, this.z).xPlusZPlus();
    }

    private twoZPlusZMinus(){
        return new TwoZPlusZMinus(this.x, this.y, this.z).zPlusZMinus();
    }

    // 3個
    private threeXMinusZPlusZMinus(){
        return new ThreeXMinusZPlusZMinus(this.x, this.y, this.z).xMinusZPlusZMinus();
    }

    private threeXPlusXMinusZMinus(){
        return new ThreeXPlusXMinusZMinus(this.x, this.y, this.z).xPlusXMinusZMinus();
    }

    private threeXPlusXMinusZPlus(){
        return new ThreeXPlusXMinusZPlus(this.x, this.y, this.z).xPlusXMinusZPlus();
    }

    private threeXPlusZPlusZMinus(){
        return new ThreeXPlusZPlusZMinus(this.x, this.y, this.z).xPlusZPlusZMinus();
    }

    // 4個
    private fourXPlusXMinusZPlusZMinus(){
        return new FourXPlusXMinusZPlusZMinus(this.x, this.y, this.z).xPlusXMinusZPlusZMinus();
    }
}

export { WoodFence }