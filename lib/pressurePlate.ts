import { Block } from "./block";

class PressurePlate extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    pressurePlate(scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.937500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.937500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}

                vertex  ${Number(`${this.x}.062500e+01`) * scale}  ${Number(`${this.y}.062500e+01`) * scale}  ${Number(`${this.z}.062500e+01`) * scale}
            endloop
        endfacet

        `
    }
}

export { PressurePlate }