/******************************************************************************
 *  @file           : primeFactors.ts
 *  @overview       : It is used to calculate the respective day from our given input.
 *                    that is depends on given day ,month and year.
 *  @author         : Krishna Murthy A V 
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/
// import readline-sync function
import readline = require('readline-sync');
//function definition
function weekDay() {
    var day: number = +process.argv[2];
    var month: number = +process.argv[3];
    var year: number = +process.argv[4];
    var res: number = dayOfWeek(day, month, year);
    //calender function
    function dayOfWeek(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;
    }
    var days = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
    //check the condition 
    if (res <= days.length) {
        console.log("Day falls on : " + days[res]);
    } else {
        console.log("Invalid date");
    }
}
weekDay(    
    
);
