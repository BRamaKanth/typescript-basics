var read = /** @class */ (function () {
    //we can set values to read only directly or using constructor
    function read(fname) {
        this.name = "kanth";
        this.fname = fname;
    }
    return read;
}());
var rdonly = new read("ramakanth");
console.log(rdonly.fname);
//rdonly.fname='rama';  //cannot set value for the readonly property
