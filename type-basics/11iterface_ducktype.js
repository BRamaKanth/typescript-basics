var Triumph = /** @class */ (function () {
    function Triumph() {
    }
    Triumph.prototype.getHp = function () {
        return "100";
    };
    return Triumph;
}());
var vbikes = new Triumph();
console.log(vbikes.getHp());
var Apache = /** @class */ (function () {
    function Apache() {
    }
    Apache.prototype.getHp = function () {
        return "22";
    };
    return Apache;
}());
vbikes = new Apache(); // even though vbikes is of type Bikes but we can initialize same type Object -
// this is called Duck Type
//console.log(vbikes.mileage)  - cannot able to access mileage as it is not part of type Bikes 
