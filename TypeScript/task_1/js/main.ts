interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearOfExperience?: number; //optional
  location: string;
  [key: string]: any;
}


interface Directors extends Teacher{
  numberOfReports: number;
}


//interfaz para la funcion
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


//interfaz para la clase
interface Student {
  firstName: string;
  lastName: string;
} 


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
  

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};


const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}` //J. Doe
}
const teacher: string = printTeacher('Jhon', 'Doe'); 


class StudentClass implements Student {
  firstName: string;
  lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  workOnHomework() {
    return 'Currently working'
  }
  
  displayName() {
    return this.firstName;
  }
}
  
const student: Student = new StudentClass('John', 'Doe');

//task1
console.log(teacher3);
//task2
console.log(director1);
//task3
console.log(teacher);
//task4
console.log(student);