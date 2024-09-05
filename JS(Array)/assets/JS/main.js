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
