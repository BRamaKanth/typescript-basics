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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.call = function () {
        return "animal";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.call = function () {
        return "dog";
    };
    Dog.prototype.calldog = function () {
        return "DOG";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.call = function () {
        return "cat";
    };
    Cat.prototype.callcat = function () {
        return "CAT";
    };
    return Cat;
}(Animal));
function callAnimal(arg) {
    return arg;
}
var dog = new Dog();
var cat = new Cat();
var f1 = callAnimal(dog); //f1 is of type dog and subtype of Animal
f1.calldog();
var f2 = callAnimal(cat); //f2 is of type cat and subtype of Animal
f2.callcat();
