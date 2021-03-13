class EmpNam{
    firstname:string;
    lastname:string;
   // constructor(){
    //   this.firstname=" ";
    //   this.lastname=" ";
    //}
    //Function overloaded is not valid here.. so only 1 constructor should be implemented
    constructor(firstname:string,lastname:string){
      this.lastname=lastname;
      this.firstname=firstname;
    }
    getfullname(){
        return this.firstname+' '+this.lastname;
     }
}

var empn=new EmpNam('rama','kanth');
console.log(empn.getfullname());