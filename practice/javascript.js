a = 2;
b = 1;

if(a>b){
  let c = true;
}

// Scope:
// Where a variable is available in your code.
// And if its truly the same variable or a new copy.


//Understanding the scope chain
//
// function a() {
//   function b() {
//     console.log(myVar);
//   }
//
//   var myVar = 2;
//   b();
// }
//
// var myVar = 1;
// a();

//a = 42 / 2;
//a = String(a);
//a = a + ""; //<--this is doing the same as converting a number to a string.
//b = "42"[0];
//b = Number(b);
//console.log(a, b);
//numbers are what we do math with and strings demonstrate characters. So, if you want to know the first character in the string you would do
//"42"[0] and this will output '4'.

//Back to variables
/*function foo() {} //This is a function declaration
var bar = function() {} //
var bar = function baz() {}

var a = 42;

function foo ()
{
  a = 10;
  bar(a / 2);
}

foo();
*/
/*
"falsy": // falsy is defined as the following 0 -0 Nan "" false null undefined
"truthy": //is anything not on the falsy list.
var a = 10;

if (a) {
  a = a * 2;
}
*/
//void 42; will result to undefined everytime;
//loop forms
/*
for
if (a) { .. }
while (a) { .. }
*/
//the first part if the initialization expression, the second part if called the conditional clause(or test clause), and the last part is called the update clause.
/*for (i = 5; i < 10;  i++) {
  console.log(i);
}

a = 5;
while (true) {
  if(a >= 10) {
    break;
  }
  console.log(a);
  a = a + 1;
}
*/

/* toFixed allow you to get the set decimal amount you want see below
var a = 3.5;
undefined
console.log(a);
VM758:1 3.5
undefined
console.log(a.toFixed(2));
VM815:1 3.50
undefined
*/
/*
function j(){
  a = 10;
  if(a <= 10){
    console.log('It is brah');
  }
  else{
    console.log('nah my G');
  }
}

j();
*/

/*the print out will be 23 and 101. Now, this is what happened. outside the block a multiplied and added the numbers. So, 23 * 2 = 46 + 3 is 49 times 2 equal 98
plus 3 is 101
function foo(){
  a = a * 2;
  a = a + 3;
}
var a = 10;
foo();
console.log(a);
foo();
foo();
console.log(a);
*/
/*
function foo(b){
  a = a * 2;
  a = a + b;
}
a = 10;
foo(5);
foo(25);
foo(100);
console.log(a);
*/
// a = 0;
// b = 1;

/*function cal(){

  a = 9;
  c = a + b;
}
cal();
console.log(c);
*/
/*for(i = 0; i <= 10; i++){
  if(i < 10){
    console.log('Your phone is more than 200.00');
  }
  else{
    console.log("Your phone is dope but cheap money. Do not worry, you're going to be a great software engineer. Do not ever stop beliving in yourself");
  }
}
*/

// //Excercise:
// const SPENDING_THRESHOLD = 200;
// const TAX_RATE = 0.08;
// const PHONE_PRICE = 99.99;
// const ACCESSORY_PRICE = 9.99;
//
// var bank_balance = 303.91;
// var amount = 0;
//
// function calculateTax(amount) {
//   return amount * TAX_RATE;
// }
//
// function formatAmount(amount) {
//   return "$" + amount.toFixed(2);
// }
//
// //keep buying phones while you still have money
// while(amount < bank_balance){
//   //buy a new phone!
//   amount = amount = PHONE_PRICE;
//
//   //can we afford the accessory?
//   if(amount < SPENDING_THRESHOLD) {
//     amount = amount + ACCESSORY_PRICE;
//   }
// }
//
// //dont forget to pay the government too
// amount = amount + calculateTax( amount );
//
// console.log(
//   "Your purchase: " = formatAmount( amount )
// );
// //Your purchase: $334.76
// // can you actually afford this purchase?
// if (amount > bank_balance) {
//   console.log(
//     "You can get it, but do not need to at this time. You have enough phones and money big dog!"
//   );
// }
