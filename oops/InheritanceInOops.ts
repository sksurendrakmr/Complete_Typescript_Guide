import { Department } from "./Classes";
/**
 * Inheritence, protected modifier, getter and setter, static method and properties
 */

//In typescript, we can only inherit from one class not multiple classes
class ITDepartment extends Department {
  //whenever we add our own in a class that inherit another class, we have to add super in the inheriting class.
  //super call the constructor of the base class.
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  //we can also override the method in base class
  addEmployee(name: string) {
    if (name === "Suri") return;
    this.employees.push(name); //we have made employees property protected
  }
}

const it = new ITDepartment("2", ["Jason"]);
it.addEmployee("abc");

/**
 * When we extend some class then we will get access to all public and protected fields
 * and methods and also constructor if we don't have own constructor in child class.
 */

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  //getters and setters
  get getLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set setLastReport(value: string) {
    if (!value) throw new Error("Please find the valid value");
    this.addReport(value);
  }
}

const accounting = new AccountingDepartment("d2", []);
accounting.setLastReport = "Hello";
console.log(accounting.getLastReport); //access it as a propert not call this method here

/**
 * Static methods and properties allow us to add properties and methods to classes
 * which are not accessed on an instance of the class.
 *
 * used for storing global constant or for utility functions that we want
 * to group or map to a class logically
 *
 * example defined in Department class.
 */

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
