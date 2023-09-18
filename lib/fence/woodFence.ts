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
    public readonly zero = {}
    public readonly one = {}
    public readonly two = {}
    public readonly three = {}
    public readonly four = {}


    constructor(x: number, y: number, z: number){
        super(x, y, z);

        this.zero = {
            normal: new ZeroNormal(this.x, this.y, this.z).normal
        }

        this.one = {
            xMinus: new OneXMinus(this.x, this.y, this.z).xMinus,
            xPlus: new OneXPlus(this.x, this.y, this.z).xPlus,
            zMinus: new OneZMinus(this.x, this.y, this.z).zMinus,
            zPlus: new OneZplus(this.x, this.y, this.z).zPlus
        }

        this.two = {
            xMinusZMinus: new TwoXMinusZMinus(this.x, this.y, this.z).xMinusZMinus,
            xMinusZPlus: new TwoXMinusZPlus(this.x, this.y, this.z).xMinusZPlus,
            xPlusXMinus: new TwoXPlusXMinus(this.x, this.y, this.z).xPlusXMinus,
            xPlusZMinus: new TwoXPlusZMinus(this.x, this.y, this.z).xPlusZMinus,
            xPlusZPlus: new TwoXPlusZPlus(this.x, this.y, this.z).xPlusZPlus,
            zPlusZMinus: new TwoZPlusZMinus(this.x, this.y, this.z).zPlusZMinus
        }

        this.three = {
            xMinusZPlusZMinus: new ThreeXMinusZPlusZMinus(this.x, this.y, this.z).xMinusZPlusZMinus,
            xPlusXMinusZMinus: new ThreeXPlusXMinusZMinus(this.x, this.y, this.z).xPlusXMinusZMinus,
            xPlusXMinusZPlus: new ThreeXPlusXMinusZPlus(this.x, this.y, this.z).xPlusXMinusZPlus,
            xPlusZPlusZMinus: new ThreeXPlusZPlusZMinus(this.x, this.y, this.z).xPlusZPlusZMinus
        }

        this.four = {
            xPlusXMinusZPlusZMinus: new FourXPlusXMinusZPlusZMinus(this.x, this.y, this.z).xPlusXMinusZPlusZMinus
        }
    }
}

export { WoodFence }