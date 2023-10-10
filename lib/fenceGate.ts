import { Block } from "./block";
import { DirXFenceGate } from "./fenceGate/dirXFenceGate";
import { DirZFenceGate } from "./fenceGate/dirZFenceGate";

class FenceGate extends Block{
    public readonly xDir: DirXFenceGate;
    public readonly zDir: DirZFenceGate;

    constructor(x: number, y: number, z: number){
        super(x, y, z);

        this.xDir = new DirXFenceGate(this.x, this.y, this.z);
        this.zDir = new DirZFenceGate(this.x, this.y, this.z);
    }
}

export { FenceGate }