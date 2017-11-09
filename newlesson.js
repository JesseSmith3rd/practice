//arguments and spread
//Big Word Alert: Arguments: The parameters you pass to a function.
//javascript gives you a keyword of the same name which contains them all.

// function greet(firstname, lastname, language, ...other) {
//   language = language || 'en';
//
//   if (arguments.length === 0) {
//     console.log('Missing parameters!');
//     console.log('------------------');
//     return;
//   }
//   console.log(firstname);
//   console.log(lastname);
//   console.log(language);
//   console.log(arguments);
//   console.log('arg 0: ' + arguments[0]);
//   console.log('-------------');
// }
//
// greet();
// greet('Jesse');
// greet('Jesse', 'Smith');
// greet('Jesse', 'Smith', 'en', '111 rich st', 'new york');


//Conceptual Aside Arrays Collections of Anything. An Array is a Collections
// var arr = [1,
//             false,
//           {
//             name: 'Jesse',
//             address: '111 Main St.'
//           },
//             function(name) {
//               var greeting = 'Hello ';
//               console.log(greeting + name);
//             },
//             "Hello"
// ];
// console.log(arr);
// arr[3](arr[2].name);







//objects functions and This
//Execution context is created (Creation Phase)
//Variable enviroment , outer enviroment, this (which points to the global object which is the windows object)
// function a(){
// console.log(this);
// this.newVariable = 'hello';
// }
//
// var b = function() {
//   console.log(this);
// }
// a(); //<-- This is invoking a function
//
// console.log(newVariable);
//
// b();
//
// var c = {
//   name: 'The c object',
//   log: function() {
//     var self = this;
//     self.name = 'Updated c object';
//     console.log(self);
//
//     var setname = function(newname) {
//       self.name = newname;
//     }
//     setname('Updated again! The c object J-Man');
//     console.log(self);
//   }
// }
//
// c.log();
