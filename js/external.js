console.log("Hello from external JavaScript");
alert("you are doing good."); //first alert is just showing the code works
let userFavoriteColor = prompt("what is your favorite color?"); //asking for user's favorite color
if(userFavoriteColor === "") {  //if the blue is entered, it matches builder's favorite color too
    alert("Great! " + userFavoriteColor + " my favorite color too :)");
}
 //Exercise 3 from last lesson
let amazonWorkHr = prompt("Pleas enter Amazon work Hour");
let fbworkHr = prompt("Pleas enter facebook work Hour");
let googleWorkHr = prompt("Pleas enter Google work Hour");

let totalAmazon = amazonWorkHr * 380;
let totalFb = fbworkHr * 350;                   //calculating the amount of hours and prices
let totalGoogle = googleWorkHr * 400;

let totalAll = totalAmazon + totalGoogle + totalFb; //adding the totals to each other
alert("According to your hours of work entered, your amount of money is " + totalAll +"."); //alerts the final result

//Extra exercise,

let fullClass = 20;
let schedule = "Tue and Thur";
let enrolled = false;
let classCheck = prompt("Enter the amount of enroled students.")
let scheduleCheck = prompt("Enter your schedule in three word format (exp: Tue): ");
let enrolement = false;
 if (classCheck < 20 && scheduleCheck !== "Tue and Thur"){
     enrolement = true;
     alert("You are enrolled.");
 }else{
     alert("You are not enrolled due to conflictions.");
 }



