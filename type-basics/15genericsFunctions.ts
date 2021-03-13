function call1( arg:any):any{
    return arg;
}

var a1:string=call1(1);   //passing nymber but return it as string 
var a2:number=call1(2);   //same as above-not restricting the type

function call2<T>(arg: T): T{
   return arg;
}

//var a3:string=call2(1); //passing number -so return type should also be number
var a4:number=call2(2);   //both are of same type
var a5:string=call2('kanth');