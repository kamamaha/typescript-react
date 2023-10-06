type One = string
type Two = string | number
type Three = "hello"

// convert to more or les specific
let a: One = "hello"
let b = a as Two // less specific type
let c = a as Three // more specific type

let d = <One>'world'
let dd = <string>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === 'add') return a + b;
    return '' + a + b
}

let myVal: string= addOrConcat(2,3,'concat') as string

//Be careful! TS sees no problem - but a string is returned
let nextVal: number= addOrConcat(2,3,'concat') as number

(10 as unknown) as string


//The DOM
const img = document.querySelector('img') as HTMLImageElement // more specific for ts = HTMLImageElement
const img2 = document.querySelector('img')!
const myImg = document.getElementById('#img')! as HTMLImageElement


img.src
img2.src
myImg.src