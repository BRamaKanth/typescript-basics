function addO(a:number, b:number, c?:number) {
    return a + b + c;
}
var sumo1:number;
sumo1 = addO(3, 4, 5);
var sumo2 = addO(3, 4);
//var sum2=add(3,4,5,6);  3rd argument is optional ...but not var args using ?
