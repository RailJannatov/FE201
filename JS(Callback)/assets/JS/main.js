// const isOdd = (num) => num % 2 == 1;

const numbers = [1, 2, 3, 4, 5, 6, 7, 43, 46, 65, 78];

// const AFSA

function printArrayToMyCallback(array, callback) {
  let modifiedNumbers = [];
  for (let item of array) {
    // console.log(callback(item));
    callback(item) ? modifiedNumbers.push(item) : null;
    // if (callback(item)) {
    //   modifiedNumbers.push(item);
    // }
    // if (item === 1) {
    //   return modifiedNumbers * 5;
    // } else {
    //   return false;
    // }
    // return item === 1 ? modifiedNumbers * 5 : "false";
    // modifiedNumbers.push();
  }

  return modifiedNumbers;
}

function multiplyByParametr(array, callback) {
  let modifiedNumbers = [];
  for (let item of array) {
    modifiedNumbers.push(callback(item));
  }
  return modifiedNumbers;

  //   let name = array;
  //   name.push("slam");
}

function convertToString(array, callback) {
  let modifiedArray = [];
  for (let item of array) {
    modifiedArray.push(callback(item));
  }
  return modifiedArray;
}

console.log(
  convertToString(numbers, function (item) {
    let string = "";
    string += `${item} `;
    return string;
  })
);

// console.log(multiplyByParametr([45, 32, 44, 10], (num) => num * 4));
// multiplyByParametr([1, 2, 3, 4, 5, 6], (num) => num * 4);

// multiplyByParametr([1, 2, 3, 4, 5, 6], (num) => num / 2);

// console.log(printArrayToMyCallback(numbers, (num) => num % 2 === 0));
// console.log(printArrayToMyCallback(numbers, (num) => num % 2 !== 0));
// console.log(printArrayToMyCallback(numbers, (num) => num % 43 === 0));

function minimumElementIndex(array) {
  let numbers = [1, 2, 3, 4];
  let newNumbers = [];
}
// for (let i = 0; i < numbers.length; i++) {
//   let halfArray = numbers.length / 2;
//   if (i < 2) {
//     newNumbers.push(num[i + 1]);
//   } else {
//   }
// }

//   for (let i = numbers.length - 1; i < 0; i--) {
//     let halfArray = numbers.length / 2;

//   //   if (i < halfArray) {
//   //     newNumbers.push(num[i + 1]);
//   //     let myIndex = i + 2;
//   //     if (myIndex === numbers.length - 1) {
//   //       newNumbers.push(num[myIndex]);
//   //     } else {
//   //       myIndex++;
//   //     }
//   //   }
//   // }
// }

// if (a > 5) {
//   let name = "string";
//   return a;
// }

// return b > 5 ? c === 4 : null;
