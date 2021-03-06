/******************************************************************************
 *  @file           : tempConv.ts
 *  @overview       : It is used to calculate the temperature based on our formulae.
 *  @author         : Krishna Murthy A V 
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/
// import readline-sync function
import readline = require('readline-sync');

//function definition
function temperature() {
    var choice: number = readline.question("1 for celsius to fahreinheit \n2 for fahreinheit to celsius : ");
    var temp: number = readline.question("Enter temperature : ");
    temperatureConversion(temp, choice);

    function temperatureConversion(temp, i) {
        var ctof: number, ftoc: number;
        if (i == 1) {
            ctof = (temp * 9 / 5) + 32;
            console.log("Converting temperature from celsius to fahreinheit : " + ctof);
        }
        if (i == 2) {
            ftoc = (temp - 32) * 5 / 9;
            console.log("Converting temperature from fahreinheit to celsius :" + ftoc);
        }
    }
}

//function call
temperature();