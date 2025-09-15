/*

Objective:
Practice using the .length property by calculating the length of
multiple predefined strings and assigning the results to specific variables.

Instructions:
You will be provided with several predefined string variables.
Your task is to:
  - Use the .length property to calculate the length of each string.
  - Assign the length of each string to its corresponding length variable.
  - Ensure that each length variable contains the correct value.

*/

// Starter Code (Pre-filled):
// Predefined strings
let stringOne = "Coding Bootcamp";


let stringTwo = "JavaScript";


let stringThree = "";


// Your task: Assign the length of each string to the corresponding variable
let lengthOne;   // Length of stringOne
let lengthTwo;   // Length of stringTwo
let lengthThree; // Length of stringThree

// Your code here
lengthOne = stringOne.length;
console.log (stringOne + "  length is : "+lengthOne);

lengthTwo = stringTwo.length;
console.log (stringTwo + "  length is : "+lengthTwo);

lengthThree = stringThree.length;
console.log (stringThree + "  length is : "+lengthThree);

console.log("To-Do List: \n- Task Status\n- Clean Done\n- Code In Progress\n- Relax Pending");

console.log("Heart Symbol: \u2665");
console.log("Greetings:\nHello (English)\nHola (Spanish)\n\u3088\u3046\u3053\u305d (Japanese)");

console.log("Menu:\nPizza\t\u{1F355}\nBurger\tu1F354\nSushi\t\u1F363");


console.log("Receipt:\nBook\tPrice\n1984\t$9.99\nDune\t$14.99\nTotal\t$24.98")

let singleQuoteString  = "It's my birthday!";
console.log(singleQuoteString );

let doubleQuoteString  = 'She said, "JavaScript is fun!"';
console.log(doubleQuoteString );


let combinedQuoteString   = "He said, \"It's time to learn JavaScript!\"";
console.log(combinedQuoteString );

let bothQuoteString    = "The instructor said, \"Don't forget to practice!\"";
console.log(bothQuoteString );

let name = "John";
let age = "78";
let greeting = `Hello, my name is ${name} and I am ${age} years old.`
console.log (greeting);

let shoppingList  = `Shopping List:
- Apples
- Bread
- Milk
- Eggs`
console.log (shoppingList);

let cName = "Ray"
let pName = "Apples";
let qty = 5;
let total = (2 * qty).toString();

let invoice = `Invoice:
Customer: ${cName}
Product: ${pName}
Quantity: ${qty}
Total: ${total}`
console.log (invoice);

let a = 5;
let b = 3;
let c = a+b;
var expressionResult = 'The result of ${a} + ${b} is ${c}.'
console.log (expressionResult);