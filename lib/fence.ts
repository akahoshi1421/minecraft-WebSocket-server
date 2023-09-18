import { Block } from "./block";
import { WoodFence } from "./fence/woodFence";

class Fence extends Block{
    public readonly woodFence: WoodFence;

    constructor(x: number, y: number, z: number){
        super(x, y, z);

        this.woodFence = new WoodFence(this.x, this.y, this.z);
    }
}

export { Fence }