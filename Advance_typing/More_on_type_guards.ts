/**
 * *  Type Guards help with Union type.
 * *Often we need to know which exact type of value we are getting
 * *from Union type at runtime and Type guard help with that.
 *
 * !Idea of checking if certain properties or methods exists before you try to use it.
 */

type Combinable1 = string | number;

//typeof TYPE GUARD.
function add(a: Combinable1, b: Combinable1) {
  //  return a + b; this will not work here
  //first we need to check if the numbers are number or string

  //This is called type guard because this allows us to utilize the
  //flexibility union type gives us and still ensure our code runs
  //correctly at runtime.
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//in type guard
//when working with object
type Admin2 = {
  name: string;
  previleges: string[];
};

type Employee2 = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Admin2 | Employee2;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("previleges" in emp) {
    console.log("Previleges: " + emp.previleges);
  }
  if ("startDate" in emp) {
    console.log("StartDate: " + emp.startDate);
  }
}

//instanceOf TYPE GUARDS
//when working with classes
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(10);
  }
  //M2
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(20);
  }
}
