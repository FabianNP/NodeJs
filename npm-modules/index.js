// ----------> NPM <--------------

// const { format } = require("date-fns")
// const { v4: uuid } = require("uuid")

// console.log(format(new Date(), "yyyyMMdd\thh:mm:ss"))

// console.log(uuid())


// ---------------> EVENT EMMITER <---------------

const logEvents = require("./logEvents")

const EventEmitter = require("events")

class MyEmitter extends EventEmitter {}

// initialize object
const myEmitter = new MyEmitter()

// add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg))

setTimeout(() => {
  //Emit event
  myEmitter.emit("log", "log event emitted!")
}, 3000)