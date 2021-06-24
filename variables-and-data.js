/*
*Variables
 */
//let wordData;
//wordData= "Word list";

//console.log (wordData)

//let x = 100;
//let y = x *0.07;
//let z = x + y;

//let subTotal = 100;
//let tax= subTotal * 0.07
//let totalWithTax = tax + subTotal

/*
*Data Types
 */

//let obj = {
   // key1: "value 1",
   // key2: 4,
   // boolean: true,
   // obj2:{
   //     obj2key1: "value of inner object",
//    }
//};

//console.log (obj.obj2.obj2key1);

/*
*Typing
 */

//let variable = "string"

//let var1= "2";
//let var2= 5;
//let results = var1 + var2

//console.log (results)

//let add = 1 + 2;
//let sub = 2 - 1;
//let mult = 2 * 5;
//let division= 4 / 2
//let mod = 5 % 2;

//let string = "String 1 " + "String 2"

//console.log (string)

/*
*Conditionals, Scope and Loops
 */
// Equals
//let equals = 1 ===1;
//console.log (equals)

//Greater than
//let greaterThan = 5 > 1;

//Less than
//let lessThan = 2 < 10;

// Greater than Equals
//let greaterThanEq = 5 >= 5;

//Less than Equals
//let lessThanEq = 4 <=9;

//Not Equals
//let notEquals =5 !== 2;

//let storeA = 1.40;
//let storeB = 3.40;

/*
*Functions
 */

//function compareStorePrices (storeA, storeB) {
//let storeAIsLower = storeA < storeB;
//if (storeAIsLower) {
 //       console.log("Store A has a lower price.")
//   } else if (storeB < storeA) {
  //      console.log("Store B has a lower price.")
//   } else {
  //      console.log("Their prices are the same.")
//    }
//}
//compareStorePrices (10, 5)
//compareStorePrices(7,10)

//function squareNum (number) {
//  return number * number;
//}
//let squaredNumber = squareNum(10);
//console.log (squaredNumber)
/*
*Scope
 */

//let xy = 10;
//function addNumbers (n, m, xy) {
   // console.log (xy);
//    let b;
//   if (1===1){
//       b= 8;
//    }
//    return n + m;
//}

//addNumbers (2, 3,8);

/*
*Arrays (A data structure) & Loops
 */
//             0  1  2  3  4  5  6
//let ourArray= [1, 2, 3, 4, 5, 6, 7];

//let arreLen = ourArray.length;
//for (let i= 0; i<arreLen; i++) {
    //console.log ("i is equal to: " + i);
  // console.log(ourArray[i]);
//  for (let j = 0; j<10; j++) {
    //    console.log('J is equal to:' + j)
//   }
//}
//let x = 0;
//while (x < 10) {
   // console.log('Ran')
 //   x = x + 1
//}

/*
*Object oriented programming, Interface, and API's
 */

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function(typeOfBark){
        console.log ("Bark!");
    },
};

dog.bark();

function x(y) {
    y.num = y.num + 5;
    console.log (y);
}

let y = {
    name:"Tom",
    num: 10,
};
x(y);
console.log (y);