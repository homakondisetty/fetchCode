// Parent or base class
export class Employee {
  constructor(
    public id: number,
    public empName: string,
    public jobTitle: string
  ) {}
  greet(): void {
    console.log("Good morning");
  }
}

// Child or Derived class
export class SDE extends Employee {
  constructor(
    public jobDescription: string,
    id: number,
    empName: string,
    jobTitle: string
  ) {
    super(id, empName, jobTitle);
  }
  printGreet(): void {
    this.greet();
  }
}

const emp = new SDE("Developement", 101, "Homa", "SDE");
console.log(
  `Employe id with ${emp.id} called ${emp.empName} working as ${emp.jobTitle} whose job role is ${emp.jobDescription}`
);