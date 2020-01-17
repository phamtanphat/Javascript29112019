// let a = 0
// function showDelay(callback){
//     setInterval(() => {
//         a += 1;
//         console.log("Hello")
//         callback(a)
//     },1000)
// }

// showDelay( number => {
//     console.log(number);
// })

// Connection api
var request = require('request');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=Hanoi';

// request(URL,{json : true},function(error , response , body ){
//     if(error) throw new Error("Loi")
//     return console.log(body.main.temp);
// });


function countotal(a , b){
    if(!a) throw new Error("A khong du lieu")
    if(!b) throw new Error("B khong du lieu")
    return a + b;
}
try {
    countotal(false,5)
} catch (error) {
    console.log(error)
}
