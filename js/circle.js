console.log("checking routes for math exercise");
(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let pi = Math.PI;
            let area = pi * Math.pow(this.radius, 2);  //calculating the area
            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            let area2 = 0;
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding){    //when its true, rounding the area to the nearest integer
               area2 = Math.round(this.getArea());    
            }else{
                area2 = this.getArea();
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area2);
        }
    };

    //console.log(circle.getArea()); //added by me
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number" );
    circle.logInfo(true);

    console.log("=======================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();