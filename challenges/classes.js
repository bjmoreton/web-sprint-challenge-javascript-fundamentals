// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMakerClass {
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surface_area(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

let cuboid = new CuboidMakerClass(4, 5, 5);
console.log(cuboid.volume());
console.log(cuboid.surface_area());
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(e){
        super();
        this.edgeLength = e;
    }

    volume(){
        return Math.pow(this.edgeLength, 3);
    }

    surface_area(){
        return Math.pow(6 * this.edgeLength, 2) / 6;
    }
}

let cube = new CubeMaker(5);
console.log("Cube Volume: ", cube.volume());
console.log("Cube Surface Area: ", cube.surface_area());