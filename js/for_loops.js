console.log("TEST");

// (2)
function showMultiplicationTable(number){       //declaring a function
    let result = 0;                             //declaring a variable and assign it to zero
    for(var i = 1; i <= 10; i++){               //loops 10 times as condition indicates
        result = number * i;                    //assigning the result var to times of number with iterator
        console.log(number + " x " + i + " = " + result);//printing the result of mutiplication
    }    
}showMultiplicationTable(7);

//(3)
for(var i = 0; i < 10; i++){        //looping 10 times according to condition
    var random = Math.floor(Math.random() * 200) + 20;//generating randoms from 20 - 200
        //console.log(random);
    if(random % 2 == 0)               //if the random is even 
        console.log(random + " is even.");
    else                                //if not even
        console.log(random + " is odd.");
}

//(4)
let arr = new Array();
for(var i = 0; i < 10; i++){    //loops 10 times until i is less than 10
    for(var j = 0; j < i; j++){ //first loop start, second loop starts looping until j is less than i and then the loops continue looping.
        console.log(i);
    }  
}
//(5)
for(var i = 100; i >= 5; i-=5){ //when i is equal to 100, it prints every 5 numbers less than from there, and continues till the condition is met
    console.log(i);
}
