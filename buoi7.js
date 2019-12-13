// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = numbers.map(value => value * 2)
// console.log(newNumbers)

// var a = {
//     name : 'AAA',
//     run : function() {
//       var run2 = function(){
//         console.log(this.name)
//       }
//       run2.bind(this)()
//     }
//   }
//   a.run()

//Template String
// const sayhi = "say hi"
// const tisayhi = `Ti ${sayhi}`
// const teosayhi = `Teo ${sayhi}`

// console.log(teosayhi)

// var a = {
//     0 : 'phat',
//     1 : '10',
//     length : 2
// }
  
//   console.log(Array.from(a))

// function showName(){
//     console.log(typeof arguments)
// }
// showName("Teo","Ti","Tun")

//default parameter
// function tinhTong(a , b = 0){
//     console.log(a + b)
// }
// tinhTong(5)

// function greeting(name,age){
//     console.log(`Hi! ${name} . I am ${age}`)
//   }
// greeting.call(null , 'Tom' , 10)

// function sum(){
//     const numbers = Array.from(arguments)
//     return numbers.reduce((sum , num )=> sum + num , 0)
//   }
// function average(){
// const x = sum.apply(null,arguments)
// return x / arguments.length
// }
// average(1,2,3,6)

// function showObjectName(name){
//     const item = {name : name};
//     console.log(item)
// }
// showObjectName("phat")

// class
// class Person {
//    constructor(name , age){
//        this.name = name;
//        this.age = age
//    } 
//    work(){
//        console.log(`${this.name} is working it `)
//    }
// }
// const teo = new Person("Teo",25)
// teo.work()

// class Animal{
//     constructor(name){
//       this.name = name
//     }
//     eat(){
//       console.log('Eating...')
//     }
//   }
//   class Bird extends Animal{
//     constructor(name , isFly){
//         super(name)
//         this.isFly = isFly
//     }
//     fly(){
//         if(this.isFly){
//             console.log('Flying...')
//         }else{
//             console.log("Not Flying")
//         }    
//     }
//   }
// const conmeo = new Animal("Meo")
// const chimse = new Bird("Chim se", true)
// console.log(chimse)

// rest
// function sum(...nums){
//     return nums.reduce((a ,b) => a + b)
// }
// sum(1,2,3,4,5)
// spread
// const a = [1,2,3]

// function sum(...numbers){
//     console.log(numbers.join())
// }
// sum(...a)
// const obj1 = {
//     a : 1,
//     b : 2,
//     c : 3,
//     d : {e : 10}
// }
// let obj2 = {...obj1}



  


  
  