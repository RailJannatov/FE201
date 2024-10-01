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

let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let decrementBtn = document.querySelector("#decrementBtn");

let interval;

startBtn.addEventListener("click", () => {
  // let counterElement = document.querySelector("#counter");
  let timerElement = document.querySelector("#timer");

  let count = +timerElement.innerText.slice(3, 6);
  isFirst = false;
  interval = setInterval(() => {
    // count++;
    count--;
    timerElement.innerText = `00:${
      String(count).length === 1 ? "0" : ""
    } ${count}`
      .split(" ")
      .join("");
    if (timerElement.innerText === "00:00") {
      timerElement.style.cssText = "color:red";
      clearInterval(interval);
      setTimeout(() => {
        alert("im done");
      }, 500);
    }
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

decrementBtn.addEventListener("click", () => {
  let element = document.querySelector("#counter");
  let count = +element.innerText;
  interval = setInterval(() => {
    count--;
    element.innerText = count;
  }, 1000);
});
