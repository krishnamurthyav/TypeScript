/******************************************************************************
 *  @file           : primeAnagram.ts
 *  @overview       : Printing Anagram prime numbers  
 *  @author         : Krishna Murthy A V 
 *  @version        : 1.0
 *  @since          : 16-April-2019
 *
 ******************************************************************************/

 // import readline-sync function and utility file
try {
    var utility = require('./utility');
    var take = require("util");
    var readline = require("readline-sync");
    var array:any = [
        ["0 - 100"],
        ["100 - 200"],
        ["200 - 300"],
        ["300 - 400"],
        ["400 - 500"],
        ["500 - 600"],
        ["600 - 700"],
        ["700 - 800"],
        ["800 - 900"],
        ["900 - 1000"]
    ];
    var i:number = 0;
    var j:number = 1;
    var range:number = 100;
    var arr = [];
    var arr1 = [];
    for (let prime:number = 2; prime <= 1000; prime++) {
        //check given number is prime or not
        if (utility.isPrime(prime)) {
            if (prime <= range) {
                var a = "" + prime;
                //split
                var b = a.split("");
                //sorting
                b.sort();
                var v = "";
                for (let i = 0; i < b.length; i++) {
                    v = v + b[i];
                }
                // using built in includes method
                if (!arr.includes(v)) {
                    arr.push(v);
                    array[i][j] = prime;
                    j++;
                }
            }
            else {
                var a1 = "" + prime;
                //split function
                var b1 = a1.split("");
                // sort function
                b1.sort();
                var v1 = "";
                for (let i = 0; i < b1.length; i++) {
                    v1 = v1 + b[i];
                }
                // includes function
                if (!arr1.includes(v1)) {
                    arr1.push(v1);
                    j = 1;
                    range = range + 100;
                    i++;
                    array[i][j] = prime;
                }
            }
        }
    }
    /**
    * To call dArray() function.
    */
    arr = utility.dArray();
    console.log("The prime numbers that are not Anagram present in the given range ");
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            take.print(array[i][j] + " ");
        }
        console.log();
    }
} catch (error) {
    console.log(error.message);
}