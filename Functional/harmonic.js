"use strict";
/******************************************************************************
 *  @file           : harmonic.ts
 *  @overview       : To generate sum of harmonic numbers by accepting input from user.
 *  @author         : Krishna Murthy A V
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/
exports.__esModule = true;
//importing readline-sync function 
var readline = require("readline-sync");
//function definition
function harmonic() {
    var number = readline.question("Enter the number : ");
    harmonicNumber(number);
    function harmonicNumber(number) {
        var sum = 0;
        for (var index = 1; index <= number; index++) {
            sum = sum + (1 / index);
            // console.log(sum);
        }
        console.log("Nth harmonic Value is :" + sum + "\n");
    }
}
//function call
harmonic();
