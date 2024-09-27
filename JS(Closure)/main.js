// function getFullName(surname, name) {
//   return `${surname}${name}`;
// }

// function outer(number, second) {
//   let count = number + second;

//   return () => count++;
//   //   return count++;
// }

// let sum = outer(10, 20); //lexical environment
// let finalSum = sum();

// let anotherSum = outer(20, 40); //lexical environment -----ayrica yarandi
// let anotherFinalSum = sum();

// console.log("1", anotherSum); //60    60  60 61
// console.log("2", anotherFinalSum); //61 60 31  30 31 90 ola biler

// console.log(getFullName("Hesenli", "Xeyal"));

// function add() {
//   let x = 5;
//   //   let y = 10;
//   return function addFive(y) {
//     x++;
//     return x * y;
//   };
//   //   return y * x;
// }

// const firstCall = add(); //firstCall = function addFive(y){x++return x*y}
// console.log(firstCall);
// const secondCall = firstCall(5);
// const thirdCall = firstCall(10);
// const testCall = firstCall(50);
// const fourthCall = add();
// const fiveCall = fourthCall(20);
// const sixCall = fourthCall(2);

// console.log("1", secondCall); // 35 25 30
// console.log("2", fiveCall); //  140 100 120
