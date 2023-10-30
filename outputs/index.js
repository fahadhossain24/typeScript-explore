import { Player } from './classes/player.js';
const number = 10;
// console.log(number)
const myName = 'name';
const myTsFunc = () => {
    return 'initial return';
};
// console.log(myTsFunc())
// console.log(myName)
let personName = 'Fahad';
// personName = 45;
// console.log(personName)
const myArr = ['apple', 'banana', 'orange'];
// myArr.push('mango')
const myAnotherArr = ['mango', 20, false, {}];
// myAnotherArr.push({})
// console.log(myAnotherArr)
const obj = {
    name: 'fahad',
    age: 21,
    isDeveloped: true
};
// obj.isSleep = false
// console.log(obj)
// union type..............
let a;
a = 45;
// console.log(a)
const unionTypedArr = [];
unionTypedArr.push(4, 'fahad');
// console.log(unionTypedArr)
//explecit type..............
let aObj1;
aObj1 = [4, 5, 6];
// console.log(aObj1)
let aObj2;
aObj2 = {
    name: 'fahad',
    age: 21
};
// console.log(aObj2.name)
// function type
let myFunc;
myFunc = () => {
    // console.log('hello')
};
const myAnotherFunc = (a, b, c = 5) => {
    return a + b + c;
};
// console.log(myAnotherFunc(4, 6, 7)) 
//function signature............
let add;
add = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else if (c === 'minus') {
        return a - b;
    }
    else if (c === 'multiply') {
        return a * b;
    }
    else if (c === 'division') {
        return a / b;
    }
    else {
        return 0;
    }
};
// console.log(add(5, 6, 'add'))
// console.log(add(5, 6, 'minus'))
// console.log(add(5, 6, 'multiply'))
// console.log(add(5, 6, 'division'))
// class............
const sakib = new Player('Sakib', 36, 'Bangladesh');
const mashrafi = new Player('mashrafi bin murtaza', 41, 'Bangladesh');
// console.log(mashrafi);
// console.log(mashrafi.play())
let players = [];
players.push(sakib, mashrafi);
const product1 = {
    name: 'potatu',
    price: 10,
    quantity: 10
};
const drowRactangle = (options) => {
    return options.width * options.height;
};
const ractangleOptions = {
    width: 5,
    height: 5,
};
// console.log(drowRactangle(ractangleOptions))
// generic type.........
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let personInfo = addId({
    name: 'fahad',
    age: 21
});
const response = {
    status: 200,
    type: 'good',
    data: 'ss'
};
// enums in typescript.........
var RType;
(function (RType) {
    RType[RType["success"] = 0] = "success";
    RType[RType["failed"] = 1] = "failed";
    RType[RType["forbidden"] = 2] = "forbidden";
    RType[RType["unauthorize"] = 3] = "unauthorize";
})(RType || (RType = {}));
;
const respons = {
    status: 200,
    type: RType.failed,
    data: {
        name: 'fahad',
        age: 21
    }
};
// console.log(respons)
// tuples in typescript...........
const newToples = ['helo', 55, { a: 1 }];
newToples[0] = 'gelo';
console.log(newToples);
//# sourceMappingURL=index.js.map