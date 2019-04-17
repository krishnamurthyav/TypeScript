"use strict";
exports.__esModule = true;
/******************************************************************************
 *  @file           : insertionSort.ts
 *  @overview       : Sort using Inseretion-Sort method
 *  @author         : Krishna Murthy A V
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/
// import readline-sync function
var readline = require("readline-sync");
//function definition
function sqrt() {
    var number = readline.question("Enter the number to find its Square Root");
    squareRoot(number);
    function squareRoot(num) {
        if (num > 0) {
            var value = num;
            var epsilon = 1e-15;
            while (Math.abs(value - num / value) > epsilon * value) {
                value = (num / value + value) / 2;
            }
            console.log("square root of non negative number is : " + value);
        }
        else {
            console.log("Invalid or negative number");
        }
    }
}
//function call
sqrt();
