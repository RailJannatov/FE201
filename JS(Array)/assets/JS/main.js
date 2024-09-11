// let increaseBtn = document.querySelector("#increaseBtn");
// increaseBtn.onclick = function () {
//   let countElement = document.querySelector(".count");
//   countElement.innerText++;
// };
// let input = document.querySelector("#input").value;

// let count = document.querySelector(".count");

// let submitInput = document.querySelector("#inputSubmit");

// submitInput.onclick = function () {
//   const dynamicValue = document.querySelector("#input").value;

//   count.innerText = Number(dynamicValue) + Number(count.innerText);
// };

// studentAges.forEach((item, index) => {
//   if (item === 10) {
//     throw new Error();
//   }
//   console.log(item);
// });

// console.log(
//   "MAP",
//   studentAges.map((item) => item > 10)
// );
// map methodu yeni bir array return edir ve elementlerin uzerinde modifie edir
// console.log(
//   "FILTER",
//   studentAges.filter((item) => item * 10)
// );

// Array.prototype.custom_map = function (callback) {
//   let newArray = [];

//   for (let i = 0; i < this.length; i++) {
//     let newElement = callback(this[i]);
//     newArray.push(newElement);
//   }
//   return newArray;
// };

// function callback(element) {
//   element = element + 5;
//   return element;
// }

// console.log(studentAges.custom_map(callback));

// const studentAges = [10, 20, 30, 40, 50, 60, 21];

// const advanceArray = [
//   { name: "Kazim", id: 6 },
//   { name: "Elvin", id: 7 },
//   { name: "Xeyal", id: 8 },
//   { name: "Rail", id: 9 },
//   { name: "Xeyal", id: 9 },
// ];

// Array.prototype.custom_filter = function (callback) {
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     let newElement = callback(this[i]);
//     if (newElement) {
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// };

// console.log(studentAges.custom_filter((item) => item + 10));
// console.log(studentAges.filter((item) => item + 5));
// (item) => item > 2;
// studentAges.filter();
// console.log(advanceArray.find((item) => item.name === "Xeyal"));

// ['Hungry Owl All-Night Grocers','Ernst Handel']

//employeID 8  e beraber olanlarin shipName bir array yigmaq

// let newData = [];

// data.forEach((item) => {
//   if (item.employeeId === 8) {
//     newData.push(item.shipName);
//   }
// });

// const newData = data
//   .map((item) => item.employeeId === 8 && item.shipName)
//   .filter((item) => {
//     if (item) {
//       return item;
//     }
//   });

// const newData = data
//   .filter((item) => item.employeeId === 8 && item.shipName)
//   .map((item) => item.shipName);

// console.log(newData);

// const summarize = data.reduce((acc, item) => {
//   acc += item.freight;
//   return acc;
// }, 0);

// console.log(summarize);

// [{ username: "ERNSH" }, { username: "TEST" }];

// const detailArray = data.flatMap((item) => item.details);

// const usernames = data
//   .filter((item) => item.employeeId === 7)
//   .map(({ customerId: username }) => ({ username }));

// let newObject = { username: "" };
// newObject.username = item.customerId;
// return newObject;

// console.log(usernames);

// console.log(detailArray);

// const fruits = ["alma", "banan", "alma", "portağal", "banan", "banan"];

// const fruitNames = fruits.reduce((acc, item) => {
//   if (acc[item] === undefined) {
//     acc[item] = 1;
//   } else {
//     acc[item] = acc[item] + 1;
//   }
//   return acc;
// }, {});

// const maxValue = Object.entries(fruitNames).sort((a, b) => b[1] - a[1])[0][0];
// console.log(maxValue);

// console.log(typeof typeof typeof 4);

// if (4 > 3 > 2) {
//   console.log("s");
// } else {
//   console.log("4");
// }

// const acc = {
//   alma: 2,
//   banan: 1,
//   porta,
// };

// [
//   ["banan", 1],
//   ["alma", 2],
//   ["portagal", 1],
// ];

// [
//   ["alma", 2],
//   ["banan", 1],
//   ["portagal", 1],
// ];
// for (let index = 0; index < array.length; index++) {
//   acc[array[index]] = 1;
// }

// human["name senan"]
// human[name];

// let maxCount = 0;
// for (let [key, value] of Object.entries(fruitNames)) {
//   if (value > maxCount) {
//     maxCount = value;
//   }
// }

// console.log(Object.entries(fruitNames).find((item) => item[1] === maxCount)[0]);

// const modFruits = fruits.filter((fruit) => {
//   if (fruits === "banan") {
//   }
// });

const shipCodes = data
  .filter((element) => element.shipAddress.country === "USA")
  .map((item) => item.shipAddress.postalCode);
console.log(shipCodes);

const shipObject = data
  .filter((element) => element.shipAddress.country === "USA")
  .map((item) => {
    return {
      postalCode: item.shipAddress.postalCode,
    };
  });

const human = {
  name: "rail",
  height: 174,
};

let { name, height } = human;

const shipObjectNew = data
  .filter((element) => element.shipAddress.country === "USA")
  .map(({ shipAddress: { postalCode } }) => ({ postalCode }));
console.log(shipObjectNew);
