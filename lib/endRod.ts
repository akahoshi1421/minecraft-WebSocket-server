import { Block } from "./block";
import { DirXEndRod } from "./endRod/dirXEndRod";
import { DirYEndRod } from "./endRod/dirYEndRod";
import { DirZEndRod } from "./endRod/dirZEndRod";

class EndRod extends Block{
    public readonly xDir: DirXEndRod;
    public readonly yDir: DirYEndRod;
    public readonly zDir: DirZEndRod;
    
    constructor(x: number, y: number, z: number){
        super(x, y, z);

        this.xDir = new DirXEndRod(this.x, this.y, this.z);
        this.yDir = new DirYEndRod(this.x, this.y, this.z);
        this.zDir = new DirZEndRod(this.x, this.y, this.z);
    }
}

export { EndRod }