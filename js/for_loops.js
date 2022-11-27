console.log("TEST");

// (2)
function showMultiplicationTable(number){
    let result = 0;
    for(var i = 1; i <= 10; i++){
        result = number * i;
        //console.log(number + " x " + i + " = " + result);
    }    
}showMultiplicationTable(7);

//(3)
for(var i = 0; i < 10; i++){
    var random = Math.floor(Math.random() * 200) + 10;
    //console.log(random);
    if(random % 2 == 0)
    console.log(random + " is even.");
    else
    console.log(random + " is odd.");
}

//(4)
for(var i = 0; i < 10; i++){
    for(var j = 0; j < i; j++){
        //console.log(i);
    }
}

//(5)
for(var i = 104; i > 5; i--){
   
    i = i -= 4;
   // console.log(i);
}

//Break and Continue
