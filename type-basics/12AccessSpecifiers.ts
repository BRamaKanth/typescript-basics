class A{
    private fname:string;
    private lname:string;
    protected age:number;
    public phone:number;
    constructor(fname:string,lname:string,age:number,phone:number){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.phone=phone;
    }
    getFullName(){
        return this.fname+" "+this.lname;
    }
}
class B extends A{

    getDetails(){
        console.log(this.age);            //can able to access protected as B is of type A
        console.log(this.phone);          //can able to access public members
       // console.log(this.lname);   cannot able to access private members
    }
}

var bb=new B('rama','kanth',28,984334);
console.log(bb.getFullName());
console.log(bb.getDetails());
