import { Vector3 } from "../../../vector3";

class OneZPlus extends Vector3{
    private zPlusHeigher: boolean = false;

    constructor(x: number, y: number, z: number, zPlusHeigher: boolean){
        super(x, y, z);
        this.zPlusHeigher = zPlusHeigher;
    }

    zPlus(scale: number){
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
                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.687500e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}

                vertex  ${Number(`${this.x}.312500e+01`) * scale}  ${Number(`${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.750000e+01`) * scale}
            endloop
        endfacet

        `
    }
}

export { OneZPlus }