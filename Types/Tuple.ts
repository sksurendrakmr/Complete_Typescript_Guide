//Tuple => It is fixed length and fixed type array

const role: [number, string] = [2, "author"]; //this will exactly have two elemenets

//demerits
role.push("admin"); //can push other element -> its not giving any error as push method is allowed in tuples
role[1] = 10; //overwrite value -> it will give error after assigning type
