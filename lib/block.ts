class Block{
    public x: number = NaN;
    public y: number = NaN;
    public z: number = NaN;

    constructor(x: number, y: number, z: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * 通常の立方体ブロックのSTLデータ化
     * @returns 
     */
    block(){
        return `\n\
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01\n\
            outer loop\n\
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01\n\
            outer loop\n\
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01\n\
            endloop\n\
        endfacet\n\
          \n\
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01\n\
            outer loop\n\
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01\n\
            outer loop\n\
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01\n\
            endloop\n\
        endfacet\n\
          \n\
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01\n\
            outer loop\n\
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01\n\
            outer loop\n\
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01\n\
            endloop\n\
        endfacet\n\
           \n\
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01\n\
            outer loop\n\
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01\n\
            outer loop\n\
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01\n\
            endloop\n\
        endfacet\n\
           \n\
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01\n\
            outer loop\n\
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z+1}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01\n\
            outer loop\n\
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z+1}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01\n\
            endloop\n\
        endfacet\n\
           \n\
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01\n\
            outer loop\n\
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01\n\
            outer loop\n\
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01\n\
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01\n\
            endloop\n\
        endfacet\n\
        `;
    }

}

export { Block };