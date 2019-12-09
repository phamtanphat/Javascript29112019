// Array map
const numbers = [1,3,5,7,9]
   /* const newNumbers = numbers.map(function(value , index , array){
        if (value >= 5){
            return value * 2
        }
        return value
    });
    console.log(newNumbers) */
Array.prototype.myMap = function (fn){
    var output = []
    for(var i = 0 ; i < this.length ; i++){
        const value = fn(this[i]);
        output.push(value)
    }
    return output;
}
const newNumbers = numbers.myMap(function(value){
    return value * 2
})
console.log(newNumbers)