console.log("testing routes (while loop)");

//(2)
let result = 1;
let j = 2;

   while( result < 20){
   let result = Math.pow(2, j);
    j++; 
    console.log(result);
    if(result === 65536)
    break;
}   


//(1) ###### do-while loop ######

var allCones = Math.floor(Math.random() * (100 - 50) + 50);//creating random number between 50 to 100 numbers
console.log("You have " + allCones + " cones.");
let i = 0;
 do{
    var soldCones = Math.floor(Math.random() * (5 - 1) + 1);//creating the number of sold cones each time

    if(allCones === 0){
        console.log("Yay! I sold them all. ;)");
        break;
    }else if(allCones >= soldCones){
        console.log(soldCones + " cone/ cones were sold.");
        allCones = allCones - soldCones;//subtracting the amount of sold cones from total cones
        console.log("The remaining cones: " + allCones); 
    }else if(allCones < soldCones){  
        console.log("Cannot sell you " + soldCones+", I only have " + allCones +".");
    }
    i++;
}while( i < 100)