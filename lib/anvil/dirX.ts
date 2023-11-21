const dirX = (x: number, y: number, z: number, scale: number) => {
    return `
    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

        endloop
    endfacet
    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.875000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.875000e+01`) * scale}  ${Number(`${y}.000000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}

            vertex  ${Number(`${x}.125000e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.125000e+01`) * scale}
        endloop
    endfacet







    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

        endloop
    endfacet
    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.750000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.812500e+01`) * scale}  ${Number(`${y}.250000e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}

            vertex  ${Number(`${x}.187500e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.250000e+01`) * scale}
        endloop
    endfacet




    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

        endloop
    endfacet
    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.625000e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.750000e+01`) * scale}  ${Number(`${y}.312500e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}

            vertex  ${Number(`${x}.250000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.375000e+01`) * scale}
        endloop
    endfacet





    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

        endloop
    endfacet
    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.812500e+01`) * scale}

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x+1}.000000e+01`) * scale}  ${Number(`${y}.625000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}

            vertex  ${Number(`${x}.000000e+01`) * scale}  ${Number(`${y+1}.000000e+01`) * scale}  ${Number(`${z}.187500e+01`) * scale}
        endloop
    endfacet

    `
}

export { dirX }