import { Vector3 } from "../../../vector3";

class TwoZPlusZMinus extends Vector3{
    private zPlusHeigher: boolean = false;
    private zMinusHeigher: boolean = false;
    private centerHeigher: boolean = false;
    private centerTaller: boolean = false;

    constructor(x: number, y: number, z: number, zPlusHeigher: boolean, zMinusHeigher: boolean, centerHeigher: boolean, centerTaller: boolean){
        super(x, y, z);
        this.zPlusHeigher = zPlusHeigher;
        this.zMinusHeigher = zMinusHeigher;
        this.centerHeigher = centerHeigher;
        this.centerTaller = centerTaller;
    }

    zPlusZMinus(){
        if(this.centerHeigher){
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
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                endloop
            endfacet
            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
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
        else{
            return `
            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01
        
                endloop
            endfacet
            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.250000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.centerTaller ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.250000e+01
                endloop
            endfacet
        
        
        
        
            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                endloop
            endfacet
            facet normal  1.000000e+01  0.000000e+00  0.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+01  1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  1.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z+1}.000000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z+1}.000000e+01
        
                endloop
            endfacet
        
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.312500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                endloop
            endfacet
            facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
                outer loop
                    vertex  ${this.x}.687500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
        
                    vertex  ${this.x}.687500e+01  ${this.y}.000000e+01  ${this.z}.750000e+01
        
                    vertex  ${this.x}.312500e+01  ${this.zPlusHeigher ? `${this.y+1}.000000e+01` : `${this.y}.800000e+01` }  ${this.z}.750000e+01
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
}

export { TwoZPlusZMinus }