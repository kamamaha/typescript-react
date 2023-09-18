// convert to more or les specific
let a = "hello";
let b = a; // less specific type
let c = a; // more specific type
let d = 'world';
let dd = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
//Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 3, 'concat');
10;
//The DOM
const img = document.querySelector('img'); // more specific for ts = HTMLImageElement
const img2 = document.querySelector('img');
const myImg = document.getElementById('#img');
img.src;
img2.src;
myImg.src;
