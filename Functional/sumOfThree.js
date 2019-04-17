"use strict";
exports.__esModule = true;
/******************************************************************************
 *  @file           : sumOfThree.js
 *  @overview       : Read in N integers and counts the number of triples that sum to exactly 0.
 *  @author         : Krishna Murthy A V
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/
//importing readline-sync function
var read = require("readline-sync");
//function definition
function numbers() {
    var arr = [];
    var res = [];
    res = arrayCall(arr);
    sumOfThree(res);
    //sum of three function dafinition
    function sumOfThree(res) {
        var count = 0;
        for (var i = 0; i < res.length; i++) {
            for (var j = i + 1; j < res.length; j++) {
                for (var k = j + 1; k < res.length; k++) {
                    //condition statement
                    if (Number(res[i]) + Number(res[j]) + Number(res[k]) == 0) {
                        ++count;
                        console.log("[ " + res[i] + "," + res[j] + "," + res[k] + "]");
                    }
                }
            }
        }
        console.log("total number of count is " + count);
    }
    //arrayCall function definition 
    function arrayCall(arr) {
        //typescript variable declaration
        var num = read.question("enter the number of element ");
        console.log("elements are: ");
        for (var i = 0; i < num; i++) {
            arr[i] = read.question("");
        }
        return arr;
    }
}
numbers();
