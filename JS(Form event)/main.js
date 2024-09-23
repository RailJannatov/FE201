// class Person {
//   constructor(books) {
//     this.anotherBooks = books;
//   }
//   //   mockThis = this;
//   books = [];

//   addBook() {
//     // let item = "sss";

//     // let mockThis = this;

//     let mockFunction = () => {
//       console.log("2", this);
//     };
//     return mockFunction;
//     // let anotherBook = "s";
//   }
// }

// const personClass = new Person();

// const test = personClass.addBook();

// const personAnother = new PersonAnother();

// console.log(test());
// console.log(personAnother);

// function PersonAnother(books) {
//   this.books = books;
//   this.addBook = function () {
//     console.log("books");
//   };
// }

// let listItem = document.getElementsByClassName("list-item");

// [...listItem].forEach((element) => {
//   element.onclick = function () {
//     alert(this.innerHTML);
//   };
// });

// let inputValue = document.querySelector("#inputValue").value;

// let submitInput = document.querySelector("#form");

let textInput = document.querySelector("#inputValue");

// textInput.onblur = function () {
//   console.log("onblurrrrr");
// };

// textInput.onfocus = function () {
//   console.log("focusss");
// };

// textInput.onchange = function (test) {
//   console.log("changeeee");
//   //   console.log(test);
// };

// let buttons = document.querySelectorAll("div[role=button]");

// buttons.forEach((element) => {
//   element.onclick = function () {
//     this.remove();
//   };
// });

// let inboxDiv = document.querySelector("#inboxDiv");

// let isAdded = false;

// inboxDiv.addEventListener("click", function () {
//   if (!isAdded) {
//     let nav = document.querySelector("nav");

//     let newDiv = document.createElement("div");

//     newDiv.classList.add([
//       "text-slate-800",
//       "flex",
//       "w-full",
//       "items-center",
//       "rounded-md",
//     ]);
//     newDiv.innerHTML = "<p>Home</p>";
//     nav.append(newDiv);
//   }

//   isAdded = true;
// });

// submitInput.addEventListener("onsubmit", function (event) {
//   event.preventDefault();
//   console.log(event);
//   alert("salammm");
// });

// textInput.addEventListener("onblur", function (event) {
//   console.log(event);
// });

// textInput.addEventListener("keydown", function () {
//   console.log("onkeydown");
// });
// textInput.addEventListener("keyup", function () {
//   console.log("onkeyup");
// });

// textInput.addEventListener("keypress", function () {
//   console.log("onkeypress");
// });

let btn = document.querySelector("button");
let listItems = document.querySelectorAll(".list-item");

// btn.onclick = function (event) {
//   event.preventDefault();

//   listItems.forEach((item) => (item.style.display = "block"));

//   this.innerText = "Initial";
// };

let isAdded = false;

listItems.forEach((list) => {
  list.onclick = function () {
    let newDiv;
    if (!isAdded) {
      newDiv = document.createElement("div");
      newDiv.setAttribute("id", "wrapperItem");
      document.querySelector("form").append(newDiv);
      newDiv.append(this.innerText);
    } else {
      let div = document.getElementById("wrapperItem");
      div.append(list.innerText);
    }
    isAdded = true;
  };
});
