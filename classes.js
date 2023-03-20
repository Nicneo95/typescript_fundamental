var Point = /** @class */ (function () {
    // we dont have to write this when we put the field as private in our constructor compiler know that x and y are attribute of Class Point 
    // x?: Number;
    // y?: Number;
    // we use ? to make the parameter optional
    // we use _ so get and set can be in small caps 
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
// use new to initialise a new Point object
var point = new Point(2);
point.draw();
var a = point.x;
console.log(a);
point.x = 20;
var b = point.x;
console.log(b);
