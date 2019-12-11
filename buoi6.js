// built-in function
// 5 - 10
// const number = (Math.random() * 5 ) + 5 
// Ham lam tron 
// const number1 = 1.5
// console.log(Math.round(number1))
//Lam tron xuong
// console.log(Math.floor(number1))
//Lam tron len
// console.log(Math.ceil(1.01))
// var a = 9
// var b = 6
// Math.sqrt = tinh can bac 2
// Math.abs  = tri tuyet doi
// Math.max = tim so lon nhat
// console.log(Math.sqrt(a))

//Handle Object
// const teo = {
//     name : 'Nguyen Van Teo',
//     age : 5
// }

// console.log(Object.keys(teo).length)

//Prototype :
// function Person(name , age){
//     this.name = name
//     this.age = age
//     this.showName = function(){
//         console.log(this.name)
//     }
// }
// Person.prototype.showAge = function(){
//     console.log(this.age)
// }
// const teo = new Person("Nguyen Van Teo",5)
// const ti = new Person("Nguyen Van Teo",5)
// // teo.showAge()
// // ti.showAge()
// console.log(teo.showAge == ti.showAge)

// Toan tu 3 ngoi
// var a = 5
// var b = 10
// console.log(a > b ? "A lon hon B" : "A nho hon B")

// Functional scope
//block scope : {}
// var a = 5;
// function show(){
//     var a = 2
//     console.log(a)
// }
// show()
// console.log(a)
// var a = 1;

// function foo() {
//   var a = 2;
//   return a;
// }

// function bar() {
//   a = 2;
//   return a;
// }

// foo();
// console.log(a); // Kết quả?
// bar();
// console.log(a); // Kết quả?
// var a = 1;

// var b = {
//   a: 2,
//   foo: function() {
//     console.log(a);
//   }
// };

// b.foo();

// var fooCopy = b.foo;
// fooCopy()

// hoisting
// console.log(a)
// var a 

// khi dung a .No se lap tu khoi tao ra a cho viec su dung
// function show(){
//     console.log(a)
//     var a = 5
// }
// su dung let , const : tranh tinh trang redecle
// hoisting : let , const tranh tinh trang nay
// const a = 5
// a = 10
// console.log(a)
















