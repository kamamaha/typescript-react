//Index Signatures


// interface TransactionObj {
//    readonly [index: string]: number 
// }

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}


const todaysTransaction: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

console.log(todaysTransaction.Pizza)
console.log(todaysTransaction['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransaction[prop])


const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for(const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

// console.log(todaysNet(todaysTransaction))


// todaysTransaction.Pizza = 40

// console.log(todaysTransaction['Dave'])

/////////////////////////////////////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Kama",
    GPA: 5.5,
    classes: [100, 200]
}

// console.log(student.test)

for(const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'name')


///////////////////////////////////////////////////////////

// interface Incomes {
//     [key: string]: number

// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Income = Record<Streams, number | string>

const monthlyIncomes: Income = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for(const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Income])
}