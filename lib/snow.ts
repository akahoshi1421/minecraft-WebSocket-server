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
    
    one(){
        return snowOne(this.x, this.y, this.z);
    }

    two(){
        return snowTwo(this.x, this.y, this.z);
    }

    three(){
        return snowThree(this.x, this.y, this.z);
    }

    four(){
        return snowFour(this.x, this.y, this.z);
    }

    five(){
        return snowFive(this.x, this.y, this.z);
    }

    six(){
        return snowSix(this.x, this.y, this.z);
    }

    seven(){
        return snowSeven(this.x, this.y, this.z);
    }

    eight(){
        return this.block();
    }
}

export { Snow }