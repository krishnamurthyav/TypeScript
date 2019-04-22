// import readline-sync function
import * as read from 'readline-sync';
var file = require('fs');

class Person {
    firstname: string;
    lastname: string;
    city: string;
    state: string;
   
    constructor(firstname, lname, city, state) {
        this.firstname = firstname;
        this.lastname = lname;
        this.city = city;
        this.state = state;
        
    }
}

class AddressBook extends Person { //inheriting Person class
    phonenumber1: number;
    zip: number;
    constructor(firstname, lname, city, state, phnum, zip) {
        super(firstname,lname,city,state);
        this.phonenumber1 = phnum;
        this.zip = zip;
     }
    // create new address book function
    addPerson(data) {
        var fname: string = read.question("Enter firstname of person :")
        var lname: string = read.question("Enter lastname of person :")
        var city1: string = read.question("Enter city of person:")
        var state1: string = read.question("Enter state of person:")
        var phonenum1: number = read.question("Enter phonenumber:")
        var zip: number = read.question("Enter zip code:")
        // create object of Person class
        var o: any = new AddressBook(fname, lname, city1, state1, phonenum1, zip)
        console.log("data: ", data);

        console.log("object: ", o);

        /**
        * push each value into json
        */
        data.Person.push(o);
        // write data into json file
        file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data))
    }
    // updating address book function
    updatePerson(data) {
        var name: string = read.question("enter Firstname of person :")
        for (let index1 = 0; index1 < data.Person.length; index1++) {
            if (data.Person[index1].firstname == name) {
                var index = data.Person.indexOf(data.Person[index1]);
                console.log(" select which information to be update ")
                console.log("Enter 1 for firstname of person to be update")
                console.log("Enter 2 for  lastname of person to be update")
                console.log("Enter 3 for  phonenumber person to be update")
                console.log("Enter 4 for  city of person to be update")
                console.log("Enter 5 for  state of person to be update")
                console.log("Enter 6 for  zip code of person to be update")
                var num1: number = read.questionInt("select any number:")
                switch (num1) {
                    case 1: this.firsname(data, index)
                        break;
                    case 2: this.lasname(data, index)
                        break;
                    case 3: this.phonenumber(data, index)
                        break;
                    case 4: this.city1(data, index)
                        break;
                    case 5: this.state1(data, index)
                        break;
                    case 6: this.zipcode(data, index)
                        break;
                }
            }
        }
    }
    // update first name
    firsname(data, index) {
        var fname1: string = read.question("enter the name changed first name:")
        data.Person[index].firstname = fname1
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data))

    }
    // update last name
    lasname(data, index) {
        var lname1: string = read.question("enter changed last name:")
        data.Person[index].lastname = lname1
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data))

    }
    // update phone number
    phonenumber(data, index) {
        var phonenumber1: number = read.question("enter  changed phonenumber:")
        data.Person[index].phonenumber = phonenumber1
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data))

    }
    // update city
    city1(data, index) {
        var cityname: string = read.question("enter changed city name")
        data.Person[index].city = cityname
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data))

    }
    // update city
    state1(data, index) {
        var statename: string = read.question("enter the changed state name")
        data.Person[index].state = statename
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data))

    }
    // update zipcode
    zipcode(data, index) {
        var zipcode: number = read.question("enter the name changed zip code")
        data.Person[index].zip = zipcode
        var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data))

    }
    // removing or deleting particulor person
    removeperson(data) {

        var name: string = read.question("enter name of person to be remove: ")
        var person: any = data.Person;
        for (var index1 in person) {
            // for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[index1].firstname == name) {
                var index = data.Person.indexOf(data.Person[index1]);
                // This will remove the object that name of the person
                var dd = data.Person.splice(index, 1);
                console.log("deleted person details : " + dd);
            }
            var d = file.writeFileSync('/home/admin1/Desktop/TypeScript/OOPs/jsonaddress.json', JSON.stringify(data))

        }

    }
    sortfname(data) {
        let fname = data.Person;
        function sortbyfname(a, b) {
            if (a.personfname == b.personfname)
                return 0
            if (a.personfname > b.personfname)
                return 1
            if (a.personfname < b.personfname)
                return -1
        }
        var result = fname.sort(sortbyfname);
        console.log(result);


    }
    sortzip(data) {
        let refer = data.Person;
        function sortbyzip(a, b) {
            return (a.zip - b.zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);

    }
    printadd(data) {
        var person = data.Person
        for (const key in person) {
            console.log(person[key])
        }


    }
}
module.exports = { Person, AddressBook }