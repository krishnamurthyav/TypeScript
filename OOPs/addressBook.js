"use strict";
exports.__esModule = true;
// import readline-sync function
var read = require("readline-sync");
// import { exists } from 'fs';
var Model = require('./addressutil');
var file = require('fs');
var data1 = file.readFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', 'utf8');
/**
 * Read json file data
 */
// object creation of AddressBook class
var object = new Model.AddressBook;
// function defination
function address(data) {
    console.log("Enter 1 for add person information");
    console.log("Enter 2 for update person information");
    console.log("Enter 3 for remove person information");
    console.log("Enter 4 for sort the addressbook based on ZIP");
    console.log("Enter 5 for sort the addressbook based on firstname");
    console.log("Enter 6 for Print all addressbook information");
    console.log("Enter 7 to exit");
    var num = read.questionInt("Select  any number:");
    var data = JSON.parse(data1);
    switch (num) {
        case 1:
            object.addPerson(data);
            break;
        case 2:
            object.updatePerson(data);
            break;
        case 3:
            object.removeperson(data);
            break;
        case 4:
            object.sortzip(data);
            break;
        case 5:
            object.sortfname(data);
            break;
        case 6:
            object.printadd(data);
            break;
        case 7:
            console.log("\n out of application");
            break;
        default:
            console.log("Wrong input");
            return address(data);
    }
}
// function calling
address(data1);
