import { Block } from "./block";

import { DownStair } from "./stair/downStair";
import { UpStair } from "./stair/upStair";

class StairBlock extends Block{
    direction: string = "";

    constructor(x: number, y: number, z: number, direction: "x-minus" | "x-plus" | "z-minus" | "z-plus"){
        super(x, y, z);
        this.direction = direction;
    }

    /**
     * 上むきの階段ブロックのSTLデータ化
     * @returns 
     */
    up() {
        switch(this.direction){
            case "x-minus":
                return UpStair.xMinus(super.x, super.y, super.z);
            case "x-plus":
                return UpStair.xPlus(super.x, super.y, super.z);
            case "z-plus":
                return UpStair.zPlus(super.x, super.y, super.z);
            case "z-minus":
                return UpStair.zMinus(super.x, super.y, super.z);
        }
    }

    /**
     * 下むきの階段ブロックのSTLデータ化
     * @returns 
     */
    down() {
        switch(this.direction){
            case "x-minus":
                return DownStair.xMinus(super.x, super.y, super.z);
            case "x-plus":
                return DownStair.xPlus(super.x, super.y, super.z);
            case "z-plus":
                return DownStair.zPlus(super.x, super.y, super.z);
            case "z-minus":
                return DownStair.zMinus(super.x, super.y, super.z);
        }
        
    }   
}


export { StairBlock };