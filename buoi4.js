// var number = 5 //(number)
// var name = "Nguyen Van Teo" //(string)
// var array = [1,2,3,4,5,6,7,8,9,10]//(object)
// var teo = {name : 'Teo', age : 10} //(object)
// var specialundifined = undefined //(undefined)
// var specialNull = null //(object)
// var specailFunction = console.log   //(function)
// console.log(typeof specailFunction)
// 13 – Array method
// const numbers = [1,2,3,4,5]
// Them phan tu vao vi tri cuoi cung
// numbers.push(6,7,8)
// Xoa phan tu vi tri cuoi cung
// numbers.pop()
// Them phan tu o vi tri dau tien
// numbers.unshift(-1,0)
// Xoa phan tu o vi tri dau tien
// numbers.shift()
// Xoa phan tu giua mang
// const numbers = [1,2,3,4,5]
// numbers.splice(2,2)
// Them phan tu giua mang
// numbers.splice(2,0,7,8,9,10)
// console.log(numbers)
// 14 – Callback tham số
// function tinhtong(a , b){
//     return a + b
// }
// function showLog(fun){
//     console.log(fun)
// }
// showLog(tinhtong(5 ,10))
// var giangvien = {
//     name : "Pham tan phat",
//     thoigianday : function(dosth){
//         console.log("Thoi gian ket thuc : 9h30")
//         dosth()
//     }
// }
// function diVenha(){
//     console.log("Di ve nha")
// }
// giangvien.thoigianday(diVenha)

/**
 * 1. Viết hàm double nhận vào 1 số bất kì,
 *  hiển thị ra số đó nhân đôi
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 */
function double(num) {
    return num * num
}

function sumAndDo(nums, callback) {
    var sum = 0
    for (var value of nums){
        sum += value
    }
    console.log(callback(sum))
}

sumAndDo([1, 2, 3], double);






