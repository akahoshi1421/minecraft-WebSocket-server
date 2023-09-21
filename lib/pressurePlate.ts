import { Block } from "./block";

class PressurePlate extends Block{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    pressurePlate(){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.937500e+01  ${this.y}.062500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.000000e+01  ${this.z}.937500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.000000e+01  ${this.z}.062500e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.937500e+01  ${this.y}.062500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.062500e+01  ${this.z}.937500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.000000e+01  ${this.z}.937500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.062500e+01  ${this.y}.000000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.000000e+01  ${this.z}.937500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.062500e+01  ${this.z}.062500e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.062500e+01  ${this.y}.062500e+01  ${this.z}.937500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.062500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.000000e+01  ${this.z}.937500e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.062500e+01  ${this.y}.062500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.062500e+01  ${this.z}.937500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.062500e+01  ${this.z}.062500e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.062500e+01  ${this.y}.062500e+01  ${this.z}.937500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.062500e+01  ${this.z}.937500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.062500e+01  ${this.z}.062500e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.062500e+01  ${this.y}.000000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.000000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.000000e+01  ${this.z}.937500e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.937500e+01  ${this.y}.000000e+01  ${this.z}.937500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.000000e+01  ${this.z}.937500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.000000e+01  ${this.z}.062500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.062500e+01  ${this.y}.000000e+01  ${this.z}.937500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.000000e+01  ${this.z}.937500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.062500e+01  ${this.z}.937500e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.937500e+01  ${this.y}.062500e+01  ${this.z}.937500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.062500e+01  ${this.z}.937500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.000000e+01  ${this.z}.937500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.062500e+01  ${this.y}.000000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.062500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.000000e+01  ${this.z}.062500e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.937500e+01  ${this.y}.062500e+01  ${this.z}.062500e+01

                vertex  ${this.x}.937500e+01  ${this.y}.000000e+01  ${this.z}.062500e+01

                vertex  ${this.x}.062500e+01  ${this.y}.062500e+01  ${this.z}.062500e+01
            endloop
        endfacet

        `
    }
}

export { PressurePlate }