/**
 number,string,boolean,undefined,null,symbol
 number => All numbers,no differentiation between integers or floats
 string=>All text values
 boolean=>value either be true or false, no "truthy" or "falsy" values
 
 Typescript's type system only helps us during development i.e.
 before the code gets compiled.

 The key difference us: Javascript uses "dynamic types"(resolved at runtime)
 whereas Typescript uses "static types"(set during development)
 */

 function add(a:number,b:number,showResult:boolean){
    if(showResult){
        console.log(a+b);
    }else{
        return a+b;
    }
}

const printResult = true;

const result = add(2,3,printResult);

//object

// const person:object = {
//     name:'surendra',
//     age:23
// }

// console.log(person.name); //Error if we use generic object

// const person:{name:string,age:number} = {
//     name:'surendra',
//     age:23
// }
const person:{
    name:string;
    age:number;
    role:[number,string]; //tuple=> telling typescript we want to have special array with exactly two elements
} = {
    name:'surendra',
    age:23,
    role:[2,'author']
}
//Tuples => Array with fixed length and fixed type
// person.role.push("admin") //Exception:- Doesn't giving error with push method
// person.role[1] = 10 //Error
// person.role = [0,'admin','v'] //Error
console.log(person.name);

//Arrays

const hobbies = ['Sports','Cookings']

//we used to explicitly define type in the variable 
//if we not initialize it with some values while defining the variable
let favouriteActivities:string[];
favouriteActivities = ['cricket']

for(const hobby of hobbies){
    console.log(hobby.toLowerCase());
    // console.log(hobby.map()); //Error as it is just string
}

//Enum =>Added by typescript: Automatically enumerated global constant identifiers


enum Role {
    ADMIN , //0
    READ_ONLY, //1
    AUTHOR //2
}
enum Role1 {
    ADMIN=5 , //5
    READ_ONLY, //6
    AUTHOR //7
}

//can assign our own value
enum Role3 {
    ADMIN='ADMIN' , 
    READ_ONLY=10, 
    AUTHOR='AUTHOR' 
}

const person1 = {
    name:'surendra',
    age:30,
    hobbies:['Sports','Cooking'],
    role:Role.ADMIN
}

if(person1.role === Role.ADMIN){
    console.log("is admin");
}

//any => can store any kind of value, no specific type assignent
let anyValue:any;
anyValue = ['sports']
anyValue='cricket'





