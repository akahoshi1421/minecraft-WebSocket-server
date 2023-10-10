import { dirX } from "./anvil/dirX";
import { dirZ } from "./anvil/dirZ";
import { Block } from "./block";

class Anvil extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    xDir(){
        return dirX(this.x, this.y, this.z);
    }

    zDir(){
        return dirZ(this.x, this.y, this.z);
    }
}

export { Anvil }