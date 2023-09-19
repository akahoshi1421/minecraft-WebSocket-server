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
            zPlus: new OneZPlus(this.x, this.y, this.z).zPlus
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

export { GlassIronFence }