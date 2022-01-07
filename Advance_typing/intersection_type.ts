/**
 * !Intersection types
 * *It allow us to combine other types.
 * *Closly related to interface inheritance
 *
 * * Intersection types will only works with object type.
 * *Thus, in case of union type, it intersection type will be the type they have in common
 * *and in case of object types, it's combination of object properties
 */

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "suri",
  privileges: ["create-server"],
  startDate: new Date(),
};

//Intersection types will only works with object type.
//E.g.
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //type here is number i.e intersection of above two.

//Interface inheritance equivalent
interface Admin1 {
  name: string;
  previleges: string[];
}

interface Employee1 {
  name: string;
}

interface ElevatedEmployee1 extends Employee, Admin {}
