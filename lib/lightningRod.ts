import { Block } from "./block";
import { DirXLightningRod } from "./lightningRod/dirXLightningRod";
import { DirYLightningRod } from "./lightningRod/dirYLightningRod";
import { DirZLightningRod } from "./lightningRod/dirZLightningRod";

class LightningRod extends Block{
    public readonly xDir: DirXLightningRod;
    public readonly yDir: DirYLightningRod;
    public readonly zDir: DirZLightningRod;

    constructor(x: number, y: number, z: number){
        super(x, y, z);
        
        this.xDir = new DirXLightningRod(this.x, this.y, this.z);
        this.yDir = new DirYLightningRod(this.x, this.y, this.z);
        this.zDir = new DirZLightningRod(this.x, this.y, this.z);
    }
}

export { LightningRod }