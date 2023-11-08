;
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(teacher3);
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName); //J. Doe
};
var teacher = printTeacher('Jhon', 'Doe');
console.log(teacher);
