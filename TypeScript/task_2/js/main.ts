interface DirectorInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workDirectorTasks(): string;   
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workTeacherTasks(): string;   
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  else return new Director();
}

function isDirector(employee: any): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) console.log(employee.workDirectorTasks());
  else console.log(employee.workTeacherTasks());
}

//literal type
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math';
  else if (todayClass === 'History') return 'Teaching History';
}

//task5
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

//task6
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

//task7
console.log(teachClass('Math'));
console.log(teachClass('History'));