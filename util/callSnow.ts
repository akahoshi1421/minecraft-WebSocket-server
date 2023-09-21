import { Snow } from "../lib/snow";
import { BLOCK_DATA } from "../lib/blockData/blockData";

const callSnow = (id: number, x: number, y: number, z: number) => {
    const snow = new Snow(x, y, z);
    const SNOW_BLOCK = BLOCK_DATA.SNOW;

    switch(id){
        case SNOW_BLOCK:
            return snow.one();

        case SNOW_BLOCK + 0.1:
            return snow.two();

        case SNOW_BLOCK + 0.2:
            return snow.three();

        case SNOW_BLOCK + 0.3:
            return snow.four();

        case SNOW_BLOCK + 0.4:
            return snow.five();

        case SNOW_BLOCK + 0.5:
            return snow.six();

        case SNOW_BLOCK + 0.6:
            return snow.seven();

        case SNOW_BLOCK + 0.7:
            return snow.eight();
    }

    return "";
};

export { callSnow }