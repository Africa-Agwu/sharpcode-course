console.log('hello');
//alert('Are you alright?');

//How to write a comment line

//Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

//document.getElementById('someText').innerHTML = 'Alright';

//var age = prompt('what is your age?');
document.getElementById('someText').innerHTML ='Alright it works';

//decrementing a number by 1
var num1 = 10;
num1--;
console.log(num1);

//Divide, Multiply. remainder
console.log(num1 % 5);
console.log(num1 / 3);

//Increment or decrement by any number you want
num1 += 40;
console.log(num1);

/*Functions
1. Create a function
2. Call a functiom

*/
function fun() {
//    alert('this is a function');
}
//Call
fun();

/* 
Lets Create a function that takes in a name and says Hello followed by your name

For example, 
Name: "Africa"
Return "Hello Africa"
*/
/*function greeting(yourName) {
    
    var result = 'Hello' + ' ' + yourName;
    document.getElementById('someText').innerHTML = result;
    console.log(result);
}
var name = prompt('what is your name');
greeting(name); */

//How to add two numbers together in a function

function sumNumbers(num1, num2){
var result = num1 + num2;
console.log(result);
}
sumNumbers(10,15);

/*While loops
var num = 0;
while (num < 100) {
    num += 1;
    console.log(num);
}*/

//For loop
for(let num = 0; num <= 100; num++){
    console.log(num);
}

//Data types
let yourage = 24; //number
let yourName = 'Africa'; //string
//let name = {first: 'Africa', last: 'Agwu'}; //object
let truth = false; //boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random; //undefined;
let nothing = null; //value null;

//Strings in Javascript (common Methods)

let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.replace('nan', '123'));
console.log(fruit.toUpperCase())
console.log(fruit.toLowerCase());
console.log(fruit[2]);
console.log(fruit.split(',')); //split by comma
console.log(fruit.split(''));  // slit by javascript

//Arrays in javascript
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array ('banana', 'apple', 'orange', 'pineapples');

//alert(fruits[2]); //access value of index 2nd
fruits[0] = 'pear';
console.log(fruits);

//Array common methods
console.log('to String', fruits.toString());// converting to string
console.log(fruits.join(' - ')); //jioning an array
console.log(fruits, fruits.pop(), fruits);
console.log(fruits, fruits.push('blackberry'), fruits);
console.log(fruits[4]);
fruits[4] = 'new Fruit';
console.log(fruits);

fruits.shift(); //Remove first element from an array;
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

let vegetables = ['ugu leaf', 'spinach', 'nchanwu', 'Uziza'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());

let someNumbers = [1, 2, 733, 11, 83, 93, 46, 5, 795, 39, 292]
console.log(someNumbers.sort(function(a, b){return a-b}));// sorted in ascending order
console.log(someNumbers.sort(function(a, b){return b-a}));// sorted in descending order

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
    
}
console.log(emptyArray);

//objects in Javascript
//Dictionaries in Python

let student = {
    first: 'Africa',
    last: 'Agwu',
    age:25,
    height:170,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

//console.log(student.first);
//console.log(student.last);
//student.first = 'notAfrica'; //change value
//console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());


//Conditionals, control flows, if Else

//18- 35 is my target demographic.
// && AND
// || OR

var age = 45;

if ((age >= 18) && (age <= 35)) {
    status = 'target Demo';
    console.log(status);
} else {
    status = 'Not My audience'
    console.log(status);
}

//Switch statement
//Differentiate between week day vs. weekend
// Day 0 is sunday
// Day 6 is Saturday
// Day 4 is thursday and a weekday

switch(2) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    
    case 6:
        text = 'weekend';
        break;

        default:
            text = 'weekday'
}
console.log(text);