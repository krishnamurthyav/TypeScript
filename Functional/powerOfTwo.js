"use strict";
/******************************************************************************
 *  @file           : powerOfTwo.js
 *  @overview       : To generate two's power value by accepting input from user.
 *  @author         : Krishna Murthy A V
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/
exports.__esModule = true;
//importing readline-sync function
var readline = require("readline-sync");
//function definition
function power() {
    var integer = readline.question("Enter 2's power value : ");
    powOfTwo(integer);
    function powOfTwo(integer) {
        if (function (integer) { return 0 || integer <= 31; }) {
            for (var index = 0; index <= integer; index++) {
                var result = Math.pow(2, index);
            }
            console.log("2 power " + integer + " = " + result);
        }
        else {
            console.log("Entered value is out of range. ");
        }
    }
}
//function calling
power();
