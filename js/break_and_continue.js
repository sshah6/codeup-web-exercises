console.log("Testing break and continue."); // checking if the paths are right

//(2)
while(true){
    let userInput = prompt("Enter a number between 1 and 50.");
    userInput = Number(userInput);
    if(userInput % 2 !== 0 && userInput <= 50 && userInput > 0){
        console.log("you entered an odd " + userInput + " number between 1 and 50");
        for(let i = 1; i <= 50; i+=2){
            if(i === userInput){
                console.log("Yikes! skipping " + userInput);
                continue;
                
            }else{
                console.log("here is an odd number " + i);
            }
        }
        break;
    }else{
        continue;
    }
}




