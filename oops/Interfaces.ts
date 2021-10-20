/**
 * An Interface describes the structure of the object.
 * We can use it to describe how an object should look like.
 *
 * Interfaces are used to define objects.
 *
 * An interfaces can't have initializer.
 *
 * Why interface?
 * 1) Type check variables
 *
 *
 * Interfaces can only be used to describe the structure of an object
 * and we can use type alias for that but inside of a custom type, we can
 * also store other things like union type.
 *
 * Interfaces is clearer
 * we can implment an interface in a class.
 * Interface can be used as contract that class can implement
 * and a class then has adhere to.
 *
 * Interfaces are often used to share functionality amongest
 * different classes.
 *
 * Abstract class can have method implementation but interfaces can't have
 * implementation at all.
 */

interface People {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: People;

user1 = {
  name: "Surendra",
  age: 22,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

//Interfaces with classes
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

//can implement more than one interfaces
class Person implements Greetable {
  name: string;
  age: number;
  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

/**
 * We can use an interface as a type on some variable or constant which will then actually
 * store another clas of another type which in turn is based on the interface type
 * because it implements it.
 */
let user2: Greetable = new Person();

/**
 * Why Interfaces
 * If we want to ensure that a class or multiple classes has a specific method then
 * we can implement an interface which forces the existence of this method.
 *
 * This way we can easily share functionalities amongst classes and every class has to
 * add its own implementation. The exact code that should execute when the method is called
 * but we enforces certain structure with the interfaces.
 *
 * This can be useful if we then have other parts of our code which rely on that
 * structure.
 *
 * let user1:Greetable
 * Here, user1 to be of type Greetable and with that we said we don't care what's
 * inside user1 but what has to be in there is a greet method.
 *
 */

/**
 * Read only modifier
 *
 * we can add readonly modifier to an interface to make it clear that
 * specific property in whatever object you build based on this interface
 * must only be set once and is read only thereafter so it can't be changed
 * after the object has been initialized
 *
 * Also applicable to type alias
 *
 */

interface Car {
  readonly engine: string;
}

class BMW implements Car {
  engine: string;
}

const bmw: Car = new BMW();
//bmw.engine = "sdfs"; //error but getting error when the type of the object is of Car(interface) => research

const bmw1 = new BMW();
bmw1.engine = "sfdsdsdf"; //no error

/**
 * Extending Interfaces
 *
 * We can implement inheritence with interfaces
 *
 * can extends multiple interfaces
 */

interface Place {
  name: string;
}

interface PIN {
  pin: number;
}

interface City extends Place, PIN {
  getCity(): void;
}

class Address implements City {
  pin: number;
  getCity(): void {
    throw new Error("Method not implemented.");
  }
  name: string;
}

/**
 * Interfaces as function types
 *
 * Since Interfaces are used to define the structure of an object.
 *
 * Interfaces can also be used to define the structure of a function.
 * (Replacement for the function type)
 */

//with type
type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

//with interface
interface Add {
  (a: number, b: number): number;
}

let sum: Add;

sum = (n1: number, n2: number) => {
  return n1 + n2;
};

//Optional Parameter and Properties
interface Student {
  name: string;
  scholarShip?: boolean;
}
