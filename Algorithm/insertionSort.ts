/******************************************************************************
 *  @file           : insertionSort.ts
 *  @overview       : Sort using Inseretion-Sort method
 *  @author         : Krishna Murthy A V 
 *  @version        : 1.0
 *  @since          : 15-April-2019
 *
 ******************************************************************************/
// import readline-sync function
import readline = require('readline-sync');

//function definition
function insertion() {
    var num: number = readline.questionInt("Enter the number of Elements :");
    console.log("Enter " + num + " elements: ");
    var array = createArray(num);
    var insert: number = insertionsort(array);

    function createArray(num) {
        var arr = [];
        for (let index = 0; index < num; index++)
            arr[index] = readline.questionInt("Enter the element ");
        return arr;
    }

    function insertionsort(arr) {
        var a: number;
        for (let index = 0; index < arr.length; index++) {
            for (let jindex = index; jindex > 0; jindex--) {
                if (arr[jindex] < arr[jindex - 1]) {
                    a = arr[jindex];
                    arr[jindex] = arr[jindex - 1];
                    arr[jindex - 1] = a;
                }
            }
        }
        return arr;
    }
    console.log(insert);
}

//function call
insertion();