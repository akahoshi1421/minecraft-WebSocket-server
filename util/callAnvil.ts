import { Anvil } from "../lib/anvil"
import { BLOCK_DATA } from "../lib/blockData/blockData";

const callAnvil = (id: number, x: number, y: number, z: number) => {
    const anvil = new Anvil(x, y, z);
    const ANVIL = BLOCK_DATA.ANVIL;

    switch(id){
        case ANVIL:
            return anvil.zDir();

        case ANVIL + 0.1:
            return anvil.xDir();
    }
}

export { callAnvil }