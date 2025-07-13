/// <reference path='Teacher.ts' />
namespace Subjects {
  export class Subject{
    teacher: Teacher
    constructor (){}
    setTeacher(teacher: Teacher): void{
      this.teacher = teacher;
    }

  }
}