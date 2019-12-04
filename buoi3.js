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
const rectangle = {
    width : 10,
    height : 15,
    getWidth: function (){
        return this.width
    },
    getHeight: function() {
        return this.height
    },
    getArea : function(){
        return this.width * this.height
    }
}
console.log(rectangle.getArea())








