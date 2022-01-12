//merges two object and return new object
function merge1(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

const mergedObject1 = merge1({ name: "sk" }, { age: 24 });
// mergedObject1.name //Error

//For generics type, we can set certain constraints regarding generic types
//can be based on. (Here, we make use of "extends")
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "sk" }, { age: 24 });
mergedObj.name;
