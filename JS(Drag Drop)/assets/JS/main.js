const dragBox = document.querySelectorAll(".dragBox");
const dropBox = document.querySelector(".dropBox");

// SINGLE DRAG AND DROP

// let element = {};

// dragBox.ondragstart = function (event) {
//   //   console.log(event);
//   //   console.log(this.getAttribute("id"));
//   //   element = this;
//   event.dataTransfer.setData("id", this.getAttribute("id"));
// };

// dragBox.ondrag = function () {
//   //   console.log("ondrag");
// };

dropBox.ondragover = (elvin) => elvin.preventDefault();

// dragBox.ondragend = function () {
//   console.log("final");
// };

// dropBox.ondrop = function (event) {
//   const element = event.dataTransfer.getData("id");
//   const el = document.getElementById(element);
//   let div = document.getElementById("test");
//   console.log(el);
//   this.append(el);
//   //   this.append(element);
// };

// MUTLIPLE
dragBox.forEach((el) => {
  el.ondragstart = function (event) {
    event.dataTransfer.setData("id", this.getAttribute("id"));
  };
});

dropBox.ondrop = function (event) {
  const dropableElement = event.dataTransfer.getData("id");
  const el = document.getElementById(dropableElement);
  this.append(el);
};
