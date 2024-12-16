// const human = {
//   name: "Xeyal",
//   surname: "Hesenli",
//   //   age: 29,
//   assets: {
//     house: ["Melissa", "Kristal"],
//     car: { model: "BMW", marka: "", seat: { first: "1" } },
//   },
// };

// const surname = human.surname;

// const {
//   surname: newSurname,
//   age = 21,
//   assets: {
//     car: {
//       model,
//       marka = "G30",
//       seat: { first },
//     },
//   },
//   name: newName = "Elvin",
// } = human;

// console.log("age", age);

// console.log("newName", newName);
// console.log("marka", marka);

// console.log("car", car);
// console.log("marka", marka);
// console.log(model);
// console.log(marka);
// console.log("mashin", mashin);
// console.log("surname", newSurname);

// console.log("newName", newName);

// const newSurname = human.surname;

// const surname = ''

// const { assets } = human;

// console.log("1", surname);
// console.log("2", assets);
// console.log("3", name);

const array = [
  undefined,
  5,
  "Afsana",
  null,
  true,
  false,
  [1, 2, 3],
  { name: "Elvin", surname: "Aghayev", assets: { test: "string" } },
  "BMW",
];

// const [
//   first1,
//   second,
//   third,
//   fourth,
//   five,
//   six,
//   seven,
//   {
//     assets: { test },
//   },
// ] = array;
// console.log(test);

// const [, , , , , , [first]] = array;

// console.log(first);

// console.log(array[4]);

const fullName = "Lamiye Kazimli Lami";
// console.log(fullName.length);

// console.log(fullName.indexOf("W"));

// function CustomIndex(str, target) {
//   for (let i = 0; i < str.length; i++) {
//     if (target === str[i]) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(CustomIndex(fullName, "W"));

// console.log(fullName.replace(/Lami/g, "Seri"));

// const inputValue = "             ";
// console.log(inputValue.length);

// console.log(inputValue.trim().length);

// const text = "this is Innoway";

// const anotherText = "THIS is INNoway";

// console.log(text.toLowerCase() === anotherText.toLowerCase());

// console.log(text.slice(-1, 3));

// const number = 10;

// console.log(typeof number.toString());
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// console.log(text.includes("test"));

// const newData = data.map(({ shipAddress: adress }) => ({ addres }));

const car = {
  marka: "BMW",
  model: "g40",
  age: 2019,
  value: "40000$",
  teest1: "test",
  teest1: "test",
  teest2: "test",
  teest3: "test",
  teest4: "test",
  teest5: "test",
};

const person = {
  name: "Ayxan",
  surname: "Huseynli",
  tiktokUsername: "ayxan003",
  age: 15,
};

// const arrayWithoutName = newArray2.map(({ name, ...rest }) => {
//   return { ...rest };
// });

// const arrayWithoutName2 = newArray2.map(({ name, ...rest }) => ({ ...rest }));

// console.log("test", arrayWithoutName);
// const { name, ...rest } = person;

// const newPerson = { ...rest };

// const car2 = {
//   marka: "MERCEdes",
//   model: "c-class",
// };

// const { details, marka, model, age, ...rest } = car;

// const fruits = ["alma", "armud", "banan"];

// const [first, ...rest] = fruits;

// const myFruits = [...rest, "kivi", "apelsin"];

// console.log("first", myFruits);

// const anotherCar = { ...rest };

// const { marka: mercMarka, ...qalan } = car2;

// const modifiedCar = { ...rest, value: 2019 };

// console.log("details", details);
// console.log("rest", modifiedCar);

const newArray = [
  { marka: "test", model: "1", age: 10, fullname: "test", sum: [1, 2, 3, 4] },
  { marka: "test", model: "1", age: 10, fullname: "test", sum: [2, 5, 3, 4] },
  { marka: "test", model: "1", age: 10, fullname: "test", sum: [1, 2, 3, 4] },
  { marka: "test", model: "1", age: 10, fullname: "test", sum: [1, 2, 3, 4] },
];

const flatMap = newArray.flatMap(({ sum }) => [...sum]);

// console.log(flatMap);

const newwww = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
const newArray2 = [
  {
    name: "Ayxan",
    surname: "Huseynli",
    tiktokUsername: "ayxan003",
    age: 15,
  },
  {
    name: "Ayxan",
    surname: "Huseynli",
    tiktokUsername: "ayxan003",
    age: 15,
  },
  {
    name: "Ayxan",
    surname: "Huseynli",
    tiktokUsername: "ayxan003",
    age: 15,
  },
  {
    name: "Ayxan",
    surname: "Huseynli",
    tiktokUsername: "ayxan003",
    age: 15,
  },
];

// const concatArray = [...newArray, ...newArray2];

// console.log("concat", concatArray);

// [{  model: "1", age: 10, fullname: "test" },{  model: "1", age: 10, fullname: "test" },{  model: "1", age: 10, fullname: "test" },]
