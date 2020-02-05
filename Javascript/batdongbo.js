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

// function tempCity(city , callback){
//     const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${city}`;
//     request(URL,{json : true},function(error , response , body ){
//         if(error) return callback(JSON.stringify(error))
//         if(body.message) return callback(JSON.stringify(body.message))
//         return callback( null ,body.main.temp);
//     });
// }
// tempCity('Hanoi', (error , temp) => {
//     console.log(error || temp)
// })



// function cong(a , b , callback){
//     const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`;
//     request(URL,{json : true},function(error , response , body ){
//         if(error) return callback(JSON.stringify(error))
//         if(!body.success) return callback(JSON.stringify(body.message))
//         return callback( null ,body.message);
//     });
// }
// function tru(a , b , callback){
//     const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`;
//     request(URL,{json : true},function(error , response , body ){
//         if(error) return callback(JSON.stringify(error))
//         if(!body.success) return callback(JSON.stringify(body.message))
//         return callback( null ,body.message);
//     });
// }
// function nhan(a , b , callback){
//     const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`;
//     request(URL,{json : true},function(error , response , body ){
//         if(error) return callback(JSON.stringify(error))
//         if(!body.success) return callback(JSON.stringify(body.message))
//         return callback( null ,body.message);
//     });
// }
// function chia(a , b , callback){
//     const URL = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`;
//     request(URL,{json : true},function(error , response , body ){
//         if(error) return callback(JSON.stringify(error))
//         if(!body.success) return callback(JSON.stringify(body.message))
//         return callback( null ,body.message);
//     });
// }
// chia(10 , 5 , (error , tong) => {
//     console.log(error || tong)
// })
// Dien tich hinh chu nhat : S = a * b
// function dientich(a , b , callback){
//     nhan(a , b , (error , tich) => {
//         callback(error , tich)
//     })
// }
// Chu vi hinh chu nhat : P = (A + b ) * 2
// function chuvi(a , b , callback){
//     cong(a , b , (error , tong) => {
//         if(error) return callback(error)
//         nhan(tong , 2 , (error , tich)=>{
//             callback(error , tich)
//         })
//     })
    
// }

// chuvi(15 , 5 , (error , value) => {
//     console.log(error || value)
// })
// dientich(5, 10 , (error, value) => {
//     console.log(error || value)
// })

// Promise : es5

function cong(a , b ){
    return new Promise((res, rej)=>{
        const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`;
        request(URL,{json : true},function(error , response , body ){
            if(error) return rej(JSON.stringify(error))
            if(!body.success) return rej(JSON.stringify(body.message))
            return res(body.message);
        });
    })
}
function nhan(a , b ){
    return new Promise((res, rej)=>{
        const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`;
        request(URL,{json : true},function(error , response , body ){
            if(error) return rej(JSON.stringify(error))
            if(!body.success) return rej(JSON.stringify(body.message))
            return res(body.message);
        });
    })
}

function dientich(a , b){
    return new Promise((res , rej)=>{
        cong(a , b)
        .then(tong =>  nhan(tong , 2))
        .then(value => res(value))
        .catch(error => rej(error))
    })
}
dientich(5 ,"a")
.then(value => console.log(value))
.catch(error => console.log(error))
