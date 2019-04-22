"use strict";
exports.__esModule = true;
// import readline-sync function
var read = require("readline-sync");
var file = require('fs');
var Person = /** @class */ (function () {
    function Person(firstname, lname, city, state, phnum, zip) {
        this.firstname = firstname;
        this.lastname = lname;
        this.city = city;
        this.state = state;
        this.phonenumber = phnum;
        this.zip = zip;
    }
    return Person;
}());
var AddressBook = /** @class */ (function () {
    function AddressBook() {
    }
    // create new address book function
    AddressBook.prototype.addPerson = function (data) {
        var fname = read.question("Enter firstname of person :");
        var lname = read.question("Enter lastname of person :");
        var city1 = read.question("Enter city of person:");
        var state1 = read.question("Enter state of person:");
        var phonenum1 = read.question("Enter phonenumber:");
        var zip = read.question("Enter zip code:");
        // create object of Person class
        var o = new Person(fname, lname, city1, state1, phonenum1, zip);
        console.log("data: ", data);
        console.log("object: ", o);
        /**
        * push each value into json
        */
        data.Person.push(o);
        // write data into json file
        file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data));
    };
    // updating address book function
    AddressBook.prototype.updatePerson = function (data) {
        var name = read.question("enter Firstname of person :");
        for (var index1 = 0; index1 < data.Person.length; index1++) {
            if (data.Person[index1].firstname == name) {
                var index = data.Person.indexOf(data.Person[index1]);
                console.log(" select which information to be update ");
                console.log("Enter 1 for firstname of person to be update");
                console.log("Enter 2 for  lastname of person to be update");
                console.log("Enter 3 for  phonenumber person to be update");
                console.log("Enter 4 for  city of person to be update");
                console.log("Enter 5 for  state of person to be update");
                console.log("Enter 6 for  zip code of person to be update");
                var num1 = read.questionInt("select any number:");
                switch (num1) {
                    case 1:
                        this.firstname(data, index);
                        break;
                    case 2:
                        this.lastname(data, index);
                        break;
                    case 3:
                        this.phonenumber(data, index);
                        break;
                    case 4:
                        this.city(data, index);
                        break;
                    case 5:
                        this.state(data, index);
                        break;
                    case 6:
                        this.zipcode(data, index);
                        break;
                }
            }
        }
    };
    // update first name
    AddressBook.prototype.firstname = function (data, index) {
        var fname1 = read.question("enter the name changed first name:");
        data.Person[index].firstname = fname1;
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data));
    };
    // update last name
    AddressBook.prototype.lastname = function (data, index) {
        var lname1 = read.question("enter changed last name:");
        data.Person[index].lastname = lname1;
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data));
    };
    // update phone number
    AddressBook.prototype.phonenumber = function (data, index) {
        var phonenumber1 = read.question("enter  changed phonenumber:");
        data.Person[index].phonenumber = phonenumber1;
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data));
    };
    // update city
    AddressBook.prototype.city = function (data, index) {
        var cityname = read.question("enter changed city name");
        data.Person[index].city = cityname;
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data));
    };
    // update city
    AddressBook.prototype.state = function (data, index) {
        var statename = read.question("enter the changed state name");
        data.Person[index].state = statename;
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data));
    };
    // update zipcode
    AddressBook.prototype.zipcode = function (data, index) {
        var zipcode = read.question("enter the name changed zip code");
        data.Person[index].zip = zipcode;
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data));
    };
    // removing or deleting particulor person
    AddressBook.prototype.removeperson = function (data) {
        var name = read.question("enter name of person to be remove: ");
        var person = data.Person;
        for (var index1 in person) {
            // for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[index1].firstname == name) {
                var index = data.Person.indexOf(data.Person[index1]);
                // This will remove the object that name of the person
                var dd = data.Person.splice(index, 1);
                console.log("deleted person details : " + dd);
            }
            var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data));
        }
    };
    AddressBook.prototype.sortfname = function (data) {
        var fname = data.Person;
        function sortbyfname(a, b) {
            if (a.personfname == b.personfname)
                return 0;
            if (a.personfname > b.personfname)
                return 1;
            if (a.personfname < b.personfname)
                return -1;
        }
        var result = fname.sort(sortbyfname);
        console.log(result);
    };
    AddressBook.prototype.sortzip = function (data) {
        var refer = data.Person;
        function sortbyzip(a, b) {
            return (a.zip - b.zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);
    };
    AddressBook.prototype.printadd = function (data) {
        var person = data.Person;
        for (var key in person) {
            console.log(person[key]);
        }
    };
    return AddressBook;
}());
module.exports = { Person: Person, AddressBook: AddressBook };
