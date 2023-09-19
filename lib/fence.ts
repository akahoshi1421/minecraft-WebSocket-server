import { Block } from "./block";
import { WoodFence } from "./fence/woodFence";
import { GlassIronFence } from "./fence/glassIronFence";

class Fence extends Block{
    public readonly woodFence: WoodFence;
    public readonly glassIronFence: GlassIronFence;

    constructor(x: number, y: number, z: number){
        super(x, y, z);

        this.woodFence = new WoodFence(this.x, this.y, this.z);
        this.glassIronFence = new GlassIronFence(this.x, this.y, this.z);
    }
}

export { Fence }