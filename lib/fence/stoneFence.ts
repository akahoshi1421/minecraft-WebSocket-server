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
    public readonly zero = {}
    public readonly one = {}
    public readonly two = {}
    public readonly three = {}
    public readonly four = {}

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


        this.zero = {
            normal: new ZeroNormal(this.x, this.y, this.z).normal
        }
        
        this.one = {
            xMinus: new OneXMinus(this.x, this.y, this.z, this.xMinusHeigher).xMinus,
            xPlus: new OneXPlus(this.x, this.y, this.z, this.xPlusHeigher).xPlus,
            zMinus: new OneZMinus(this.x, this.y, this.z, this.zMinusHeigher).zMinus,
            zPlus: new OneZPlus(this.x, this.y, this.z, this.zPlusHeigher).zPlus
        }

        this.two = {
            xMinusZMinus: new TwoXMinusZMinus(this.x, this.y, this.z, this.xMinusHeigher, this.zMinusHeigher).xMinusZMinus,
            xMinusZPlus: new TwoXMinusZPlus(this.x, this.y, this.z, this.xMinusHeigher, this.zPlusHeigher).xMinusZPlus,
            xPlusXMinus: new TwoXPlusXMinus(this.x, this.y, this.z, this.xPlusHeigher, this.xMinusHeigher, this.centerHeigher, this.centerTaller).xPlusXMinus,
            xPlusZMinus: new TwoXPlusZMinus(this.x, this.y, this.z, this.xPlusHeigher, this.zMinusHeigher).xPlusZMinus,
            xPlusZPlus: new TwoXPlusZPlus(this.x, this.y, this.z, this.xPlusHeigher, this.zPlusHeigher).xPlusZPlus,
            zPlusZMinus: new TwoZPlusZMinus(this.x, this.y, this.z, this.zPlusHeigher, this.zMinusHeigher, this.centerHeigher, this.centerTaller).zPlusZMinus
        }

        this.three = {
            xMinusZPlusZMinus: new ThreeXMinusZPlusZMinus(this.x, this.y, this.z, this.xMinusHeigher, this.zPlusHeigher, this.zMinusHeigher).xMinusZPlusZMinus,
            xPlusXMinusZMinus: new ThreeXPlusXMinusZMinus(this.x, this.y, this.z, this.xPlusHeigher, this.xMinusHeigher, this.zMinusHeigher).xPlusXMinusZMinus,
            xPlusXMinusZPlus: new ThreeXPlusXMinusZPlus(this.x, this.y, this.z, this.xPlusHeigher, this.xMinusHeigher, this.zPlusHeigher).xPlusXMinusZPlus,
            xPlusZPlusZMinus: new ThreeXPlusZPlusZMinus(this.x, this.y, this.z, this.xPlusHeigher, this.zPlusHeigher, this.zMinusHeigher).xPlusZPlusZMinus
        }

        this.four = {
            xPlusXMinusZPlusZMinus: new FourXPlusXMinusZPlusZMinus(this.x, this.y, this.z, this.xPlusHeigher, this.xMinusHeigher, this.zPlusHeigher, this.zMinusHeigher).xPlusXMinusZPlusZMinus
        }
    }



}

export { StoneFence }