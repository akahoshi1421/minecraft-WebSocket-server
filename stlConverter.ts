import { Block } from "./lib/block";
import { HalfBlock } from "./lib/halfBlock";
import { StairBlock } from "./lib/stairBlock";
import { Carpet } from "./lib/carpet";
import { BLOCK_DATA } from "./lib/blockData/blockData";
import { callSnow } from "./util/callSnow";
import { callWoodFence } from "./util/callWoodFence";
import { callGlassIronFence } from "./util/callGlassIronFence";
import { callStoneFence } from "./util/callStoneFence";

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

            case BLOCK_DATA.SNOW: // 雪ブロック
              resultStringStl += callSnow(z, i, j, k);
              break;

            case BLOCK_DATA.WOOD_FENCE: // 木のフェンス
              resultStringStl += callWoodFence(z, i, j, k);
              break;

            case BLOCK_DATA.GLASS_IRON_FENCE: // 板ガラスと鉄格子
              resultStringStl += callGlassIronFence(z, i, j, k);
              break;

            case BLOCK_DATA.STONE_FENCE: // 石フェンス
              resultStringStl += callStoneFence(z, i, j, k);
              break;
          }
        }
      });
    });
  });

  return resultStringStl + "endsolid\n";
}

export { stlConvert };
