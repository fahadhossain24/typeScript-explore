import { Player } from './classes/player.js';

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
    // console.log('hello')
}

const myAnotherFunc = (a: number, b: number, c:number = 5) => {
    return a + b + c
}
// console.log(myAnotherFunc(4, 6, 7)) 

//function signature............
let add: (a: number, b: number, c: string) => number;

add = (a: number, b: number, c: string) => {
 if(c === 'add'){
    return a + b;
 }else if(c === 'minus'){
    return a - b;
 }else if(c === 'multiply'){
    return a * b;
 }else if(c === 'division'){
    return a / b;
 }else{
    return 0;
 }
}

// console.log(add(5, 6, 'add'))
// console.log(add(5, 6, 'minus'))
// console.log(add(5, 6, 'multiply'))
// console.log(add(5, 6, 'division'))

// class............

const sakib = new Player('Sakib', 36, 'Bangladesh');
const mashrafi = new Player('mashrafi bin murtaza', 41, 'Bangladesh');

// console.log(mashrafi);
// console.log(mashrafi.play())

let players: Player[] = []

players.push(sakib, mashrafi)

// console.log(players)


//interface in typeScript............
interface productInterface {
    name: string,
    price: number,
    quantity: number
}

const product1: productInterface = {
    name: 'potatu',
    price: 10,
    quantity: 10
}
// console.log(product1)

interface ractangleOption {
    width : number,
    height: number
}

const drowRactangle = (options: ractangleOption) => {   
    return options.width * options.height
}

const ractangleOptions = {
    width:5,
    height:5, 
}

// console.log(drowRactangle(ractangleOptions))

// generic type.........

const addId = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return {
        ...obj, id
    }
}
let personInfo = addId({
    name: 'fahad',
    age: 21
})

interface APIResponse<T>{
    status: number,
    type: string,
    data: T
}

const response: APIResponse<string> = {
    status: 200,
    type: 'good',
    data: 'ss'
}

// enums in typescript.........

enum RType {'success','failed', 'forbidden', 'unauthorize'};
interface APIResponses<T>{
    status: number,
    type: RType,
    data: T
}


const respons : APIResponses<object> = {
    status: 200,
    type: RType.failed,
    data: {
        name: 'fahad',
        age: 21
    }
}

// console.log(respons)

// tuples in typescript...........

const newToples: [string, number, object] = ['helo', 55, {a: 1}]

newToples[0] = 'gelo'
console.log(newToples)

