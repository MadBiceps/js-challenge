// Whats the console output? And why

// Challenge 1

var foo = 1
var foobar = function () {
    console.log(foo)
    var foo = 2
}

foobar()

// Challenge 2

console.log('1' == 1)
console.log('1' === 1)
