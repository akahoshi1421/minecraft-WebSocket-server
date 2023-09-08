import { Block } from "./lib/block";
import { HalfBlock } from "./lib/halfBlock";
import { StairBlock } from "./lib/stairBlock";
import { Carpet } from "./lib/carpet";
import { BLOCK_DATA } from "./lib/blockData/blockData";

/** 配列形式のブロックデータをascii-stlに変換する */
function stlConvert(structuredata: [[[number]]]): string {
  let resultStringStl = "solid result";

  structuredata.forEach((y, i) => {
    y.forEach((x, j) => {
      x.forEach((z, k) => {
        //空気ブロックではないなら
        if (z !== 0) {
          switch (z) {
            case BLOCK_DATA.NORMAL:
              resultStringStl += new Block(j, i, k).block();
              break;

            case BLOCK_DATA.CARPET: // カーペット
              resultStringStl += new Carpet(j, i, k).carpet();
              break;

            case BLOCK_DATA.HALF_BLOCK_UP: // ハーフブロック(上)
              resultStringStl += new HalfBlock(j, i, k).up();
              break;

            case BLOCK_DATA.HALF_BLOCK_DOWN: // ハーフブロック(下)
              resultStringStl += new HalfBlock(j, i, k).down();
              break;

            case BLOCK_DATA.STAIR_BLOCK_DOWN_X_PLUS: // 階段ブロック(下、X+)
              resultStringStl += new StairBlock(j, i, k, "x-plus").down();
              break;

            case BLOCK_DATA.STAIR_BLOCK_DOWN_X_MINUS: // 階段ブロック(下、X-)
              resultStringStl += new StairBlock(j, i, k, "x-minus").down();
              break;

            case BLOCK_DATA.STAIR_BLOCK_DOWN_Z_PLUS: // 階段ブロック(下、Z+)
              resultStringStl += new StairBlock(j, i, k, "z-plus").down();
              break;

            case BLOCK_DATA.STAIR_BLOCK_DOWN_Z_MINUS: // 階段ブロック(下、Z-)
              resultStringStl += new StairBlock(j, i, k, "z-minus").down();
              break;

            case BLOCK_DATA.STAIR_BLOCK_UP_X_PLUS: // 階段ブロック(上、X+)
              resultStringStl += new StairBlock(j, i, k, "x-plus").up();
              break;

            case BLOCK_DATA.STAIR_BLOCK_UP_X_MINUS: // 階段ブロック(上、X-)
              resultStringStl += new StairBlock(j, i, k, "x-minus").up();
              break;

            case BLOCK_DATA.STAIR_BLOCK_UP_Z_PLUS: // 階段ブロック(上、Z+)
              resultStringStl += new StairBlock(j, i, k, "z-plus").up();
              break;

            case BLOCK_DATA.STAIR_BLOCK_UP_Z_MINUS: // 階段ブロック(上、Z-)
              resultStringStl += new StairBlock(j, i, k, "z-minus").up();
              break;
          }
        }
      });
    });
  });

  return resultStringStl + "endsolid\n";
}

export { stlConvert };
