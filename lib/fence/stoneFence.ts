import { Block } from "../block";
import { FourXPlusXMinusZPlusZMinus } from "./stoneFence/four/xPlusXMinusZPlusZMinus";
import { OneXMinus } from "./stoneFence/one/xMinus";
import { OneXPlus } from "./stoneFence/one/xPlus";
import { OneZMinus } from "./stoneFence/one/zMinus";
import { OneZPlus } from "./stoneFence/one/zPlus";
import { ThreeXMinusZPlusZMinus } from "./stoneFence/three/xMinusZPlusZMinus";
import { ThreeXPlusXMinusZMinus } from "./stoneFence/three/xPlusXMinusZMinus";
import { ThreeXPlusXMinusZPlus } from "./stoneFence/three/xPlusXMinusZPlus";
import { ThreeXPlusZPlusZMinus } from "./stoneFence/three/xPlusZPlusZMinus";
import { TwoXMinusZMinus } from "./stoneFence/two/xMinusZMinus";
import { TwoXMinusZPlus } from "./stoneFence/two/xMinusZPlus";
import { TwoXPlusXMinus } from "./stoneFence/two/xPlusXMinus";
import { TwoXPlusZMinus } from "./stoneFence/two/xPlusZMinus";
import { TwoXPlusZPlus } from "./stoneFence/two/xPlusZPlus";
import { TwoZPlusZMinus } from "./stoneFence/two/zPlusZMinus";
import { ZeroNormal } from "./stoneFence/zero/normal";

class StoneFence extends Block{
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

    private readonly xPlusHeigher: boolean = false;
    private readonly xMinusHeigher: boolean = false;
    private readonly zPlusHeigher: boolean = false;
    private readonly zMinusHeigher: boolean = false;
    private readonly centerHeigher: boolean = false;
    private readonly centerTaller: boolean = false;

    constructor(x: number, y: number, z: number, xPlusHeigher: boolean, xMinusHeigher: boolean, zPlusHeigher: boolean, zMinusHeigher: boolean, centerHeigher: boolean, centerTaller: boolean){
        super(x, y, z);
        this.xPlusHeigher = xPlusHeigher;
        this.xMinusHeigher = xMinusHeigher;
        this.zPlusHeigher = zPlusHeigher;
        this.zMinusHeigher = zMinusHeigher;
        this.centerHeigher = centerHeigher;
        this.centerTaller = centerTaller;
    }

    // 0個
    private zeroNormal(){
        return new ZeroNormal(this.x, this.y, this.z).normal();
    }

    // 1個
    private oneXMinus(){
        return new OneXMinus(this.x, this.y, this.z, this.xMinusHeigher).xMinus();
    }

    private oneXPlus(){
        return new OneXPlus(this.x, this.y, this.z, this.xPlusHeigher).xPlus();
    }

    private oneZMinus(){
        return new OneZMinus(this.x, this.y, this.z, this.zMinusHeigher).zMinus();
    }

    private oneZPlus(){
        return new OneZPlus(this.x, this.y, this.z, this.zPlusHeigher).zPlus();
    }

    // 2個
    private twoXMinusZMinus(){
        return new TwoXMinusZMinus(this.x, this.y, this.z, this.xMinusHeigher, this.zMinusHeigher).xMinusZMinus();
    }

    private twoXMinusZPlus(){
        return new TwoXMinusZPlus(this.x, this.y, this.z, this.xMinusHeigher, this.zPlusHeigher).xMinusZPlus();
    }

    private twoXPlusXMinus(){
        return new TwoXPlusXMinus(this.x, this.y, this.z, this.xPlusHeigher, this.xMinusHeigher, this.centerHeigher, this.centerTaller).xPlusXMinus();
    }

    private twoXPlusZMinus(){
        return new TwoXPlusZMinus(this.x, this.y, this.z, this.xPlusHeigher, this.zMinusHeigher).xPlusZMinus();
    }

    private twoXPlusZPlus(){
        return new TwoXPlusZPlus(this.x, this.y, this.z, this.xPlusHeigher, this.zPlusHeigher).xPlusZPlus();
    }

    private twoZPlusZMinus(){
        return new TwoZPlusZMinus(this.x, this.y, this.z, this.zPlusHeigher, this.zMinusHeigher, this.centerHeigher, this.centerTaller).zPlusZMinus();
    }

    // 3個
    private threeXMinusZPlusZMinus(){
        return new ThreeXMinusZPlusZMinus(this.x, this.y, this.z, this.xMinusHeigher, this.zPlusHeigher, this.zMinusHeigher).xMinusZPlusZMinus();
    }

    private threeXPlusXMinusZMinus(){
        return new ThreeXPlusXMinusZMinus(this.x, this.y, this.z, this.xPlusHeigher, this.xMinusHeigher, this.zMinusHeigher).xPlusXMinusZMinus();
    }

    private threeXPlusXMinusZPlus(){
        return new ThreeXPlusXMinusZPlus(this.x, this.y, this.z, this.xPlusHeigher, this.xMinusHeigher, this.zPlusHeigher).xPlusXMinusZPlus();
    }

    private threeXPlusZPlusZMinus(){
        return new ThreeXPlusZPlusZMinus(this.x, this.y, this.z, this.xPlusHeigher, this.zPlusHeigher, this.zMinusHeigher).xPlusZPlusZMinus();
    }

    // 4個
    private fourXPlusXMinusZPlusZMinus(){
        return new FourXPlusXMinusZPlusZMinus(this.x, this.y, this.z, this.xPlusHeigher, this.xMinusHeigher, this.zPlusHeigher, this.zMinusHeigher).xPlusXMinusZPlusZMinus();
    }
}

export { StoneFence }