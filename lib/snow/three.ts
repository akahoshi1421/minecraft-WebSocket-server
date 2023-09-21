const snowThree = (x: number, y: number, z: number) => {
    return `
    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${x+1}.000000e+01  ${y}.375000e+01  ${z}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z}.000000e+01

        endloop
    endfacet
    facet normal  1.000000e+01  0.000000e+00  0.000000e+01
        outer loop
            vertex  ${x+1}.000000e+01  ${y}.375000e+01  ${z}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.375000e+01  ${z+1}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${x}.000000e+01  ${y}.000000e+01  ${z}.000000e+01

            vertex  ${x}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01

            vertex  ${x}.000000e+01  ${y}.375000e+01  ${z}.000000e+01

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${x}.000000e+01  ${y}.375000e+01  ${z+1}.000000e+01

            vertex  ${x}.000000e+01  ${y}.375000e+01  ${z}.000000e+01

            vertex  ${x}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01

        endloop
    endfacet

    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${x}.000000e+01  ${y}.375000e+01  ${z}.000000e+01

            vertex  ${x}.000000e+01  ${y}.375000e+01  ${z+1}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.375000e+01  ${z}.000000e+01

        endloop
    endfacet
    facet normal  0.000000e+01  1.000000e+01  0.000000e+01
        outer loop
            vertex  ${x}.000000e+01  ${y}.375000e+01  ${z+1}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.375000e+01  ${z+1}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.375000e+01  ${z}.000000e+01

        endloop
    endfacet

    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${x}.000000e+01  ${y}.000000e+01  ${z}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z}.000000e+01

            vertex  ${x}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01

        endloop
    endfacet
    facet normal  0.000000e+01  -1.000000e+01  0.000000e+01
        outer loop
            vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01

            vertex  ${x}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z}.000000e+01

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${x}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01

            vertex  ${x}.000000e+01  ${y}.375000e+01  ${z+1}.000000e+01

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  1.000000e+01
        outer loop
            vertex  ${x+1}.000000e+01  ${y}.375000e+01  ${z+1}.000000e+01

            vertex  ${x}.000000e+01  ${y}.375000e+01  ${z+1}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z+1}.000000e+01

        endloop
    endfacet

    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${x}.000000e+01  ${y}.000000e+01  ${z}.000000e+01

            vertex  ${x}.000000e+01  ${y}.375000e+01  ${z}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z}.000000e+01

        endloop
    endfacet
    facet normal  0.000000e+00  0.000000e+00  -1.000000e+01
        outer loop
            vertex  ${x+1}.000000e+01  ${y}.375000e+01  ${z}.000000e+01

            vertex  ${x+1}.000000e+01  ${y}.000000e+01  ${z}.000000e+01

            vertex  ${x}.000000e+01  ${y}.375000e+01  ${z}.000000e+01
        endloop
    endfacet

    `
}

export { snowThree }