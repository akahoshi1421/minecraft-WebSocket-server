import { Block } from "./lib/block";
import { Carpet } from "./lib/carpet";
import { BLOCK_DATA } from "./lib/blockData/blockData";
import { callSnow } from "./util/callSnow";
import { callWoodFence } from "./util/callWoodFence";
import { callGlassIronFence } from "./util/callGlassIronFence";
import { callStoneFence } from "./util/callStoneFence";
import { PressurePlate } from "./lib/pressurePlate";
import { EnchantingTable } from "./lib/enchantingTable";
import { callHalfBlock } from "./util/callHalfBlock";
import { callStairBlock } from "./util/callStairBlock";
import { callEndPortal } from "./util/callEndPortal";
import { callButton } from "./util/callButton";
import { callAnvil } from "./util/callAnvil";

/** 配列形式のブロックデータをascii-stlに変換する */
function stlConvert(structuredata: [[[number]]]): string {
  let resultStringStl = "solid result";

  structuredata.forEach((y, i) => {
    y.forEach((x, j) => {
      x.forEach((z, k) => {
        //空気ブロックではないなら
        if (z !== 0) {
          switch (Math.floor(z)) {
            case BLOCK_DATA.NORMAL:
              resultStringStl += new Block(j, i, k).block();
              break;

            case BLOCK_DATA.CARPET: // カーペット
              resultStringStl += new Carpet(j, i, k).carpet();
              break;

            case BLOCK_DATA.HALF_BLOCK: // ハーフブロック
              resultStringStl += callHalfBlock(z, j, i, k);
              break;

            case BLOCK_DATA.STAIR_BLOCK: // 階段ブロック
              if(z === 4.0 || z === 4.4) resultStringStl += callStairBlock(z, j, i, k, "x-plus");
              else if(z === 4.1 || z === 4.5) resultStringStl += callStairBlock(z, j, i, k, "x-minus");
              else if(z === 4.2 || z === 4.6) resultStringStl += callStairBlock(z, j, i, k, "z-plus");
              else if(z === 4.3 || z === 4.7) resultStringStl += callStairBlock(z, j, i, k, "z-minus");
              else resultStringStl += callStairBlock(z, j, i, k);
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
              resultStringStl += callEndPortal(z, j, i, k);
              break;
            
            case BLOCK_DATA.PRESSURE_PLATE: // 感圧版
              resultStringStl += new PressurePlate(j, i, k).pressurePlate();
              break;

            case BLOCK_DATA.ENCHANTING_TABLE: // エンチャントテーブル
              resultStringStl += new EnchantingTable(j, i, k).enchantingTable();
              break;

            case BLOCK_DATA.BUTTON: // ボタン
              resultStringStl += callButton(z, j, i, k);
              break;

            case BLOCK_DATA.ANVIL: // 金床
              resultStringStl += callAnvil(z, j, i, k);
              break;
          }
        }
      });
    });
  });

  return resultStringStl + "\nendsolid\n";
}

export { stlConvert };
