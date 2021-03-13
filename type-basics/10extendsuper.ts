class Vehicle{
    name:string;
    type:string;
    getName(){
        return "this is vehicle";
    }
}

class Bike extends Vehicle{

    getName(){
        return "this is bike";
    }

     getParentData(){
    return super.getName();
    }
}

var bkeval=new Bike();
console.log(bkeval.getName());
console.log(bkeval.getParentData());