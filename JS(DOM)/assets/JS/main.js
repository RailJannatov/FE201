// console.log(a); //undefined
// console.log(b); //Reference Error
// var a = 5;
// a = 10;

// var a = 10;
// let b = 4;

// b = 20;

// console.log(a); //5

// console.log(hoisting(10, 15));

// console.log(myArrow(10, 15));

// function hoisting(a, b) {
//   return a + b;
// }

// var myArrow = (a, b) => {
//   return a + b;
// };

// console.log(myArrow(10, 15));

// const btn = document.getElementById("btn");
// btn.innerHTML = "<p>Elvin objecte bax</p>";
// console.log("innerText", btn.innerText);
// console.log("innerHTML", btn.innerHTML);

// console.log(document.getElementById("btn").innerHTML);

// console.log(document.querySelector("#btn"));
// console.log(document.querySelector(".primary-btn"));

// const primaryBtn = document.querySelector(".primary-btn");
// primaryBtn.onclick = function () {
//   //   console.log(this.innerText);
//   alert("1");
// };

// primaryBtn.addEventListener("click", function () {
//   alert("2");
// });

// primaryBtn.addEventListener("click", function () {
//   alert("listenerBye");
// });

// primaryBtn.onclick = function () {
//   //   console.log(this.innerText);
//   alert(this.innerText);
// };

// primaryBtn.onclick = function () {
//   alert("BYEEEEE");
// };

// const buttons = document.querySelectorAll(".primary-btn");

// // console.log("1", buttons);
// // console.log("2", [...buttons]);

// // for (let element of [...buttons]) {
// //   console.log("element", element);
// // }
// buttons.forEach((element) => {
//   //   let text = element.innerText;
//   //   console.log(element);
//   element.addEventListener("click", function () {
//     // alert(this.innerText);
//     let h1 = document.querySelector("h1");
//     let h1InnerText = h1.innerText;
//     this.innerText = h1InnerText;
//   });
// });

function letterCount(name) {
  let obj = {};
  for (let letter of name) {
    if (obj[letter] == undefined) {
      obj[letter] = 1;
    } else {
      obj[letter] += 1;
    }
  }
  return obj;
}
console.log(letterCount("ƏFSANƏ"));

// let car = {
//   name: "BMW",
//   age: 13,
// };

// car["test"] = "quran olum";
