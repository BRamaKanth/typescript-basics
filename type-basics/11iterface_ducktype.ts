 interface  Bikes{
    name:string;
    type:string;
    getHp():string;
}

class Triumph implements Bikes{
    name:string;
    type:string;
    getHp(){
        return "100";
    }
}

var vbikes:Bikes=new Triumph();
console.log(vbikes.getHp());

class Apache {
    name:string;
    type:string;
    mileage:number;
    getHp(){
        return "22";
    }
}

vbikes=new Apache();  // even though vbikes is of type Bikes but we can initialize same type Object -
                      // this is called Duck Type
//console.log(vbikes.mileage)  - cannot able to access mileage as it is not part of type Bikes 