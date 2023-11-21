import { Vector3 } from "../../../vector3";

class ThreeXPlusZPlusZMinus extends Vector3{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }
    
    xPlusZPlusZMinus(scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}
            endloop
        endfacet



        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}
            endloop
        endfacet

        `
    }
}

export { ThreeXPlusZPlusZMinus }