import { BLOCK_DATA } from "../lib/blockData/blockData";
import { EndPortal } from "../lib/endportal"

const callEndPortal = (id: number, x: number, y: number, z: number) => {
    const endportal = new EndPortal(x, y, z);
    const END_PORTAL = BLOCK_DATA.END_PORTAL;

    switch(id){
        case END_PORTAL:
            return endportal.normal();
        
        case END_PORTAL + 0.1:
            return endportal.withEye();
    }

    return "";
};

export { callEndPortal }