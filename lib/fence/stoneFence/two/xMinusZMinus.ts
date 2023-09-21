import { Vector3 } from "../../../vector3";

class TwoXMinusZMinus extends Vector3{
    private xMinusHeigher: boolean = false;
    private zMinusHeigher: boolean = false;

    constructor(x: number, y: number, z: number, xMinusHeigher: boolean, zMinusHeigher: boolean){
        super(x, y, z);
        this.xMinusHeigher = xMinusHeigher;
        this.zMinusHeigher = zMinusHeigher;
    }

    xMinusZMinus(){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.750000e+01  ${this.y+1}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.750000e+01  ${this.y}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.750000e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.750000e+01  ${this.y+1}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.750000e+01  ${this.y+1}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.750000e+01  ${this.y}.000000e+01  ${this.z}.750000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.250000e+01  ${this.y+1}.000000e+01  ${this.z}.250000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.y+1}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.250000e+01  ${this.y+1}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.750000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.y+1}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.250000e+01  ${this.y+1}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.750000e+01  ${this.y+1}.000000e+01  ${this.z}.250000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.y+1}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.750000e+01  ${this.y+1}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.750000e+01  ${this.y+1}.000000e+01  ${this.z}.250000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.750000e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.750000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.750000e+01  ${this.y}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.750000e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.750000e+01  ${this.y}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.250000e+01  ${this.y+1}.000000e+01  ${this.z}.750000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.750000e+01  ${this.y+1}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.250000e+01  ${this.y+1}.000000e+01  ${this.z}.750000e+01

                vertex  ${this.x}.750000e+01  ${this.y}.000000e+01  ${this.z}.750000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.250000e+01  ${this.y+1}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.750000e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.750000e+01  ${this.y+1}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.750000e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.250000e+01  ${this.y+1}.000000e+01  ${this.z}.250000e+01
            endloop
        endfacet

        





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.312500e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.687500e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.312500e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.312500e+01

                vertex  ${this.x}.250000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.687500e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.687500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.312500e+01

                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.687500e+01

                vertex  ${this.x}.000000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.312500e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.687500e+01

                vertex  ${this.x}.000000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.312500e+01

                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.687500e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.312500e+01

                vertex  ${this.x}.000000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.687500e+01

                vertex  ${this.x}.250000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.312500e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.687500e+01

                vertex  ${this.x}.250000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.687500e+01

                vertex  ${this.x}.250000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.312500e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.312500e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.312500e+01

                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.687500e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.687500e+01

                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.687500e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.312500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.687500e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.687500e+01

                vertex  ${this.x}.000000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.687500e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.687500e+01

                vertex  ${this.x}.000000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.687500e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.687500e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.000000e+01  ${this.y}.000000e+01  ${this.z}.312500e+01

                vertex  ${this.x}.000000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.312500e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.312500e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.250000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.312500e+01

                vertex  ${this.x}.250000e+01  ${this.y}.000000e+01  ${this.z}.312500e+01

                vertex  ${this.x}.000000e+01  ${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.312500e+01
            endloop
        endfacet




        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.687500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.000000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${this.x}.687500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.000000e+01

                vertex  ${this.x}.687500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.312500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01

                vertex  ${this.x}.312500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.000000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.000000e+01

                vertex  ${this.x}.312500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01

                vertex  ${this.x}.687500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01

                vertex  ${this.x}.687500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01

                vertex  ${this.x}.687500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

                vertex  ${this.x}.312500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${this.x}.687500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01

                vertex  ${this.x}.312500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.312500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.000000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${this.x}.687500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.000000e+01

                vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.000000e+01

                vertex  ${this.x}.312500e+01  ${this.zMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.000000e+01
            endloop
        endfacet

        `
    }
}

export { TwoXMinusZMinus }