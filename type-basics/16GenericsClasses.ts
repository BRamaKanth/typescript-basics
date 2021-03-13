class Animal{
    name:string;
    call(){
        return "animal";
    }
}

class Dog extends Animal{
    name:string;
    call(){
        return "dog";
    }
    calldog(){
        return "DOG";
    }
}
class Cat extends Animal{
    name:string;
    call(){
        return "cat";
    }
    callcat(){
        return "CAT";
    }

}

function callAnimal<T extends Animal>(arg:T):T{
    return arg;
}

var dog=new Dog();
var cat=new Cat();

var f1=callAnimal(dog);    //f1 is of type dog and subtype of Animal
f1.calldog();
var f2=callAnimal(cat);    //f2 is of type cat and subtype of Animal
f2.callcat();