import { Vector3 } from "../../vector3";

class XLower extends Vector3{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    xLower(scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.427500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.427500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet






        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.875000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.125000e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet




        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.385000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.562500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.625000e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}

                vertex  ${Number(`${this.x}.375000e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.437500e+01`) * scale}
            endloop
        endfacet

        `
    }
}

export { XLower }