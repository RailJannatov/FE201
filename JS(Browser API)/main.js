// function getFullName() {
//   return "salam";
// }
// function helloToEverybody() {
//   console.log("salammmmm");
// }

// setTimeout(() => {
//   let newElement = document.createElement("p");
//   newElement.innerText = "Elvin bashini buraxmisan";
//   document.body.append(newElement);
// }, 5000);

// let startBtn = document.querySelector("#startBtn");
// let stopBtn = document.querySelector("#stopBtn");
// let decrementBtn = document.querySelector("#decrementBtn");

// let interval;

// startBtn.addEventListener("click", () => {
//   // let counterElement = document.querySelector("#counter");
//   let timerElement = document.querySelector("#timer");

//   let count = +timerElement.innerText.slice(3, 6);
//   isFirst = false;
//   interval = setInterval(() => {
//     // count++;
//     count--;
//     timerElement.innerText = `00:${
//       String(count).length === 1 ? "0" : ""
//     } ${count}`
//       .split(" ")
//       .join("");
//     if (timerElement.innerText === "00:00") {
//       timerElement.style.cssText = "color:red";
//       clearInterval(interval);
//       setTimeout(() => {
//         alert("im done");
//       }, 500);
//     }
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(interval);
// });

// decrementBtn.addEventListener("click", () => {
//   let element = document.querySelector("#counter");
//   let count = +element.innerText;
//   interval = setInterval(() => {
//     count--;
//     element.innerText = count;
//   }, 1000);
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("test");
//   }, 3000);
//   setTimeout(() => {
//     reject(new Error());
//   }, 2000);
// });

// promise.then(null, () => console.log("ylaniz errror hal"));

// const getQuiz = (_data) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         image: "/DATA/quizTariffImage.svg",
//         price: "10",
//         type: "For 30 days",
//         included: [
//           {
//             image: "/DATA/quizTariffGlobus.svg",
//             title: "10 gb Included traffic",
//           },
//           {
//             image: "/DATA/quizTariffWatsApp.svg",
//             title: "WatsApp is free",
//           },
//         ],
//         id: "1",
//       });
//     }, 1000);
//     setTimeout(() => {
//       reject(new Error());
//     }, 500);
//   });

// const myData = [];

// let quizData = getQuiz().then(
//   (data) => {
//     myData.push(data);
//     console.log(myData[0].included);
//   },
//   (err) => {
//     alert(err);
//   }
// );

console.log("1");

setTimeout(() => console.log("2"), 0);

new Promise((resolve) => {
  resolve(console.log("3"));
});

// promise1.then((data) => console.log(data));

console.log("4");

let promise = new Promise((resolve, reject) => {
  reject("test");
  setTimeout(() => resolve("5"), 0);
});

promise
  .then((data) => console.log(data))
  .catch((data) => alert(data))
  .finally(() => alert("salammm"));

// 1 4 3 5 2   Ayxan
// 1 4 3 2 5

// 1 4 3 5 2

// 1 4 3 5  2
