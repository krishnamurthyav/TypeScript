/******************************************************************************
 *  @file           : sumOfThree.ts
 *  @overview       : Read in N integers and counts the number of triples that sum to exactly 0.
 *  @author         : Krishna Murthy A V 
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/
//importing readline-sync function
import read = require('readline-sync');

//function definition
function numbers() {
    var arr: any = [];
    var res: any = [];
    res = arrayCall(arr);
    sumOfThree(res);
    //sum of three function dafinition
    function sumOfThree(res) : any {
        var count: number = 0;
        for (let i = 0; i < res.length; i++) {
            for (let j = i + 1; j < res.length; j++) {
                for (let k = j + 1; k < res.length; k++) {
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
        var num: number = read.question("enter the number of element ");
        console.log("elements are: ");
        for (let i = 0; i < num; i++) {
            arr[i] = read.question("");
        }
        return arr;

    }
}
numbers();