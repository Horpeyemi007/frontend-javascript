interface Student{
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: "Opeyemi",
  lastName: 'Alabi',
  age: 20,
  location: "Lagos, Nigeria"
}

const student2: Student = {
  firstName: "John",
  lastName: 'Doe',
  age: 18,
  location: "Huston, Texas"
}

// array of the two student variable
const studentList: Student[] = [student1, student2];

// render the table using a function with vanillaJS
function renderStudentTable(){
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  const headerRow = document.createElement('tr');
  
  const thFirstName = document.createElement('th');
  thFirstName.textContent = "Firstname";

  const thLocation = document.createElement('th');
  thLocation.textContent = "Location";

  headerRow.appendChild(thFirstName);
  headerRow.appendChild(thLocation);
  tbody.appendChild(headerRow);

  // Append a new row for each student
  studentList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
} 

