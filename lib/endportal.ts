import { Block } from "./block";
import { endportalNormal } from "./endportal/normal";
import { endportalWithEye } from "./endportal/withEye";

class EndPortal extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    normal(){
        return endportalNormal(this.x, this.y, this.z);
    }

    withEye(){
        return endportalWithEye(this.x, this.y, this.z);
    }
}

export { EndPortal }