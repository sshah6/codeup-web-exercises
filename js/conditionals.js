"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(colorName){
    if(colorName == "blue")
        return "the color of the sky is blue";
    else if(colorName == "red")
        return "apples are red.";
    else if(colorName == "white")
        return "I have a white dog";
    else if(colorName == "orange")
        return"Oranges are orange.";
    else if(colorName == "cyan")
        return "I don't know anything about Cyan.";
    else
        return "No color was entered";
}
var color = analyzeColor("red");
console.log(color);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColorSwitch(colorName){
    switch (colorName.toLowerCase()){
        case "red":
            return "The apples are red.";
            break;
        case "orange":
            return "Oranges are orange.";
            break;
        case "blue":
            return "The sky is blue.";
            break;
        case "cyan":
            return "I don't know anything about this color input.";
            break;
        default:
            return "no color entry? weird.";
            break;
    }
}
var color1 = analyzeColorSwitch(randomColor);
console.log(color1);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

 let colorInput = prompt("Enter a color name.");
 function analyzeColorSwitchAlert(colorName){
     switch (colorName.toLowerCase()){
         case "red":
             alert("The apples are red.");
             break;
         case "orange":
            alert("Oranges are orange.");
             break;
         case "blue":
            alert("The sky is blue.");
             break;
         case "cyan":
            alert("I don't know anything about this color input.");
             break;
         default:
            alert("no color entry? weird.")
             break;
     }
 }
 analyzeColorSwitchAlert(colorInput);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, total){
    switch(luckyNum){
        case 0:
            console.log(total * 1);
            break;
        case 1:
            console.log(total - (total * 0.10));
            break;
        case 2:
            console.log(total - (total * 0.25));
            break;
        case 3:
            console.log(total - (total * 0.35));
            break;
        case 4:
            console.log(total - (total * 0.50));
            break;
        case 5:
            console.log(total - total);
            break;
        default:
            console.log("No promotions this time.");
            break;
    }
}
calculateTotal(0, 100) // returns 100
calculateTotal(4, 100) // returns 50
calculateTotal(5, 100) //returns 0

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);

let userTotal = prompt("Enter your total cost.")
let userTotalInt = parseInt(userTotal);

function calculateTotalRandom (luckyNum, total){
    switch(luckyNum){
        case 0:
            alert("Your luck number was: " + luckyNum + ", Before discount: $" + total + " After discount: $" + total);
            break;
        case 1:
            alert("Your luck number was: " + luckyNum + ", Before discount: $" + total + " After discount: $" + (total - (total * 0.10)));
            break;
        case 2:
            alert("Your luck number was: " + luckyNum + ", Before discount: $" + total + " After discount: $" + (total - (total * 0.25)));
            break;
        case 3:
            alert("Your luck number was: " + luckyNum + ", Before discount: $" + total + " After discount: $" + (total - (total * 0.35)));
            break;
        case 4:
            alert("Your luck number was: " + luckyNum + ", Before discount: $" + total + " After discount: $" + (total - (total * 0.50)));
            break;
        case 5:
            alert("Your luck number was: " + luckyNum + ", Before discount: $" + total + " After discount: $" + (total - total));
            break;
        default:
            alert("No promotions at this time.");
            break;
    }
}
calculateTotalRandom(luckyNumber, userTotalInt);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let question = confirm("Do you want to enter a number?");
if(question == true){
   let userInput =  prompt("Enter your favorite number.");
   let userInputInt = parseFloat(userInput);

   if(isNaN(userInput) == true){
        alert("Incorrect entry! Enter a number.");
   }else if(isNaN(userInput) == false){
        if(userInputInt % 2 === 0){
            alert(userInputInt + " is an even number.");
            }else{
            alert(userInputInt + " is an odd number.");
        }
   }

    if(isNaN(userInput) == false){
        //let userInputInt = parseFloat(userInput);
        alert(userInputInt + " + 100 = " + (userInputInt + 100));
   }

   if(isNaN(userInput) == false){
        if(userInputInt > 0)
            alert(userInputInt +" is a positive number.");
        else
            alert(userInputInt +" is a negative number.");
   } 
}