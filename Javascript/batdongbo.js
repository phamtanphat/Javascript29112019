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


// Hanoi => 25
// 12345 => City not found
// sai link => Error url

// showCity("Hanoi")
// function countotal(a , b){
//     if(!a) throw new Error("A khong du lieu")
//     if(!b) throw new Error("B khong du lieu")
//     return a + b;
// }
// try {
//     countotal(false,5)
// } catch (error) {
//     console.error(error)
// }

function tempCity(city , callback){
    const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${city}`;
    request(URL,{json : true},function(error , response , body ){
        if(error) return callback(JSON.stringify(error))
        if(body.message) return callback(JSON.stringify(body.message))
        return callback( null ,body.main.temp);
    });
}
tempCity('Hanoi', (error , temp) => {
    console.log(error || temp)
})