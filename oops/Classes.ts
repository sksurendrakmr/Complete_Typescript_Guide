export class Department {
  //   name: string;
  protected employees: string[] = [];
  static fiscalYear = 2022;

  //   constructor(deptName: string) {
  //     this.name = deptName;
  //   }

  //shorthand method to initialaize class fields
  constructor(private readonly id: string, public name: string) {}

  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    // this.id = "4"; //error as this field is readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name };
  }
}

const accounting = new Department("1", "Accounting");
accounting.describe();
//this refers to the thing that responsible for calling the method

accounting.addEmployee("Surendra");
accounting.printEmployeeInformation();

/**
 * we should avoid accessing class field from outside the class.
 * After adding private modifier, we will get error if we access the class fields
 */
//accounting.employees[2] = "Anna"; //error after adding private modifier

/**
 * readonly modifier -> certain fields which should not just be private
 * or public but they also shouldn't change after their initialization.
 *
 * readonly make sure that if we try to write to property after initialization,
 * we fail.
 *
 * So we can only use it once during initialization.
 */
