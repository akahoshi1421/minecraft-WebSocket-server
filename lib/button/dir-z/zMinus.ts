import { Vector3 } from "../../vector3";

class ZMinus extends Vector3{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    zMinus(scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.375000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.625000e+01`) * scale}  ${Number(`${this.z}.875000e+01`) * scale}
            endloop
        endfacet

        `
    }
}

export { ZMinus }