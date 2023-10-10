import { Vector3 } from "../../vector3";

class ZLower extends Vector3{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    zLower(){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.125000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.125000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.125000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.125000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.1250000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.1250000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.1250000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.000000e+01
            endloop
        endfacet






        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.875000e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z+1}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.875000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z+1}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.875000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.875000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z+1}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.875000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z+1}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z+1}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.125000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.875000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.812500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.125000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.812500e+01  ${this.z}.875000e+01
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.187500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.187500e+01  ${this.z}.125000e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.187500e+01  ${this.z}.875000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.187500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.187500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.125000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.187500e+01  ${this.z}.875000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.125000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.125000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.187500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.187500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.187500e+01  ${this.z}.875000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.187500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.187500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.187500e+01  ${this.z}.125000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.187500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.187500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.875000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.187500e+01  ${this.z}.875000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.187500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.187500e+01  ${this.z}.125000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.187500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.125000e+01
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.750000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.125000e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.750000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.750000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.875000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.750000e+01  ${this.z}.125000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.750000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.750000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.875000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.750000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.750000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.750000e+01  ${this.z}.125000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.750000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.750000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.750000e+01  ${this.z}.125000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.875000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.125000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.750000e+01  ${this.z}.875000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.750000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.750000e+01  ${this.z}.875000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.875000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.750000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.125000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.750000e+01  ${this.z}.125000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.125000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.750000e+01  ${this.z}.125000e+01
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.375000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.375000e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.375000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.625000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.625000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.385000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.375000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.625000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.375000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.625000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.375000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.625000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.375000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.625000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.625000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.375000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.625000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.375000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.625000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.625000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.625000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.625000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.375000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.375000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.375000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.375000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.375000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.375000e+01
            endloop
        endfacet

        `
    }
}

export { ZLower }