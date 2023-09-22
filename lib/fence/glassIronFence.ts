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
        normal: this.zeroNormal
    }
    public readonly one = {
        xMinus: this.oneXMinus,
        xPlus: this.oneXPlus,
        zMinus: this.oneZMinus,
        zPlus: this.oneZPlus
    }
    public readonly two = {
        xMinusZMinus: this.twoXMinusZMinus,
        xMinusZPlus: this.twoXMinusZPlus,
        xPlusXMinus: this.twoXPlusXMinus,
        xPlusZMinus: this.twoXPlusZMinus,
        xPlusZPlus: this.twoXPlusZPlus,
        zPlusZMinus: this.twoZPlusZMinus 
    }
    public readonly three = {
        xMinusZPlusZMinus: this.threeXMinusZPlusZMinus,
        xPlusXMinusZMinus: this.threeXPlusXMinusZMinus,
        xPlusXMinusZPlus: this.threeXPlusXMinusZPlus,
        xPlusZPlusZMinus: this.threeXPlusZPlusZMinus 
    }
    public readonly four = {
        xPlusXMinusZPlusZMinus: this.fourXPlusXMinusZPlusZMinus
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