import { Vector3 } from "../../vector3";

class ZDown extends Vector3{
    constructor(x: number, y: number, z: number){
        super(x, y, z);
    }

    zDown(){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.187500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.187500e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.187500e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.187500e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.187500e+01

                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.187500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x+1}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x+1}.000000e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.000000e+01  ${this.y+1}.000000e+01  ${this.z}.000000e+01
            endloop
        endfacet

        `
    }
}

export { ZDown }