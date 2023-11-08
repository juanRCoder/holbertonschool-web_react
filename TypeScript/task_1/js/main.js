;
;
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
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName); //J. Doe
};
var teacher = printTeacher('Jhon', 'Doe');
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass('John', 'Doe');
//task1
console.log(teacher3);
//task2
console.log(director1);
//task3
console.log(teacher);
//task4
console.log(student);
