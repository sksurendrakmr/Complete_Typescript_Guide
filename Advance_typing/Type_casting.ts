/**
 * Type casting help us tell Typescript that some value is
 * of specific type where typescript is not able to detect in its own.
 */

//M1 - will not work in react application
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
);

//M2
const userInputElement1 = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi There!";

/**
 * ! -> This exclamation mark allows us to tell typescript that the
 *      expression in front of it will never yield(return) null.
 */
