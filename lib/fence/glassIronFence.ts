import { Block } from "../block";
import { FourXPlusXMinusZPlusZMinus } from "./glassIronFence/four/xPlusXMinusZPlusZMinus";
import { OneXMinus } from "./glassIronFence/one/xMinus";
import { OneXPlus } from "./glassIronFence/one/xPlus";
import { OneZMinus } from "./glassIronFence/one/zMinus";
import { OneZPlus } from "./glassIronFence/one/zPlus";
import { ThreeXMinusZPlusZMinus } from "./glassIronFence/three/xMinusZPlusZMinus";
import { ThreeXPlusXMinusZMinus } from "./glassIronFence/three/xPlusXMinusZMinus";
import { ThreeXPlusXMinusZPlus } from "./glassIronFence/three/xPlusXMinusZPlus";
import { ThreeXPlusZPlusZMinus } from "./glassIronFence/three/xPlusZPlusZMinus";
import { TwoXMinusZMinus } from "./glassIronFence/two/xMinusZMinus";
import { TwoXMinusZPlus } from "./glassIronFence/two/xMinusZPlus";
import { TwoXPlusXMinus } from "./glassIronFence/two/xPlusXMinus";
import { TwoXPlusZMinus } from "./glassIronFence/two/xPlusZMinus";
import { TwoXPlusZPlus } from "./glassIronFence/two/xPlusZPlus";
import { TwoZPlusZMinus } from "./glassIronFence/two/zPlusZMinus";
import { ZeroNormal } from "./glassIronFence/zero/normal";

class GlassIronFence extends Block{
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
        return new OneZPlus(this.x, this.y, this.z).zPlus();
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

export { GlassIronFence }