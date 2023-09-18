class Vector3{
    public x: number = NaN;
    public y: number = NaN;
    public z: number = NaN;


    constructor(x: number, y: number, z: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

export { Vector3 }