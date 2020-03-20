"use strict";
// inference type
var myname = 'thalyson'; // string
var age = 23; // number
var height = 1.75; // number
var isadmin = true; // boolean
console.log(myname);
console.log(age);
console.log(height);
console.log(isadmin);
// explicit type
var anywhere = 'Hello!';
var booleantype = false;
var numbertype = 12.2;
var stringtype = 'Yes!';
var hobbies = ['Cozinhar', 'Praticar Esportes']; // array type any
console.log(hobbies[0]); // Cozinhar
console.log(typeof hobbies[0]); // string
hobbies = [100, 200, 300];
console.log(hobbies); // [100, 200, 300]
// tuples
var endereco = ['Av. Principal', 99];
endereco.push('Street Important', 1280);
console.log(endereco); // ['Av. Principal', 99, 'Street Important', 1280]
// enums
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
    Color[Color["Orange"] = 11] = "Orange";
    Color[Color["Yellow"] = 12] = "Yellow";
    Color[Color["Red"] = 10] = "Red"; // 10
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
console.log(Color);
// any
var carro = 'BMW';
console.log(carro);
carro = { name: 'BMW', year: 2020 };
console.log(carro);
// functions with types
function returnMyName() {
    return myname;
}
console.log(returnMyName());
function sayHello() {
    console.log('Hello');
}
sayHello();
function multiply(numA, numB) {
    return numA * numB;
}
console.log(multiply(2, 5));
// functions like types
var calc;
calc = multiply;
console.log(calc(12, 24));
// objects
var user = {
    name: 'Joao',
    age: 12
};
console.log(user);
// chalenge 1
var employee = {
    supervisors: ['Thalyson', 'John', 'Maria'],
    hitPoint: function (hour) { return hour <= 8 ? 'Normal point' : 'Out of hours'; }
};
console.log(employee.supervisors);
console.log(employee.hitPoint(8));
console.log(employee.hitPoint(9));
var employee2 = {
    supervisors: ['Maria', 'Fernanda', 'Gabriela'],
    hitPoint: function (hour) { return hour <= 8 ? 'Normal point' : 'Out of hours'; }
};
// union types
var note = 10;
console.log(note);
note = '10';
console.log(note);
// check type in runtime
var value = 30;
if (typeof value === 'number') {
    console.log('Is number');
}
else {
    console.log(typeof value);
}
// type never
function fail(message) {
    throw new Error(message);
}
var product = {
    name: 'Sabão',
    price: -1,
    validateProduct: function () {
        if (!this.name || this.name.trim().length === 0) {
            fail('Need have a name');
        }
        if (this.price <= 0) {
            fail('Price invalid');
        }
    }
};
var accountBank = {
    balance: 3456,
    deposite: function (value) {
        this.balance += value;
    }
};
var accountHolder = {
    name: 'Ana Silva',
    accountBank: accountBank,
    contacts: ['34567890', '98765432']
};
accountHolder.accountBank.deposite(3000);
console.log(accountHolder);
