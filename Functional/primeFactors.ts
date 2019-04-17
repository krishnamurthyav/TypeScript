/******************************************************************************
 *  @file           : primeFactors.ts
 *  @overview       : To compute the prime factorization of N by accepting input from user.
 *  @author         : Krishna Murthy A V 
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/

//importing readline-sync function
// import * as readline from 'readline-sync';
import read = require('readline-sync');
//function definition
function prime() {
    var numner: number = read.question("Enter the number to find its prime factors ");
    primeFactors(numner);
    function primeFactors(number) {
        console.log("prime factors of " + number + " is : ");
        var value: number = 2;
        while (value <= number) {
            if (number % value == 0) {
                console.log(" " + value);
                number = number / value;
            } else if (number % value != 0) {
                value++;
            }
        }
    }
}

//function call
prime();