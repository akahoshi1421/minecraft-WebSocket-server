import { Vector3 } from "../../../vector3";

class ZeroNormal extends Vector3{
  constructor(x: number, y: number, z: number){
    super(x, y, z);
  }

  normal(){
    return `
    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${super.x}.625000e+01  ${super.y+1}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.625000e+01  ${super.y}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.625000e+01  ${super.y}.000000e+01  ${super.z}.375000e+01

        endloop
    endfacet
    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${super.x}.625000e+01  ${super.y+1}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.625000e+01  ${super.y+1}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.625000e+01  ${super.y}.000000e+01  ${super.z}.625000e+01

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${super.x}.375000e+01  ${super.y}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.375000e+01  ${super.y}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.375000e+01  ${super.y+1}.000000e+01  ${super.z}.375000e+01

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${super.x}.375000e+01  ${super.y+1}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.375000e+01  ${super.y+1}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.375000e+01  ${super.y}.000000e+01  ${super.z}.625000e+01

        endloop
    endfacet

    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${super.x}.375000e+01  ${super.y+1}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.375000e+01  ${super.y+1}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.625000e+01  ${super.y+1}.000000e+01  ${super.z}.375000e+01

        endloop
    endfacet
    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${super.x}.375000e+01  ${super.y+1}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.625000e+01  ${super.y+1}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.625000e+01  ${super.y+1}.000000e+01  ${super.z}.375000e+01

        endloop
    endfacet

    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${super.x}.375000e+01  ${super.y}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.625000e+01  ${super.y}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.375000e+01  ${super.y}.000000e+01  ${super.z}.625000e+01

        endloop
    endfacet
    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${super.x}.625000e+01  ${super.y}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.375000e+01  ${super.y}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.625000e+01  ${super.y}.000000e+01  ${super.z}.375000e+01

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${super.x}.375000e+01  ${super.y}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.625000e+01  ${super.y}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.375000e+01  ${super.y+1}.000000e+01  ${super.z}.625000e+01

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${super.x}.625000e+01  ${super.y+1}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.375000e+01  ${super.y+1}.000000e+01  ${super.z}.625000e+01

            vertex  ${super.x}.625000e+01  ${super.y}.000000e+01  ${super.z}.625000e+01

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${super.x}.375000e+01  ${super.y}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.375000e+01  ${super.y+1}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.625000e+01  ${super.y}.000000e+01  ${super.z}.375000e+01

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${super.x}.625000e+01  ${super.y+1}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.625000e+01  ${super.y}.000000e+01  ${super.z}.375000e+01

            vertex  ${super.x}.375000e+01  ${super.y+1}.000000e+01  ${super.z}.375000e+01
        endloop
    endfacet

    `
  }
}