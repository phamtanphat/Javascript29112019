// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = numbers.map(value => value * 2)
// console.log(newNumbers)

var a = {
    name : 'AAA',
    run : function() {
      var run2 = function(){
        console.log(this.name)
      }
      run2.bind(this)()
    }
  }
  a.run()