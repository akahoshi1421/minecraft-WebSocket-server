import { Vector3 } from "../../vector3";

class YPlus extends Vector3{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    yPlus(){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.687500e+01  ${this.y}.125000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.375000e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.687500e+01  ${this.y}.125000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.125000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.625000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.125000e+01  ${this.z}.375000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.125000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.125000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.625000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.125000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.125000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.125000e+01  ${this.z}.375000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.125000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.125000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.125000e+01  ${this.z}.375000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.625000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.375000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.125000e+01  ${this.z}.625000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.687500e+01  ${this.y}.125000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.125000e+01  ${this.z}.625000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.625000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.125000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.375000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.687500e+01  ${this.y}.125000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.375000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.125000e+01  ${this.z}.375000e+01
            endloop
        endfacet

        `
    }
}

export { YPlus }