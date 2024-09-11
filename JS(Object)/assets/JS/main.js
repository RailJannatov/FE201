const human = {
  name: "Ayxan",
  surname: "Huseynli",
  age: 14,
  tikTokUsername: "MeneDeymmeGozel006",
  "have car": true,
  assets: ["BMW", "Villa"],
  getHumanFullInfo: function () {
    return `${this.name} ${this.surname} ${this.age} ${this.assets}`;
    // return this;
  },

  getNameForGozel: function () {
    return this.tikTokUsername + " " + this.assets[1];
  },

  //   getDifferenceBetweenArrow: () => {
  //     return this;
  //   },
};

// const human = 12241.244.124.2414
// const newHuman = new Object(); // {} 12.214.242
// const newHuman = human; //12241.244.124.2414

// newHuman.test = "test";

// console.log(human);
// const newHuman = new Object();
// console.log("before copy", newHuman);
// Object.assign(newHuman, human);

// human.test = "test";

// console.log("after copy", newHuman);

// human.grade = 45;

// console.log(human);

// human = { name: "sal" };

// console.log(human);

// console.log(human.getNameForGozel());

// function thisContext() {
//   console.log("global window", this);
// }

// thisContext();

// let person = new Object();

// console.log("function keyword", human.getHumanFullInfo());

// console.log("arrow function", human.getDifferenceBetweenArrow());

// console.log(human.elvin);

// function Person(username, surname) {
//   this.username = username;
//   this.surname = surname;
//   this.fullName = function () {
//     return "salam";
//   };
// }

// const person = new Person("Elvin", "Aghayev");

// // console.log(person.surname);
// console.log(person.fullName());

// class Person {
//   constructor(username, surname, age, phoneNumber) {
//     this.ad = username;
//     this.soyad = surname;
//     this.opghlaninYashi = age;
//     this.nomresi = phoneNumber;
//   }

//   getFullName() {
//     return "hellllloooo";
//   }
// }

// const p1 = new Person("Elvin", "Aghayev");
// const p2 = new Person("Lamiye", "Kazimova");

// console.log("1", p1);
// console.log("3", p2.soyad);
// console.log("2", p2.getFullName());

// for (let item in human) {
//   console.log(human[item]);
// }

// console.log("method", Object.entries(human));

// for (let [propertie, value] of Object.entries(human)) {
//   console.log(`${propertie} ${value}`);
// }
