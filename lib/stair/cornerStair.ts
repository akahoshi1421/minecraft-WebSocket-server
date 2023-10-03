import { Block } from "../block";
import { DownCorner } from "./corner/down-corner";
import { UpCorner } from "./corner/up-corner";

class CornerStair extends Block {
    public readonly downCorner: DownCorner;
    public readonly upCorner: UpCorner;

    constructor(x: number, y: number, z: number){
        super(x, y, z);

        this.downCorner = new DownCorner(this.x, this.y, this.z);
        this.upCorner = new UpCorner(this.x, this.y, this.z);
    }
}

export { CornerStair }
