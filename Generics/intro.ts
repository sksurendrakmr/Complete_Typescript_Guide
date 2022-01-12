/**
 * Generics (Flexible & Re-Usable code)
 *
 * A generic type is a type which is kind of connected with some
 * other type and we want to know which other type that is so Typescript
 * can give us better support.
 *
 */

const names: Array<string | number> = ["sk", "suri"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
