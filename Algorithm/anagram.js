"use strict";
/******************************************************************************
 *  @file           : primeFactors.ts
 *  @overview       : To compute the prime factorization of N by accepting input from user.
 *  @author         : Krishna Murthy A V
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/
exports.__esModule = true;
//importing readline-sync function
var readline = require("readline-sync");
//function definition
function anagram() {
    var strone = readline.question("enter a first string : ");
    var strtwo = readline.question("enter a second string : ");
    var res = isAnagram(strone, strtwo);
    function isAnagram(strone, strtwo) {
        var x;
        x = strone.toLowerCase();
        var y;
        y = strtwo.toLowerCase();
        if (x.length != y.length) {
            return false;
        }
        else {
            var m = [], n = [];
            m = x.split("");
            n = y.split("");
            x = m.sort();
            y = n.sort();
            if (x.length == y.length) {
                var j = 0;
                while (j < x.length) {
                    for (var i = j; i < x.length; i++) {
                        if (x[j] != y[i]) {
                            return false;
                        }
                        else {
                            j++;
                        }
                    }
                }
                return true;
            }
        }
    }
    if (res == true) {
        console.log("String is anagram.");
    }
    else {
        console.log("String is not anagram.");
    }
}
//function call
anagram();
