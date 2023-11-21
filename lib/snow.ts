import { Block } from "./block";
import { snowFive } from "./snow/five";
import { snowFour } from "./snow/four";
import { snowOne } from "./snow/one";
import { snowSeven } from "./snow/seven";
import { snowSix } from "./snow/six";
import { snowThree } from "./snow/three";
import { snowTwo } from "./snow/two";

class Snow extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }
    
    one(scale: number){
        return snowOne(this.x, this.y, this.z, scale);
    }

    two(scale: number){
        return snowTwo(this.x, this.y, this.z, scale);
    }

    three(scale: number){
        return snowThree(this.x, this.y, this.z, scale);
    }

    four(scale: number){
        return snowFour(this.x, this.y, this.z, scale);
    }

    five(scale: number){
        return snowFive(this.x, this.y, this.z, scale);
    }

    six(scale: number){
        return snowSix(this.x, this.y, this.z, scale);
    }

    seven(scale: number){
        return snowSeven(this.x, this.y, this.z, scale);
    }

    eight(scale: number){
        return this.block(scale);
    }
}

export { Snow }