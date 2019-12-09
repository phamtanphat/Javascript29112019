// Array map
// const numbers = [1,3,5,7,9]
   /* const newNumbers = numbers.map(function(value , index , array){
        if (value >= 5){
            return value * 2
        }
        return value
    });
    console.log(newNumbers) */
// Array.prototype.myMap = function (fn){
//     var output = []
//     for(var i = 0 ; i < this.length ; i++){
//         const value = fn(this[i]);
//         output.push(value)
//     }
//     return output;
// }
// const newNumbers = numbers.myMap(function(value){
//     return value * 2
// })
// console.log(newNumbers)

// function namesOnly(arr) {
//     const newArr = arr.map(function(object){
//         return object.name
//     })
//     return newArr;
// }
// console.log(namesOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]))
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// const names = ['Teo','Ti','Tun','Toan','Thai']

// const newNames = names.filter(function(value){
//   if(value === 'Teo') return false
//   return true
// })
// console.log(newNames)

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
// function findFirstEvenNumber(array) {
// 	return array.find(function(item){
//         if(item % 2 === 0) return true
//         return false
//     })
// }

// console.log(findFirstEvenNumber([1,1,1,1,1]))

// Ham reduce
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const sum = numbers.reduce(function(total , currentValue){
//     return total + currentValue
// },0)
// console.log(sum)
const arrayUsers =  [
    {id : 1 , name : 'Teo' ,age : 5},
    {id : 2, name : 'Ti' ,age : 3},
    {id : 3 , name : 'Hoa' ,age : 6},
    {id : 4 , name : 'Toan' ,age : 7},
    {id : 5 , name : 'Phong' ,age : 10},
]
// const sumAge = arrayUsers.reduce(function(totalAge , currentAge){
//     return totalAge + currentAge.age
// },0)

const sumAge = arrayUsers.map(function(user){
    return user.age
}).reduce(function(total , currentAge){
    return total + currentAge
})

console.log(sumAge)
