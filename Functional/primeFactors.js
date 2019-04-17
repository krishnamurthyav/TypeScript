"use strict";
/******************************************************************************
 *  @file           : primeFactors.js
 *  @overview       : To compute the prime factorization of N by accepting input from user.
 *  @author         : Krishna Murthy A V
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/
exports.__esModule = true;
//importing readline-sync function
// import * as readline from 'readline-sync';
var read = require("readline-sync");
//function definition
function prime() {
    var numner = read.question("Enter the number to find its prime factors ");
    primeFactors(numner);
    function primeFactors(number) {
        console.log("prime factors of " + number + " is : ");
        var value = 2;
        while (value <= number) {
            if (number % value == 0) {
                console.log(" " + value);
                number = number / value;
            }
            else if (number % value != 0) {
                value++;
            }
        }
    }
}
//function call
prime();
