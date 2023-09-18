class Vector3{
    protected readonly x: number = NaN;
    protected readonly y: number = NaN;
    protected readonly z: number = NaN;


    constructor(x: number, y: number, z: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

export { Vector3 }