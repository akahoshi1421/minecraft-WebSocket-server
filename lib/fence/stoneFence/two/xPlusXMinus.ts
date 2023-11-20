import { Vector3 } from "../../../vector3";

class TwoXPlusXMinus extends Vector3{
    private xPlusHeigher: boolean = false;
    private xMinusHeigher: boolean = false;
    private centerHeigher: boolean = false;
    private centerTaller: boolean = false;

    constructor(x: number, y: number, z: number, xPlusHeigher: boolean, xMinusHeigher: boolean, centerHeigher: boolean, centerTaller: boolean){
        super(x, y, z);
        this.xPlusHeigher = xPlusHeigher;
        this.xMinusHeigher = xMinusHeigher;
        this.centerHeigher = centerHeigher;
        this.centerTaller = centerTaller;
    }

    xPlusXMinus(scale: number){
        if(this.centerHeigher){
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





            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}
                endloop
            endfacet
    
            `
        }
        else{
            return `
            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.750000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}
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





            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.687500e+01`) * scale}

                endloop
            endfacet

            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.250000e+01`) * scale}  ${Number(`${this.y}.000000e+01`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}

                    vertex  ${Number(`${this.x}.000000e+01`) * scale}  ${Number(`${this.xMinusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }`) * scale}  ${Number(`${this.z}.312500e+01`) * scale}
                endloop
            endfacet
    
            `
        }
    }
}

export { TwoXPlusXMinus }