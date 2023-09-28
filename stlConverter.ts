import { Block } from "./lib/block";
import { HalfBlock } from "./lib/halfBlock";
import { StairBlock } from "./lib/stairBlock";
import { Carpet } from "./lib/carpet";
import { BLOCK_DATA } from "./lib/blockData/blockData";
import { callSnow } from "./util/callSnow";
import { callWoodFence } from "./util/callWoodFence";
import { callGlassIronFence } from "./util/callGlassIronFence";
import { callStoneFence } from "./util/callStoneFence";
import { EndPortal } from "./lib/endportal";
import { PressurePlate } from "./lib/pressurePlate";
import { EnchantingTable } from "./lib/enchantingTable";
import { callHalfBlock } from "./util/callHalfBlock";

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

            case BLOCK_DATA.HALF_BLOCK: // ハーフブロック
              resultStringStl += callHalfBlock(z, j, i, k);
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
              resultStringStl += callSnow(z, j, i, k);
              break;

            case BLOCK_DATA.WOOD_FENCE: // 木のフェンス
              resultStringStl += callWoodFence(z, j, i, k);
              break;

            case BLOCK_DATA.GLASS_IRON_FENCE: // 板ガラスと鉄格子
              resultStringStl += callGlassIronFence(z, j, i, k);
              break;

            case BLOCK_DATA.STONE_FENCE: // 石フェンス
              resultStringStl += callStoneFence(z, j, i, k);
              break;

            case BLOCK_DATA.END_PORTAL: // エンドポータル
              resultStringStl += new EndPortal(j, i, k).endPortal();
              break;
            
            case BLOCK_DATA.PRESSURE_PLATE: // 感圧版
              resultStringStl += new PressurePlate(j, i, k).pressurePlate();
              break;

            case BLOCK_DATA.ENCHANTING_TABLE: // エンチャントテーブル
              resultStringStl += new EnchantingTable(j, i, k).enchantingTable();
              break;
          }
        }
      });
    });
  });

  return resultStringStl + "endsolid\n";
}

export { stlConvert };
