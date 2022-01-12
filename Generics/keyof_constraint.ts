//With this approach, typescript will not know
//wheather the object has the key or not
//So Typescript tells us that it's not guaranteed that
//wheather key exists or not
function extractAndConvert(obj: object, key: string) {
  return obj[key];
}

console.log(extractAndConvert({}, "name"));

//To make sure, The key will exists
function extractAndConvert1<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert1({ name: "sk" }, "name"));
