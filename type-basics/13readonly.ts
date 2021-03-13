class read{
    readonly name:string="kanth";
    readonly fname:string;
    //we can set values to read only directly or using constructor
    constructor(fname:string){
        this.fname=fname;
    }

}

var rdonly=new read("ramakanth");
console.log(rdonly.fname);
//rdonly.fname='rama';  //cannot set value for the readonly property

