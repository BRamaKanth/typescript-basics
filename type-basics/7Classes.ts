class Employe{

    firstname:string;
    lastname;
}

var emp1=new Employe();  //here emp1 will become Employe type implicitly
emp1.firstname="kanth";
emp1.lastname="b";
emp1.lastname=true;     //we have not defined type for lastname
console.log(emp1.firstname+emp1.lastname);
