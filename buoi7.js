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

function showName(){
    console.log(typeof arguments)
}
showName("Teo","Ti","Tun")