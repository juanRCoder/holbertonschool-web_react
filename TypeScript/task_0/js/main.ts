interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'juan',
  lastName: 'ramirez',
  age: 22,
  location: 'lima', 
};
const student2: Student = {
    firstName: 'celeste',
    lastName: 'rodriguez',
    age: 22,
    location: 'tacna'
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table)

studentsList.forEach(student => {
    const row = table.insertRow();
    const camp1 = row.insertCell();
    const camp2 = row.insertCell();

    camp1.textContent = student.firstName;
    camp2.textContent = student.location;
});

document.body.appendChild(table)
