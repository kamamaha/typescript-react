//Array

let stringArr = [ "one", "hey","Kama"];

let guitars = ["Starat", "Les Paul", 5150]

let mixedData = ["EVH", 1984, true]

stringArr[0] = "AAA"
stringArr.push("42")

guitars[0] = 1234

guitars.unshift("Jim")

console.log(stringArr)

let test = []
let bands: string[] = []

bands.push("Van Halen")

//Tuple

let myTuple: [string, number, boolean] = ["David", 42, true]

let mixed = ["John", 1, false]

mixed = myTuple
myTuple[1] = 42

//Object

let myObj: object

myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: "Kama",
    prop2: true,
}

exampleObj.prop2 = false

type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OUT"]

}

let jp: Guitarist = {
    name: "Jimmy",
    active: false,
    albums: ["313", "dddd", "qqq"]

}
evh = jp

//Funkcje

const greetGuitairst = (guitarist : Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`
    }
    return "hello!"
}

console.log(greetGuitairst(jp))

// Enumy

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)