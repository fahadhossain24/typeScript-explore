
const number = 10
// console.log(number)
const myName = 'name'
const myTsFunc = () => {
    return 'initial return'
}
// console.log(myTsFunc())
// console.log(myName)

let personName = 'Fahad';
// personName = 45;
// console.log(personName)

const myArr = ['apple', 'banana', 'orange']
// myArr.push('mango')
const myAnotherArr = ['mango', 20, false, {}]
// myAnotherArr.push({})
// console.log(myAnotherArr)

const obj = {
    name: 'fahad',
    age: 21,
    isDeveloped: true
}
// obj.isSleep = false

// console.log(obj)

// union type..............
let a : string | number;
a = 45
// console.log(a)
const unionTypedArr : (number | string)[] = []
unionTypedArr.push(4, 'fahad');
// console.log(unionTypedArr)

//explecit type..............
let aObj1 : object
aObj1 = [4, 5, 6]
// console.log(aObj1)

let aObj2 : {name: string, age: number}
aObj2 = {
    name: 'fahad',
    age: 21
}
// console.log(aObj2.name)

// function type

let myFunc : Function;
myFunc = () => {
    console.log('hello')
}

const myAnotherFunc = (a: number, b: number, c:number = 5) => {
    return a + b + c
}
console.log(myAnotherFunc(4, 6, 7))