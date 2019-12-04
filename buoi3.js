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
 * @param {Number} w Chiều rộng
 * @param {Number} h Chiều cao
 * @param {Number} l Chiều dài
 * @returns {Number} Diện tích
 */
function getBoxVolume(w, h, l) {
  // Viết code ở đây
  return w * h * l
}
console.log(getBoxVolume(10, 20, 30)); // 6000
console.log(getBoxVolume(4, 5, 6)); // 120