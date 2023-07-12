// const fsPromises = require("fs").promises
const { readFile, writeFile, appendFile, rename, unlink } = require("fs/promises")
// const fs = require("fs")
const path = require("path")

const fileOps = async () => {
  try {
    // const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"))
    const data = await readFile(path.join(__dirname, "files", "starter.txt"), "utf8")
    console.log(data)
    await unlink(path.join(__dirname, "files", "starter.txt"))

    await writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data)
    await appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you.")
    await rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseWriteRename.txt"))
    const newData = await readFile(path.join(__dirname, "files", "promiseWriteRename.txt"), "utf8")
    console.log(newData)
    
  }catch(err){
    console.log(err)
  }
}

fileOps()

// ---------> With CallBacks <----------- //


// fs.readFile("./files/home.txt", { encoding: "utf8" },  (err, data) => {
// fs.readFile("./files/starter.txt", { encoding: "utf8" },  (err, data) => {
// fs.readFile(path.join(__dirname, "files", "starter.txt"), { encoding: "utf8" },  (err, data) => {
//   if(err) throw err
//   // console.log(data.toString())
//   console.log(data)
// })

// Console first...
// console.log("hello...")

// fs.writeFile(path.join(__dirname, "files", "reply.txt"),  "Nice to meet you.", (err) => {
//   if(err) throw err
//   console.log("Write complete")

//   fs.appendFile(path.join(__dirname, "files", "reply.txt"),  "\n\nYes it is", (err) => {
//     if(err) throw err
//     console.log("Append complete")

//     fs.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt"), (err) => {
//       if(err) throw err;
//       console.log("rename complete")
//     })
//   })
// })




// exit on uncaught errors 
process.on("uncaughtException", err => {
  console.error(`There was an uncaught error: ${err}`)
  process.exit(1)
})