var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A(fname, lname, age, phone) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.phone = phone;
    }
    A.prototype.getFullName = function () {
        return this.fname + " " + this.lname;
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.getDetails = function () {
        console.log(this.age); //can able to access protected as B is of type A
        console.log(this.phone); //can able to access public members
        // console.log(this.lname);   cannot able to access private members
    };
    return B;
}(A));
var bb = new B('rama', 'kanth', 28, 984334);
console.log(bb.getFullName());
console.log(bb.getDetails());
