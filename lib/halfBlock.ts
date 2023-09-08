import { Block } from "./block";

class HalfBlock extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    up() {
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${super.x + 1}.000000e+01  ${super.y + 1}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${super.x + 1}.000000e+01  ${super.y + 1}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y + 1}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y + 1}.000000e+01  ${super.z}.000000e+01
            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y + 1}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y + 1}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y + 1}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y + 1}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y + 1}.000000e+01  ${super.z}.000000e+01
            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y + 1}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y + 1}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y + 1}.000000e+01  ${super.z}.000000e+01
            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y + 1}.000000e+01  ${super.z + 1}.000000e+01
            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${super.x + 1}.000000e+01  ${super.y + 1}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y + 1}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y + 1}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${super.x + 1}.000000e+01  ${super.y + 1}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y + 1}.000000e+01  ${super.z}.000000e+01       
            endloop
        endfacet`   
    }

    down() {
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.000000e+01  ${super.z}.000000e+01
            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.000000e+01  ${super.z + 1}.000000e+01
            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.000000e+01  ${super.z + 1}.000000e+01
            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.000000e+01  ${super.z + 1}.000000e+01
            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${super.x + 1}.000000e+01  ${super.y}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.000000e+01  ${super.z}.000000e+01
            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.000000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z + 1}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.000000e+01  ${super.z + 1}.000000e+01
            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${super.x}.000000e+01  ${super.y}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.000000e+01  ${super.z}.000000e+01
            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${super.x + 1}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01
                vertex  ${super.x + 1}.000000e+01  ${super.y}.000000e+01  ${super.z}.000000e+01
                vertex  ${super.x}.000000e+01  ${super.y}.500000e+01  ${super.z}.000000e+01       
            endloop
        endfacet`
    }   
}

export { HalfBlock };