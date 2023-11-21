import { dirX } from "./anvil/dirX";
import { dirZ } from "./anvil/dirZ";
import { Block } from "./block";

class Anvil extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    xDir(scale: number){
        return dirX(this.x, this.y, this.z, scale);
    }

    zDir(scale: number){
        return dirZ(this.x, this.y, this.z, scale);
    }
}

export { Anvil }