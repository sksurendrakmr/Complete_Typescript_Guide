/**
 * *It's a pattern which we can use when working with union type
 * *that makes implementing type guard easier.
 *
 * *It is available when we work with object types.
 *
 * *In this, we will have one common property in every object that
 * *makes up our union that describe that object.Thus with this common
 * *property we can check whether some properties exist or not.
 */

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with speed " + speed);
}

moveAnimal({ type: "horse", runningSpeed: 10 });
