import { Vector3 } from "../../vector3";

class ZLower extends Vector3{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    zLower(scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.1250000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.1250000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.1250000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.000000e+01`) * scale}
            endloop
        endfacet






        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.125000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.812500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.187500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.750000e+01`) * scale}  ${Number(`${this.z}.125000e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.385000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.625000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.562500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}

                vertex  ${Number(`${this.x}.437500e+01`) * scale}  ${Number(`${this.y}.562500e+01`) * scale}  ${Number(`${this.z}.375000e+01`) * scale}
            endloop
        endfacet

        `
    }
}

export { ZLower }