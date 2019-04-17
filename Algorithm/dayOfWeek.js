"use strict";
exports.__esModule = true;
//function definition
function weekDay() {
    var day = +process.argv[2];
    var month = +process.argv[3];
    var year = +process.argv[4];
    var res = dayOfWeek(day, month, year);
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
        console.log("Day fall on : " + days[res]);
    }
    else {
        console.log("Invalid date");
    }
}
weekDay();
