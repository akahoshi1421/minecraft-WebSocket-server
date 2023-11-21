import { Vector3 } from "../../../vector3";

class ThreeXPlusXMinusZPlus extends Vector3{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    xPlusXMinusZPlus(scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet




        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet




        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet




        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}
            endloop
        endfacet




        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.937500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}
            endloop
        endfacet

        `
    }
}

export { ThreeXPlusXMinusZPlus }