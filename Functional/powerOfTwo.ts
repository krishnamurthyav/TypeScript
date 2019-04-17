/******************************************************************************
 *  @file           : powerOfTwo.ts
 *  @overview       : To generate two's power value by accepting input from user.
 *  @author         : Krishna Murthy A V 
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/

//importing readline-sync function
import * as readline from 'readline-sync';
//function definition
function power() {
    var integer: number = readline.question("Enter 2's power value : ");
    powOfTwo(integer);
    function powOfTwo(integer) {
        if (integer => 0 || integer <= 31) {
            for (let index = 0; index <= integer; index++) {
                var result = Math.pow(2, index);
            }
            console.log("2 power " + integer + " = " + result);
        }
        else {
            console.log("Entered value is out of range. ");
        }
    }
}
//function call
power();