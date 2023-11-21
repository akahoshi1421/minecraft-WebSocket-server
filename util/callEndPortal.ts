import { BLOCK_DATA } from "../lib/blockData/blockData";
import { EndPortal } from "../lib/endportal"

const callEndPortal = (id: number, x: number, y: number, z: number, scale: number) => {
    const endportal = new EndPortal(x, y, z);
    const END_PORTAL = BLOCK_DATA.END_PORTAL;

    switch(id){
        case END_PORTAL:
            return endportal.normal(scale);
        
        case END_PORTAL + 0.1:
            return endportal.withEye(scale);
    }

    return "";
};

export { callEndPortal }