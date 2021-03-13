var EmployeName = /** @class */ (function () {
    function EmployeName() {
    }
    EmployeName.prototype.getfullname = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return EmployeName;
}());
var emp2 = new EmployeName();
emp2.firstname = 'kanth';
emp2.lastname = 'rama';
console.log(emp2.getfullname());
