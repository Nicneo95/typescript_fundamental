class Point {
   
    // we dont have to write this when we put the field as private in our constructor compiler know that x and y are attribute of Class Point 
    // x?: Number;
    // y?: Number;
    // we use ? to make the parameter optional
    // we use _ so get and set can be in small caps 
    constructor(private _x?: number,private _y?: number) {
        // this.x = x;
        // this.y = y;
    }

    draw() {
        console.log('X: ' + this._x + ' Y: ' + this._y)
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }
}

// use new to initialise a new Point object
let point = new Point(2);
point.draw();
// get x
let a = point.x;
console.log(a)
// set x
point.x = 20;
let b = point.x;
console.log(b)