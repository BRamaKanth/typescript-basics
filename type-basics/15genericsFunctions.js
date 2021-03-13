function call1(arg) {
    return arg;
}
var a1 = call1(1); //passing nymber but return it as string 
var a2 = call1(2); //same as above-not restricting the type
function call2(arg) {
    return arg;
}
//var a3:string=call2(1); //passing number -so return type should also be number
var a4 = call2(2); //both are of same type
var a5 = call2('kanth');
