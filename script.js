//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
    get name{
	  return this.name
    }
    set age(newAge){
		this.age = newAge;
	}
}

class Student extends Person {
	construnctor(name,age){
	 super(name, age);
	}

	   study(){
		  console.log(this.name +"is studying");
	   }
	
}

class Teacher extends Person {
	construnctor(name,age){
	 super(name, age);
	}

	   teach(){
		  console.log(this.name +"is studying");
	   }
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
