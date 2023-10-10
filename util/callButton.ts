import { BLOCK_DATA } from "../lib/blockData/blockData";
import { Button } from "../lib/button"

const callButton = (id: number, x: number, y: number, z: number) => {
    const button = new Button(x, y, z);
    const BUTTON = BLOCK_DATA.BUTTON;

    const idNum1 = Math.floor(id * 10) / 10;

    switch(idNum1){
        case BUTTON:
            const xButtonId = returnId(id, 0);
            const xButton = button.xDir;

            if(xButtonId === 1) return xButton.xMinus();
            else if(xButtonId === 2) return xButton.xPlus();

            return "";

        case BUTTON + 0.1:
            const yButtonId = returnId(id, 0.1);
            const yButton = button.yDir;

            if(yButtonId === 1) return yButton.yMinus();
            else if(yButtonId === 2) return yButton.yPlus();

            return "";

        case BUTTON + 0.2:
            const zButtonId = returnId(id, 0.2);
            const zButton = button.zDir;

            if(zButtonId === 1) return zButton.zMinus();
            else if(zButtonId === 2) return zButton.zPlus();

            return "";
    }

    return "";
}

/**
 * 小数点第二位の値を返してくれる関数
 * @param id id
 * @param plusNum 足される値
 * @returns 
 */
const returnId = (id: number, plusNum: number) => {
    return Math.round((id - (BLOCK_DATA.BUTTON + plusNum)) * 100);
}

export { callButton }