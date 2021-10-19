function add(n1: number, n2: number): number {
  return n1 + n2;
}

//function as types => function types describe the functions regarding the parameters and the return value

// let combinedValues:Function; //it will take any function
let combinedValues: (a: number, b: number) => void; //combinedValues should accect any function which has two parameter and return a number
combinedValues = add;
console.log(combinedValues(6, 6)); //12

//Function types and callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result; //anything we return from this function will not be used as we defined the return type void but it will not give any error
});
