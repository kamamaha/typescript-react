//Array
let stringArr = ["one", "hey", "Kama"];
let guitars = ["Starat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "AAA";
stringArr.push("42");
guitars[0] = 1234;
guitars.unshift("Jim");
console.log(stringArr);
let test = [];
let bands = [];
bands.push("Van Halen");
//Tuple
let myTuple = ["David", 42, true];
let mixed = ["John", 1, false];
mixed = myTuple;
myTuple[1] = 42;
//Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Kama",
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OUT"]
};
let jp = {
    name: "Jimmy",
    active: false,
    albums: ["313", "dddd", "qqq"]
};
evh = jp;
//Funkcje
const greetGuitairst = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "hello!";
};
console.log(greetGuitairst(jp));
// Enumy
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
