let firstName = "Derek"
let lastName = "Bacy"
let favDrink = "Budweiser"
let favNumber = 16;
let age = 25
let year_Of_Truck = 19
console.log("My age is "+ age + ". The age of my truck is " + year_Of_Truck)
console.log("My name is " + firstName + lastName +" and i like to drink " + favDrink)
console.log(favNumber + age + year_Of_Truck)
console.log("My name is " + firstName + lastName +" and i like to drink " + favDrink +
    "My age is "+ age + ". The age of my truck is " + year_Of_Truck + " My favorite number is " + favNumber)
favNumber +=7
console.log(favNumber)
favNumber *=13
console.log(favNumber)
favNumber /=6
console.log(favNumber)

let isHired = true;
let hasBlueEyes = false;
let attendingSchool = true;
// + : adds two numbers (or strings together)
// - : subtracts two numbers
// * : multiplies two numbers
// / : divides two numbers
// % : modulus - returns the remainder of the first number divided by the second

x = 10;
y = 20;
z = 30;
x = y + z;     //  x is now 50
y = y - 10;    //  y is now 10
z = z / 10;    //  z is now 3
//+=, *=, -=, /=, %=  :  add (multiply, subtract, divide, mod) the number and assign back to it self
age += 10;       // add 10 to the persons age
salary *= 1.15;  // give employee a 15% raise

//Increment (or decrement) the number by 1

if (today == birthDay) {
    age++;
}

if (minute == 59 && seconds == 59) {
    minute = 0;
    seconds = 0;
    hour++
}

speed--;      // slow down the car by one mile per hour
    //Note: If the -- or ++ is BEFORE the variable then the variable is changed FIRST then used in any calculation.

   // if the -- or ++ is AFTER the variable then the variable is USED FIRST then the variable is changed.
z = 100;
a = z--;     // a is set to 100 then z changes to 99
b = z;       // b is set to 99;
c = --z;     // c is set to 98


let name2 = "Derek"
let city = "Grand Prairie"
let age2 = 25
let birthday = "sept. 20"

console.log(name2,city,age2,birthday)
let age_To_Days = age2 *=365
console.log(age_To_Days)
let seconds_In_Year = 3.154e+7
let seconds_Alive = seconds_In_Year *= 25
console.log(seconds_Alive)
