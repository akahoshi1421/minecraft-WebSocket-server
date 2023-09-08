class Block{
    public x: number = NaN;
    public y: number = NaN;
    public z: number = NaN;

    constructor(x: number, y: number, z: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * 通常の立方体ブロックのSTLデータ化
     * @returns 
     */
    block(){

    }

}

export { Block };