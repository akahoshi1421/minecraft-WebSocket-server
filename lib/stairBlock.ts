import { Block } from "./block";
import { CornerStair } from "./stair/cornerStair";

import { DownStair } from "./stair/downStair";
import { UpStair } from "./stair/upStair";

class StairBlock extends Block{
    public readonly cornerStair: CornerStair;
    private readonly direction: string = "";

    constructor(x: number, y: number, z: number, direction: "x-minus" | "x-plus" | "z-minus" | "z-plus" | ""){
        super(x, y, z);
        this.direction = direction;
        this.cornerStair = new CornerStair(this.x, this.y, this.z);
    }

    /**
     * 上むきの階段ブロックのSTLデータ化
     * @returns 
     */
    up() {
        switch(this.direction){
            case "x-minus":
                return UpStair.xMinus(this.x, this.y, this.z);
            case "x-plus":
                return UpStair.xPlus(this.x, this.y, this.z);
            case "z-plus":
                return UpStair.zPlus(this.x, this.y, this.z);
            case "z-minus":
                return UpStair.zMinus(this.x, this.y, this.z);
        }
    }

    /**
     * 下むきの階段ブロックのSTLデータ化
     * @returns 
     */
    down() {
        switch(this.direction){
            case "x-minus":
                return DownStair.xMinus(this.x, this.y, this.z);
            case "x-plus":
                return DownStair.xPlus(this.x, this.y, this.z);
            case "z-plus":
                return DownStair.zPlus(this.x, this.y, this.z);
            case "z-minus":
                return DownStair.zMinus(this.x, this.y, this.z);
        }
        
    }   
}


export { StairBlock };