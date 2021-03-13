"use strict";
exports.__esModule = true;
exports.Exportclass = void 0;
var Exportclass = /** @class */ (function () {
    function Exportclass(firstname, lastname) {
        console.log(firstname + '' + lastname);
    }
    return Exportclass;
}());
exports.Exportclass = Exportclass;
var test = new Exportclass('rama', 'kanth');
//this class is used for exporting ,and it will be used in another places of the project
