/******************************************************************************
 *  @file           : balancedParantheses.ts
 *  @overview       : If expression using balanced paranthesis or not  
 *  @author         : Krishna Murthy A V 
 *  @version        : 1.0
 *  @since          : 16-April-2019
 *
 ******************************************************************************/

// import readline-sync function
import * as read from 'readline-sync';

// function definition
 function stack() {
    var str = read.question("Enter your mathematical expression with parantheses : ");
    var ch, i;
    var arr = [];
    for (i = 0; i < str.length; i++) {
        ch = str.charAt(i);

        if (ch == '(' || ch == '[' || ch == '{') {
            //stack push operation
            arr.push(ch);
        }
        else {
            switch (ch) {
                case ')'://stack pop operation
                    if (arr.pop() != '(') {
                        return false;
                    }
                    break;
                case ']'://stack pop operation
                    if (arr.pop() != '[') {
                        return false;
                    }
                    break;
                case '}'://stack pop operation
                    if (arr.pop() != '{') {
                        return false;
                    }
                    break;
            }
        }
    }//array is empty or not
    if (arr.length == 0) {
        return true;
    }
    return false;
}

// function calls
var bol = stack();

/**
 * To check balanced or unbalanced.
 */
if (bol) {
    console.log("Mathematical expression is balanced");
}
else {
    console.log("Mathematical expression not balanced");
}