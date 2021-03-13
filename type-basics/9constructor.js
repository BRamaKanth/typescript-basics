var EmpNam = /** @class */ (function () {
    // constructor(){
    //   this.firstname=" ";
    //   this.lastname=" ";
    //}
    //Function overloaded is not valid here.. so only 1 constructor should be implemented
    function EmpNam(firstname, lastname) {
        this.lastname = lastname;
        this.firstname = firstname;
    }
    EmpNam.prototype.getfullname = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return EmpNam;
}());
var empn = new EmpNam('rama', 'kanth');
console.log(empn.getfullname());
