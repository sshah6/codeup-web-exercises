
console.log("Checking route for split/join ex");

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    //var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    const planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
    */ 
    const planetsArrayWithTag = planetsArray.join("<br>");
    console.log(planetsArrayWithTag);
    //The <br> tags could be used in html for outputting each planet in different lines.

/*
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    const planetsInUl = `<ul><li> ${planetsArray.join('</li><li>')}</li></ul>`;
    console.log(planetsInUl);
    // const planetsInLi = planetsArray.join("<li>")
    // console.log(planetsInLi);

    document.getElementById("demo").innerHTML = planetsArrayWithTag;
    document.getElementById("demo2").innerHTML = planetsInUl;
    //document.getElementById("demo1").innerHTML = planetsInLi;
})();

// ** Create a function that will take in a formatted string of numbers and return an array of phone numbers without any symbols. Console.log the output of the returned array.

/* EXAMPLE...

    const phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

    cleanPhoneNumbers(phoneNumbers);

    the above code should output the following...

       2105552020
       2305552020
       5125553030

*/
function cleanPhoneNumber(number){
    let splitted = number.split("-");
    console.log(splitted.join("")); 
}
cleanPhoneNumber('210-555-2020\n230-555-2020\n512-555-3030');

