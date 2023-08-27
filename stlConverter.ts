/** 配列形式のブロックデータをascii-stlに変換する */
function stlConvert(structuredata: [[[number]]]) : string {
    let resultStringStl = "solid result";

    structuredata.forEach((y, i) => {
        y.forEach((x, j) => {
            x.forEach((z, k) => {
                if(z !== 0) resultStringStl += stringChanger(j, i, k);
            });
        });
    });
    
    return resultStringStl + "endsolid\n";
} 

function stringChanger(x: number, y: number, z: number) : string{
    return `\n\
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01\n\
            outer loop\n\
                vertex  ${x+1}.000000e+01  ${y+1}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01\n\
            outer loop\n\
                vertex  ${x+1}.000000e+01  ${y+1}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y+1}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01\n\
            endloop\n\
        endfacet\n\
        ​   \n\
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01\n\
            outer loop\n\
                vertex  ${x}.000000e+01  ${y}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y+1}.000000e+01  ${z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01\n\
            outer loop\n\
                vertex  ${x}.000000e+01  ${y+1}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y+1}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01\n\
            endloop\n\
        endfacet\n\
        ​   \n\
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01\n\
            outer loop\n\
                vertex  ${x}.000000e+01  ${y+1}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y+1}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y+1}.000000e+01  ${z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01\n\
            outer loop\n\
                vertex  ${x}.000000e+01  ${y+1}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y+1}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y+1}.000000e+01  ${z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        ​   \n\
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01\n\
            outer loop\n\
                vertex  ${x}.000000e+01  ${y}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01\n\
            outer loop\n\
                vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        ​   \n\
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01\n\
            outer loop\n\
                vertex  ${x}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y+1}.000000e+01  ${z+1}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01\n\
            outer loop\n\
                vertex  ${x+1}.000000e+01  ${y+1}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y+1}.000000e+01  ${z+1}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01\n\
            endloop\n\
        endfacet\n\
        ​   \n\
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01\n\
            outer loop\n\
                vertex  ${x}.000000e+01  ${y}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y+1}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01\n\
            outer loop\n\
                vertex  ${x+1}.000000e+01  ${y+1}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z}.000000e+01\n\
                vertex  ${x}.000000e+01  ${y+1}.000000e+01  ${z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        `;
}



export {stlConvert};