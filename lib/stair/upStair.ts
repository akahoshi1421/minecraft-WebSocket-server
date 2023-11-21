class UpStair {
    static xMinus(x: number, y: number, z: number, scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}
            endloop
        endfacet
    `
    }

    static xPlus(x: number, y: number, z: number, scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.500000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}
            endloop
        endfacet
    `
    }

    static zMinus(x: number, y: number, z: number, scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}
            endloop
        endfacet




        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}
            endloop
        endfacet
    `
    }

    static zPlus(x: number, y: number, z: number, scale: number){
        return `
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z+1}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}
            endloop
        endfacet





        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  1.000000e+01  0.000000e+00  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.500000e+01`) * scale}

            endloop
        endfacet

        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

            endloop
        endfacet
        facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
            outer loop
                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}

                vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.500000e+01`) * scale}  ${Number(`${z}.000000e+01`) * scale}
            endloop
        endfacet
    `
    }
}

export { UpStair }