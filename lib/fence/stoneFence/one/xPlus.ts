import { Vector3 } from "../../../vector3";

class OneXPlus extends Vector3{
    private xPlusHeigher: boolean = false;

    constructor(x: number, y: number, z: number, xPlusHeigher: boolean){
        super(x, y, z);
        this.xPlusHeigher = xPlusHeigher;
    }

    xPlus(scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}

                vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y+1}.000000e+01`) * scale}  ${Number(`${this.z}.250000e+01`) * scale}
            endloop
        endfacet






        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x+1}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.xPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}
            endloop
        endfacet

        `
    }
}

export { OneXPlus }