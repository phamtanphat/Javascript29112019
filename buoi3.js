// 8 - function
// style : Camelcase
// function showName (name){
//     console.log(name)
//     return;
// }
// console.log(showName("Pham Tan Phat"))
// Bài tập: Viết hàm tính thể tích khối hộp.
// Nhận vào các tham số như dưới, trả về thể tích của khối hộp.

/**
 * Tính thể tích khối hộp
 * https://www.wikihow.com/Calculate-Volume-of-a-Box
//  * @param {Number} w Chiều rộng
//  * @param {Number} h Chiều cao
//  * @param {Number} l Chiều dài
//  * @returns {Number} Diện tích
//  */
// function getBoxVolume(w, h, l) {
//   // Viết code ở đây
//   return w * h * l
// }
// console.log(getBoxVolume(10, 20, 30)); // 6000
// console.log(getBoxVolume(4, 5, 6)); // 120
// 9 : Object method
// const teo = {
//     name : 'Nguyen Van Teo',
//     age : 5,
//     speakLanguage : function(){
//         console.log(this.name)
//     } 
// }
// teo.speakLanguage()
/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */
// const rectangle = {
//     width : 10,
//     height : 15,
//     getWidth: function (){
//         return this.width
//     },
//     getHeight: function() {
//         return this.height
//     },
//     getArea : function(){
//         return this.width * this.height
//     }
// }
// // goi y code : ctrl + space
// console.log(rectangle.getArea())
// 10 : Cac phep tinh so sanh
// var a = 5;
// var b = 6;
//  6 gia la false : 0 , null , false 
//  undefined , NaN , ''
// if(NaN){
//     console.log("Nhay vao if")
// }else{
//     console.log("Nhay vao else")
// }
// console.log((a,b)) => bieu thuc dau phay tinh gia
// tri ben trai va in ra gia tri ben phai
// gia null la 0 (VD : a + null => 5 + 0 = 5)
// mot gia tri cong cho chuoi => chuoi (VD : a + '6' => 56)
// console.log(a + '6')

// so sanh su dung == thi so sanh ve gia tri
// so sanh su dung === thi so sanh ve gia tri va kieu du lieu

// Kieu nguyen thuy
// var a = '1999'
// var b = '2'
// if(a > b){
//     console.log("A lon hon B")
// }else{
//     console.log("B lon hon A")
// }

//Kieu object : khong su dung so sanh cho object
// No se so sanh vung nho voi nhau
// const teo = {name : 5}
// const ti = {name : 5}

// if(teo === ti){
//     console.log(" Teo lon hon ti")
// }else{
//     console.log("Teo be hon ti")
// }

// 11 : Vong lap
// var arrayNames = ['Teo','Ti','Tun','Hoa','Tuan']
// for (var i = 0 ; i < arrayNames.length ;i++){
//     if(arrayNames[i] === 'Teo' ){
//        continue
//     }
//     console.log(arrayNames[i])
// }
// for in , for of
// for (var value of arrayNames ){
//     console.log(value)
// }
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

// function multiply(arr) {
//     var ketqua = 1
//     for(var value of arr){
//         ketqua *= value 
//     }
//     return ketqua
// }

// console.log(multiply([2, 3, 4])); // expect: 24

// var arrayNames = ['Teo','Ti','Tun','Hoa','Tuan']

// for (var key in arrayNames){
//     console.log(key)
// }
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10,
//     address : "Quan 10"
// }
// for (var key in teo){
//     console.log(key)
// }

/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */
var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  function getkey(object){
  }
  
  getkey(apartment)
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
  







