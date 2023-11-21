import { Block } from "./block";
import { endportalNormal } from "./endportal/normal";
import { endportalWithEye } from "./endportal/withEye";

class EndPortal extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    normal(scale: number){
        return endportalNormal(this.x, this.y, this.z, scale);
    }

    withEye(scale: number){
        return endportalWithEye(this.x, this.y, this.z, scale);
    }
}

export { EndPortal }