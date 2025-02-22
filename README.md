TypeScript Functional Programming Example
This repository demonstrates various pure functions and functional programming concepts using TypeScript. The code showcases functions like add, doubleThenAddOne, string manipulation, array mapping, filtering, and reducing, as well as a simple logger callback function.

Features
Pure Functions
```
add(a: number, b: number): number
A simple pure function that returns the sum of two numbers.

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3)); // 5
```
Example#2 Features
```
doubleThenAddOne(x: number): number
Combines two functions (double and addOne) to perform functional composition.

function double(x: number): number {
  return x * 2;
}
function addOne(x: number): number {
  return x + 1;
}
function doubleThenAddOne(x: number): number {
  return addOne(double(x));
}
console.log(doubleThenAddOne(4)); // 9
```
String Manipulation
formatName(name: string)
Returns an object containing different formats of the input string (lowercase, uppercase, title case).
```
function formatName(name: string) {
  return {
    lowercase: name.toLowerCase(),
    uppercase: name.toUpperCase(),
    titleCase: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
  };
}
console.log(formatName('ali zaid'));
// Output: { lowercase: 'ali zaid', uppercase: 'ALI ZAID', titleCase: 'Ali zaid' }

Callback Functions
logger(callback: (message: string) => void): void
Demonstrates a logger function that takes a callback to display messages.

function logger(callback: (message: string) => void): void {
  callback('Hello World!');
}
function printMessage(message: string): void {
  console.log(message);
}
logger(printMessage); // "Hello World!"
```

Array Mapping and Filtering
Array Mapping
The following code showcases various mapping operations on arrays:

Doubling numbers
Converting strings to uppercase and title case
Extracting object properties
```
const numbers = [1, 2, 3, 44, 5, 6, 7];
const doubled = numbers.map((x) => x * 2);
console.log(doubled); // [2, 4, 6, 88, 10, 12, 14]

const names = ['ali', 'zaid', 'maryam'];
const upperCaseNames = names.map((x) => x.toUpperCase());
console.log(upperCaseNames); // ['ALI', 'ZAID', 'MARYAM']

const users = [{ name: 'Ali', age: 17 }, { name: 'Maryam', age: 14 }];
const userNames = users.map((x) => x.name);
console.log(userNames); // ['Ali', 'Maryam']
```
Array Filtering
Examples of filtering arrays based on conditions:

Finding even numbers
Filtering names starting with vowels or consonants
```
const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8].filter((x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8]

const names = ['ali', 'zaid', 'Abdul Rahman', 'Zubair', 'Maryam', 'Bilal', 'abdullah'];
const vowelNames = names.filter((name) => ['a', 'e', 'i', 'o', 'u'].includes(name[0].toLowerCase()));
console.log(vowelNames); // ['ali', 'Abdul Rahman', 'abdullah']
```
Array Reduction
reduce
Uses the reduce method to sum an array of numbers.
```
const numbers = [1, 3, 4, 5, 6, 7, 8, 9];
const totalSum = numbers.reduce((a, b) => a + b, 0);
console.log(totalSum); // 43
```
