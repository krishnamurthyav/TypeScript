"use strict";
/******************************************************************************
 *  @file           : primeNum.js
 *  @overview       : Printing Anagram prime numbers
 *  @author         : Krishna Murthy A V
 *  @version        : 1.0
 *  @since          : 16-April-2019
 *
 ******************************************************************************/
exports.__esModule = true;
// import readline-sync function nad utility file
// import * as readline from 'readline-sync';
var take = require("util");
var utility = require('./utility');
try {
    var primes = [[], [], [], [], [], [], [], [], [], []];
    var initial = 0;
    var final = 100;
    console.log("Prime Numbers in the given range are :\n");
    /*
     * Loop from 0 to 10 and stores the prime numbers and stores the values in each index.
     */
    for (var index = 0; index < 10; index++) {
        primes[index] = utility.isPrimes(initial, final);
        initial = initial + 100;
        final = final + 100;
    }
    var start = 0;
    var end = 100;
    /*
     * To print the prime numbers in the range 0-­100,100­-200, and so on.
     */
    for (var index1 = 0; index1 < 10; index1++) {
        take.print("[" +
            "[" +
            start +
            "-" +
            end +
            "]" +
            " " +
            "[" +
            primes[index1] +
            "]" +
            "]");
        start = start + 100;
        end = end + 100;
        console.log();
    }
    console.log("\n");
}
catch (error) {
    console.log("invalid");
}
