import { Snow } from "../lib/snow";
import { BLOCK_DATA } from "../lib/blockData/blockData";

const callSnow = (id: number, x: number, y: number, z: number, scale: number) => {
    const snow = new Snow(x, y, z);
    const SNOW_BLOCK = BLOCK_DATA.SNOW;

    switch(id){
        case SNOW_BLOCK:
            return snow.one(scale);

        case SNOW_BLOCK + 0.1:
            return snow.two(scale);

        case SNOW_BLOCK + 0.2:
            return snow.three(scale);

        case SNOW_BLOCK + 0.3:
            return snow.four(scale);

        case SNOW_BLOCK + 0.4:
            return snow.five(scale);

        case SNOW_BLOCK + 0.5:
            return snow.six(scale);

        case SNOW_BLOCK + 0.6:
            return snow.seven(scale);

        case SNOW_BLOCK + 0.7:
            return snow.eight(scale);
    }

    return "";
};

export { callSnow }