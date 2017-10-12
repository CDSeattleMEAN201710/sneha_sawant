// myNum = 5;
let myNum: number = 5
// myString = "Hello Universe";
let myString: string = "Hello Universe";
// myArr = [1,2,3,4];
let myArr: Array<number> = [1,2,3,4];
// myObj = { name:'Bill'};
let myObj: object = { name:'Bill'};
// anythingVariable = "Hey";
let anythingVariable1: string = "Hey";
// anythingVariable = 25; ;
let anythingVariable2: number = 25;
// arrayOne = [true, false, true, true]; 
let arrayOne: Array<boolean> = [true, false, true, true]; 
// arrayTwo = [1, 'abc', true, 2];
let arrayTwo: Array<boolean,number,string> = [1, 'abc', true, 2];
// myObj = { x: 5, y: 10 };
let myObj1: object = {x: 5, y: 10 };
// // object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
class MyNode{
    val: number;
    _priv: number;
    constructor(val: number){
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    };
    
}
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(): void{
    console.log("Hello World");
    return;


function sendingErrors(): never{
        throw new Error('Error message');
    }
// }());
// myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);
// function myFunction() {
//     console.log("Hello World");
//     return;
// }
// function sendingErrors() {
// 	throw new Error('Error message');
// }
//