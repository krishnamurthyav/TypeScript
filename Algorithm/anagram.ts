/******************************************************************************
 *  @file           : anagram.ts
 *  @overview       : One string is an anagram of another if the second is simply a rearrangement
 *                    of the first. For example, 'heart' and 'earth' are anagrams...  
 *  @author         : Krishna Murthy A V 
 *  @version        : 1.1
 *  @since          : 15-April-2019
 *
 ******************************************************************************/

//importing readline-sync function
import readline = require('readline-sync');

//function definition
function anagram() {
    var strone: string = readline.question("enter a first string : ");
    var strtwo: string = readline.question("enter a second string : ");
    var res = isAnagram(strone,strtwo);
    
    function isAnagram(strone, strtwo){
        var x:any;
        x=strone.toLowerCase();
        var y:any;
        y=strtwo.toLowerCase();
        if(x.length!=y.length){
            return false;
        }
        else{
            var m=[],n=[];
            m=x.split("");
            n=y.split("");
            x=m.sort();
            y=n.sort();
            if(x.length==y.length){
                var j=0;
                while(j<x.length){
                for(let i=j;i<x.length;i++){
                    if(x[j]!=y[i]){
                        return false;
                    }else{
                        j++;
                    }
                }      
            }return true;
        }
    }
    }
    if (res == true) {
        console.log("String is anagram.");
    } else {
        console.log("String is not anagram.");
    }
}

//function call
anagram();
