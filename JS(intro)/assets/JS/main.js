// var a = 5; //number
// "use strict";

let name = "Asiman"; //string

let surname = "Kazimli";

let fullName = name + " " + surname;

let anotherFullName = `${name} ${surname}`;

// let test = 6 - a;

// console.log(fullName);

// console.log(anotherFullName);

// console.log(test);

let bool = false; //boolean

// console.log(bool + 2);

let define = undefined; // undefined

let empty = null; // null

let person = {
  name: "Ayxan",
  age: 14,
  student: true,
  cars: ["BMW", "ELvin"],
  home: { yasamal: 2, siyezen: 5 },
}; // Object

let array = [
  4,
  "test,",
  true,
  false,
  0,
  "afbhjfbwbfuwfuwhf",
  { group: "fe201", topic: "Js" },
]; //ARRAY

// console.log(array);

// var a = 6;
// var a = 9;
let groupAges = [28, 25, 20, 14, 19, 16, 34, 27];
// name = "Afsana"; //reassign
// let name = "afsana"; //redeclare

let sum = 0;

// console.log("fordan qabaq", sum);
for (let i = 0; i < groupAges.length; i++) {
  sum = sum + groupAges[i];

  // console.log(ages);
  // console.log(groupAges[i]);
}

// let anotherSum = num; // equal to - 1

// console.log(sum);

// a = 5;
// console.log(a);

let fe207student = [42, 42, 42, 424, 24, 424];

let fe207names = ["Asiman", "Lamiye", "Ayxan"];

let projectGrades = [100, 80, 90, 60];
// declaration function
// function showArrayElements() {
//   for (let i = 0; i < eflatun.length; i++) {
//     console.log(eflatun[i]);
//   }
// }

// arrow function
// const showMyName = (object) => {
//   console.log(object.name);
// };

let human = { name: "Lamiye", age: 20 };

showMyName(human);

// showArrayElements(fe207student);
// showArrayElements(fe207names);
// showArrayElements(projectGrades);
