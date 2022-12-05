
console.log("Testing functions");

//(1)
function isOdd(number){
    if(number%2 !== 0){
        return true;
    }
}
//console.log(isOdd(3));

//(2)
function isEven(number){
    if(number%2 === 0){
        return true;
    }
}
//console.log(isEven(4));
//(3)
function identity(input){
    return input;
}
//console.log(identity(6));

//(4)
function isFive(input){
    if(input === 5)
        return true;
    else 
    return false;
}
// console.log(isFive(5));
// console.log(isFive(3));

//(5)
function addFive(input){
    return input + 5;
}
//console.log(addFive(5));

//(6)
function isMultipleOfFive(input){
    if(input % 5 === 0)
        return true;
    else 
        return false;
}
//console.log(isMultipleOfFive(50));

//Skipping 7 and 8

//(7)
function isMultipleOfThreeAndFive(input){
    if(input % 3 === 0 && input % 5 === 0){
        return true;
    }else{
        return false;
    }
}
//console.log(isMultipleOfThreeAndFive(30));

//(8)
function isMultipleOf(target, n){
    if(target % n === 0)
        return true;
    else
    return false;
}
//console.log(isMultipleOf(9, 3));

//(9)
function isTrue(boolean){
    if(boolean == true)
        return true;
    else 
        return false;
}
//console.log(isTrue(false));

//skipping truthy, falsy  ## easy

//(10)
function isVowel(input){
    if(input === "a" || input === "e" || input === "i" || input === "o" || input === "u")
        return true;
    else 
        return false;
}
// console.log(isVowel("a"));
// console.log(isVowel("b"));

//(11)
function isConstant(input){
    if(input != "a" || input != "e" || input != "i" || input != "o" || input != "u")
        return true;
    else
        return false;
}
//console.log(isConstant("b"));

//(12)
function isCapital(input){
    if(input == input.toUpperCase())
        return true;
    else 
        return false
}
// console.log(isCapital("B"));
// console.log(isCapital("b"));

//(13)
function isLower(input){
    if(input == input.toLowerCase())
        return true;
    else
        return false;
}
// console.log(isLower("B"));
// console.log(isLower("b"));

//(14)
function hasLowerCase(string){
    var  upperString = string.toUpperCase();
    if(string !== upperString)
        return true;
    else
        return false;
}
// console.log(hasLowerCase("BABY"));
// console.log(hasLowerCase("baBy"));

//(15)
function isSpace(input){
    if(input.trim().length == 0)
        return true;
    else
        return false;
}
// console.log(isSpace(" "));

//(16)
function half(number){
    return number * 0.5;
}
//console.log(half(5));

//(17)
function remainder(a, b){
    return a % b;
}
//console.log(remainder(10, 3));

//(18)
function cube(n){
    return n * n * n;
}
//console.log(cube(3));

//(19)
function squareRoot(n){
    return (Math.sqrt(n));
}
// console.log(squareRoot(9));
// console.log(squareRoot(64));

//(20)
function cubeRoot(n){
    return (Math.cbrt(n));
}
//console.log(cubeRoot(27));

//(21)
function invertSign(n){
    return -n;
}
// console.log(invertSign(-3));
// console.log(invertSign(5));

//(22)
function degreesToRadians(deg){
    var pi = Math.PI;
    return deg *(pi/180);
}
//console.log(degreesToRadians(180));

//(23)
function radianToDegree(rad){
   var pi = Math.PI;
   return rad *(180/pi);
}
//console.log(radianToDegree(2*3.14));

//(24)
function areEqual(str1, str2){
    if(str1 == str2)
        return true;
    else
        return false;
}
//console.log(areEqual("hi", "Hi"));

//(25)
function areIdentical(a, b){
    if(a == b && typeof(a) == typeof(b))
        return true;
    else
        return false;
}
// console.log(areIdentical("2", 2));
// console.log(areIdentical(2, 2));

//(26)
function not(input){
    return !input;
}
//console.log(not(false));

//(27)
function and(a, b){
    return a && b;
}
//console.log(and(4, 3));

//(28)
function or(a, b){
    return a || b;
}
//console.log(or(5, 6));

//(29)
function reverseString(string){
    string = string.split("");
    string = string.reverse();//reverse function only works on arrays
    string = string.join("");
    return string;
}
//console.log(reverseString("Hello"));

//(30)
function rollDice(a){
    var random = Math.floor(Math.random() * a) + 1;
    return random;
}
//console.log(rollDice(4));

//(31) creating random number between two numbers
function getRandomNumber(min, max){
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}
//console.log(getRandomNumber(5, 10));


//(32)
function firstInput(str){
    return str[0];
}
//console.log(firstInput("Hello"));

//(33)
function lastInput(str){
    return str[str.length - 1];
}
//console.log(lastInput("Hello"));

//(34)
function rest(str){
    return str.slice(1);
}
//console.log(rest("Hello"));

//(35)
function reverse(str){
    str = str.split("");
    str = str.reverse();
    str = str.join("");
    return str;
}
//console.log(reverse("Hello"));

//(36)
function count(input){
    return input.length;
}
//console.log(count("Hello"));

//(37)
function remainder(number, divisor){
    return number % divisor;
}
//console.log(remainder(10, 7));

//(38)
function sumOfSquares(a, b){
    return Math.pow(a, 2) + Math.pow(b, 2);
}
//console.log(sumOfSquares(2, 3));

//(39)
function doMath(operator, a, b){
    if(operator == '-')
        return a - b;
    else if(operator == '+')
        return a + b;
    else if(operator == '*')
        return a * b;
    else if(operator == '/')
        return a / b;
}
// console.log(doMath( '+' , 2, 3));
// console.log(doMath("-", 2, 3));
// console.log(doMath("*", 2, 3));
// console.log(doMath("/", 2, 3));

//(40) counting white spaces at the beginning and end of a string
function countWhiteSpace(str){
    str = str.split(" ").length - 1;
    return str;
}
//console.log(countWhiteSpace("  hello "));

//(41)
function removeString(str1, str2){
     if(str1.includes(str2)){       //checking to see if the second string is included in first string
       return str1.replace(str2, ""); //if true, then it removes the second string and returns the value
    }else{
        return str1;                //if its not included then it returns the first string
    }
     
}    
//console.log(removeString("hellohello", "not"));

//(42)
function checkLast(str){
    return str[str.length - 1] === "a"; //returning true if the last letter of the input is "a", else false.
}
//console.log(checkLast("hola"));
//console.log(checkLast("hole"));

//(43) create a function that counts the amount of white spaces in the beginning of a string


