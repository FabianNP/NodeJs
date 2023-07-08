// 1) Node runs on a server - not in a browser 
// 2) The console is the terminal window 
console.log("Hello World")
// 3) global object instead of window object 
console.log(global)
// 4) Has Common Core modules that we will explore
// 5) Common JS modules instead od ES6 modules 

const os = require("os")
const path = require("path")

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
//Contains all the information of path in an object
console.log(path.parse(__filename))


// const math = require("math")
const { add, substract, multiply, divide } = require("math")

console.log(add(2, 3))
console.log(substract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

