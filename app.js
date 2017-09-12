function greet(name) {
  name = name || '<Your name here>';
  console.log('Hello ' + name);
}

greet('Jesse');
greet();











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
