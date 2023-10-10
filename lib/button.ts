import { Block } from "./block";
import { DirXButton } from "./button/dirXButton";
import { DirYButton } from "./button/dirYButton";
import { DirZButton } from "./button/dirZButton";

class Button extends Block{
    public readonly xDir: DirXButton;
    public readonly yDir: DirYButton;
    public readonly zDir: DirZButton;

    constructor(x: number, y: number, z: number){
        super(x, y, z);

        this.xDir = new DirXButton(this.x, this.y, this.z);
        this.yDir = new DirYButton(this.x, this.y, this.z);
        this.zDir = new DirZButton(this.x, this.y, this.z);
    }
}

export { Button }