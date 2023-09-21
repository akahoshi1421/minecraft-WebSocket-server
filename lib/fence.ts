import { Block } from "./block";
import { WoodFence } from "./fence/woodFence";
import { GlassIronFence } from "./fence/glassIronFence";
import { StoneFence } from "./fence/stoneFence";

class Fence extends Block{
    public readonly woodFence: WoodFence;
    public readonly glassIronFence: GlassIronFence;
    public readonly stoneFence: StoneFence;

    private xPlusHeigher: boolean = false;
    private xMinusHeigher: boolean = false;
    private zPlusHeigher: boolean = false;
    private zMinusHeigher: boolean = false;
    private centerHeigher: boolean = false;

    constructor(x: number, y: number, z: number, xPlusHeigher: boolean = false, xMinusHeigher: boolean = false, zPlusHeigher: boolean = false, zMinusHeigher: boolean = false, centerHeigher: boolean = false){
        super(x, y, z);
        this.xPlusHeigher = xPlusHeigher;
        this.xMinusHeigher = xMinusHeigher;
        this.zPlusHeigher = zPlusHeigher;
        this.zMinusHeigher = zMinusHeigher;
        this.centerHeigher = centerHeigher;

        this.woodFence = new WoodFence(this.x, this.y, this.z);
        this.glassIronFence = new GlassIronFence(this.x, this.y, this.z);
        this.stoneFence = new StoneFence(this.x, this.y, this.z, this.xPlusHeigher, this.xMinusHeigher, this.zPlusHeigher, this.zMinusHeigher, this.centerHeigher)
    }
}

export { Fence }