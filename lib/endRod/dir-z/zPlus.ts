import { Vector3 } from "../../vector3";

class ZPlus extends Vector3{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    zPlus(){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.625000e+01  ${this.y}.625000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.625000e+01  ${this.y}.375000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.625000e+01  ${this.y}.375000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.625000e+01  ${this.y}.625000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.625000e+01  ${this.y}.625000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.625000e+01  ${this.y}.375000e+01  ${this.z}.062500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.375000e+01  ${this.y}.375000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.375000e+01  ${this.y}.375000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.375000e+01  ${this.y}.625000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.375000e+01  ${this.y}.625000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.375000e+01  ${this.y}.625000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.375000e+01  ${this.y}.375000e+01  ${this.z}.062500e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.375000e+01  ${this.y}.625000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.375000e+01  ${this.y}.625000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.625000e+01  ${this.y}.625000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.375000e+01  ${this.y}.625000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.625000e+01  ${this.y}.625000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.625000e+01  ${this.y}.625000e+01  ${this.z}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.375000e+01  ${this.y}.375000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.625000e+01  ${this.y}.375000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.375000e+01  ${this.y}.375000e+01  ${this.z}.062500e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.625000e+01  ${this.y}.375000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.375000e+01  ${this.y}.375000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.625000e+01  ${this.y}.375000e+01  ${this.z}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.375000e+01  ${this.y}.375000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.625000e+01  ${this.y}.375000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.375000e+01  ${this.y}.625000e+01  ${this.z}.062500e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.625000e+01  ${this.y}.625000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.375000e+01  ${this.y}.625000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.625000e+01  ${this.y}.375000e+01  ${this.z}.062500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.375000e+01  ${this.y}.375000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.375000e+01  ${this.y}.625000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.625000e+01  ${this.y}.375000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.625000e+01  ${this.y}.625000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.625000e+01  ${this.y}.375000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.375000e+01  ${this.y}.625000e+01  ${this.z}.000000e+01
            endloop
        endfacet




        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.562500e+01  ${this.y}.437500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.437500e+01  ${this.z}.062500e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.437500e+01  ${this.z+1}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.437500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.437500e+01  ${this.y}.437500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.062500e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.437500e+01  ${this.y}.437500e+01  ${this.z+1}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.062500e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.062500e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.437500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.562500e+01  ${this.y}.437500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.437500e+01  ${this.y}.437500e+01  ${this.z+1}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.437500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.437500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.437500e+01  ${this.z}.062500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.437500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.437500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z+1}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z+1}.000000e+01

                vertex  ${this.x}.562500e+01  ${this.y}.437500e+01  ${this.z+1}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.437500e+01  ${this.y}.437500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.562500e+01  ${this.y}.437500e+01  ${this.z}.062500e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.562500e+01  ${this.y}.562500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.562500e+01  ${this.y}.437500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.437500e+01  ${this.y}.562500e+01  ${this.z}.062500e+01
            endloop
        endfacet

        `
    }
}

export { ZPlus }