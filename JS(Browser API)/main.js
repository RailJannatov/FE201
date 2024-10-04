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

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// new Promise((resolve) => {
//   resolve(console.log("3"));
// });

// // promise1.then((data) => console.log(data));

// console.log("4");

// let promise = new Promise((resolve, reject) => {
//   reject("test");
//   setTimeout(() => resolve("5"), 0);
// });

// promise
//   .then((data) => console.log(data))
//   .catch((data) => alert(data))
//   .finally(() => alert("salammm"));

// 1 4 3 5 2   Ayxan
// 1 4 3 2 5

// 1 4 3 5 2

// 1 4 3 5  2

// const task1 = () => {
//   setTimeout(() => {
//     console.log("1");
//   }, 2000);
// };

// const task2 = () => {
//   setTimeout(() => {
//     console.log("1");
//   }, 3000);
// };
// const task3 = () => {
//   setTimeout(() => {
//     console.log("1");
//   }, 400);
// };
// const task4 = () => {
//   setTimeout(() => {
//     console.log("1");
//   }, 200);
// };

// task1();
// task2();
// task3();
// task4();

// function job() {
//   sequenceB();
//   sequenceC();
// }

// function sequenceB() {
//   setTimeout((_) => console.log(`🍅 Timeout at B`), 0);
//   Promise.resolve().then((_) => console.log("🍍 Promise at B"));
// }

// function sequenceC() {
//   setTimeout((_) => console.log(`🍅 Timeout at C`), 0);
//   Promise.resolve().then((_) =>
//     setTimeout(console.log("🍍 Promise at C"), 1000)
//   );
// }

// job();

//WEB STORAGE

// function task1(callback) {
//   setTimeout(() => {
//     console.log("task1 completed");
//     callback();
//   }, 2000);
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("task2 completed");
//     callback();
//   }, 1000);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("task3 completed");
//     callback();
//   }, 5000);
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log("task4 completed");
//     callback();
//   }, 200);
// }
// task1();
// task2();
// task3();
// task4();
// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4();
//     });
//   });
// });

// const usersData = [
//   { name: "Ayxan", surname: "Huseynli" },
//   { name: "Asiman", surname: "Kazimli" },
// ];

// const getUserData = () => {
//   setTimeout(() => {
//     usersData.forEach((user) => {
//       let pElement = document.createElement("p");
//       pElement.innerText = user.name;
//       document.body.append(pElement);
//     });
//   }, 2000);
// };

// const addUser = (userData, callback) => {
//   setTimeout(() => {
//     usersData.push(userData);
//     callback();
//   }, 3000);
// };

// addUser({ name: "Elvin", surname: "Aghayev" }, getUserData);
//WEB STORAGE

const btn = document.querySelector("#btn");
const sessionBtn = document.querySelector("#btnSession");
const cookieBtn = document.querySelector("#cookieBtn");
let count = 1;

let user = {
  name: "Rail",
  surname: "Jannatov",
};

// btn.addEventListener("click", () => {
//   if (count % 2 === 0) {
//     localStorage.setItem("theme", "dark-mode");
//     localStorage.setItem("token", "some token");
//     localStorage.setItem("user", JSON.stringify(user));
//     count++;
//   } else {
//     const theme = localStorage.getItem("theme", "light-mode");
//     const token = localStorage.getItem("token", "light-mode");
//     const user = JSON.parse(localStorage.getItem("user"));
//     console.log(user);
//     localStorage.removeItem("theme");
//     console.log({ theme, token });
//     count++;
//   }
// });

// sessionBtn.addEventListener("click", () => {
//   sessionStorage.setItem("user", "{name:Rail}");
// });

// cookieBtn.addEventListener("click", () => {
//   //   cookies.set("user", "test");
//   document.cookie = "token = some-token";
//   document.cookie = "newToken = some-token";
//   document.cookie = "token = soken";
//   //   browser.cookies.set("name", "value");
// });
