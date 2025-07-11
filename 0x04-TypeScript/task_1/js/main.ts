// Let's build a Teacher interface
interface Teacher{
  readonly firstname: string;
  readonly lastname: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
}

// Extending the Teacher class
interface Director extends Teacher{
  numberOfReports: number;
}

const information: Director = {
  firstname: "John",
  lastname: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 4,
  location: "Nigeria",
  onContract: true,
  numberOfReports: 5
}

console.log("Information is: ", information);

// Printing teachers
interface printTeacherFunction{
  (firstname: string, lastname: string): string;
}

const printTeacher: printTeacherFunction = (firstname: string, lastname: string): string => {
  return `${firstname.charAt(0)}. ${lastname}`
}

console.log("Print teacher is: ", printTeacher("James", "Miller"))

