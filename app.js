// //By Value (primitive types)
// var a = 3;
// var b;
//
// b = a;
// a = 2;
//
// console.log(a);
// console.log(b);
//
// //by reference (all objects(including functgions))
// var c = { greeting: 'hi'};
// var d;
//
// d = c;
// //Big word alert Mutate: To change something 'immutable' means it can't be changed.
// c.greeting = 'hello'; //mutate
// console.log(c);
// console.log(d);
//
// //by reference (even as parameters)
// function changeGreeting(obj) {
//   obj.greeting = 'Hola'; //Mutate
// }
//
// changeGreeting(d);
// console.log(c);
// console.log(d);
//
// //Both c and d will have the same variable 'hola' because they are both pointing to the same place in memory.
// // equals operator sets up new memory space (new address)
// c = { greeting: 'howdy'};
// console.log(c);
// console.log(d);
//Variable environment: Talks about where the variable live in memory.
// function b(){ <--- this operates on the third and final execution context
//   var myVar;
//   console.log(myVar);
// }
//
// function a(){ <-- this operates in the a execution context
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }
//
// var myVar = 1; <--This operates in the global execution context
// console.log(myVar);
// a();
// console.log(myVar);
//
// (The way this works is it process from the global execution context then the next stack which is a, then the third stack which is b. Since JS is synchronous
// it will process the code code from the top back down the stack and since we added another console.log(myVar) you should see another 1. So the output will be
// 1,2, undefined (which pops off the stack and run a again then print out 1))
// myvar 1 hits the global execution context first stack
// then a() myVar 2 hits execution context second stack
// then b() myVar undefined hits the third stack

//Function Invocation And The execution Stack
//Invocation: Means Running A Function In JS by using ();
//example: The first thing that happens in the process below is called the global execution context (created and code is executed)
//The second process is called execution context (create and execute) for a()
//The third process is called execution context (create and execute) for b()
//
// function a(){
//   b();
//   var c;
// }
//
// function b() {
//   var dl
// }
//
// a();
// var d;


//by value (primitives)
// var a = 3;
// var b;
//
// b = a;
// a = 2;
//
// console.log(a);
// console.log(b);

//What happens is the

// function b(){
//   console.log('Called b!');
// }
//
// b();
//
// var a = 'Hello World!';
//
// console.log(a);
// var person = new Object();
//
// person['firstname'] = 'Jesse'; //this is one way to set a value inside an Object
// person['lastname'] = 'Smith';
//
// var firstNameProperty = 'firstname';
//
// console.log(person);
// console.log(person[firstNameProperty]);


//console.log(libraryName);
// function greet(name) {
//   name = name || '<Your name here>';
//   console.log('Hello ' + name);
// }
//
// greet('Jesse');
// greet();
// var a;
// //goes to internet and looks for a value
// a = 'hi';
// if(a || a === 0){
//   console.log('Something is there.');
// }
// var a = 0;
// var b = false;
//
// if (a===b) {
//     console.log('They are equal!');
// }else{
//     console.log('Nope, not equal!');
// }
// console.log( 1 < 2 < 3);
// var a = 1,b = '2';
// console.log(a+b);
// var a = 3 + 4 * 5;
//console.log(a);
// var a = 2, b = 3, c = 4;
// a = b = c;
// console.log(a);
// console.log(b);
// console.log(c);
//long running function
// function waitThreeSeconds() {
//     var ms = 3000 + new Date().getTime();
//     while (new Date() < ms){}
//     console.log('finished function');
// }
//
// function clickHandler() {
//     console.log('click event!');
// }
//
// //listen for the click event
// document.addEventListener('click', clickHandler);
//
// waitThreeSeconds();
// console.log('finished execution');
