interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface  {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface{
  constructor(){}

  workFromHome(): string {
    return "Working from home"
  }
  
  getCoffeeBreak(): string {
    return "Getting a coffee break"
  }

  workDirectorTasks(): string {
    return "Getting to director tasks"
  }
}

class Teacher implements TeacherInterface{
  constructor(){}

  workFromHome(): string {
    return "Working from home"
  }
  
  getCoffeeBreak(): string {
    return "Getting a coffee break"
  }

  workTeacherTasks(): string {
    return "Getting to work"
  }
}

function createEmployee(salary: number | string): Director | Teacher{
  if ( (typeof(salary) === 'number') && (salary < 500) ){
    return new Teacher()
  }
  return new Director()
}

// Type predicate function to check if an employee is a Director
function isDirector(employee: Director | Teacher ): employee is Director{
  return employee instanceof Director
}

function executeWork(employee: Director|Teacher): void{
  if(isDirector(employee)){
    console.log(employee.workDirectorTasks())
  }else{
    console.log(employee.workTeacherTasks())
  }
}

const employee1 = createEmployee(300);
executeWork(employee1);
const employee2 = createEmployee(800);
executeWork(employee2);

// String literal type for Subjects
type Subjects = "Math" | "History"

function teachClass(todayClass: Subjects): string{
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));

