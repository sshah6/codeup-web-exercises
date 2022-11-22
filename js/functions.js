"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name){
    return ("Hello " + name + ".");
}

//The arrow function version of the above function
const sayHelloArrow =(name)=>{
    return `Hello ${name}.`
}
console.log(sayHelloArrow("Alejandro"));
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello("Alex");
console.log(helloMessage);

//The arrow function version of the above function
let helloMessageArrow = sayHelloArrow("Alejandro");
console.log(helloMessageArrow);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Alex";
console.log(sayHello(myName));

let myNameArrow = "Alejandro";
console.log(sayHelloArrow(myNameArrow));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(num){
    //console.log("Testing");
    return (num === 2);  
}
console.log(isTwo(random));

//The arrow function version of the above function
const isTwoArrow =(num) =>{
    return (num === 2);
}
console.log(isTwoArrow(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercent, cost){
    return cost * tipPercent;
}
console.log(calculateTip(0.20, 20));

//The arrow function version of the above function
const calculateTipArrow = (tipPercent, cost) =>{
    return cost * tipPercent;
}
console.log(calculateTipArrow(0.20, 20));
//console.log(calculateTip(0.25, 25.50)); // returns 6.375. Tested
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let tipPercentage = prompt("Enter the tip Percentage.");
let theCost = prompt("Enter the cost.");
let theTip = calculateTip(tipPercentage, theCost);
console.log("Your tip amount is: $" + theTip);

//The arrow function version of the above function
let theTipArrow = calculateTipArrow(tipPercentage, theCost);
console.log("Your tip amount is: $" + theTipArrow);
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(discount, price){
    return price - (discount * price);
}
console.log("The discounted price is: $"+applyDiscount(0.20, 20));
console.log("The discounted price is: $"+applyDiscount(0.50, 100));

//The arrow function version of the above function
const applyDiscountArrow = (discount, price) => {
    return price - (discount * price);
}
console.log("The discounted price is: $"+ applyDiscountArrow(0.50, 100));
