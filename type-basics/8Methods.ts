class EmployeName{
    firstname:string;
    lastname:string;
    getfullname(){
       return this.firstname+' '+this.lastname;
    }
}

var emp2=new EmployeName();
emp2.firstname='kanth';
emp2.lastname='rama';
console.log(emp2.getfullname());
