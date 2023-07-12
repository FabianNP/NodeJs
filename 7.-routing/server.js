const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const { logger } = require("./middleware/logEvents")
const errorHandler = require("./middleware/errorHandler")
const PORT = process.env.PORT || 3500

// custom middleware logger
app.use(logger)

//Cross Origin Resource Sharing
const whiteList = ["https://www.google.com", "https//127.0.0.1:5500",]
const corsOptions = { 
  origin: (origin, callback) => {
    if (!origin || whiteList.indexOf(origin) !== -1){
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  optionsSuccesStatus: 200
 }
app.use(cors(corsOptions))

//built-in middleware to hanlde urlencoded data
//in other words, form data:
//"content-type: application/x-www-form-urlencoded"
app.use(express.urlencoded({ extended: false }))

//built-in middleware for json
app.use(express.json())

//serve static files
app.use(express.static(path.join(__dirname, "/public")))
app.use("/subdir", express.static(path.join(__dirname, "/public")))

// Routes
app.use("/", require("./routes/root"))
app.use("/subdir", require("./routes/subdir"))
app.use("/employees", require("./routes/api/employees"))


// app.use("/") (does'nt accept regex)
app.all("*", (req, res) => {
  res.status(404)
  if(req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"))
  } else if(req.accepts("html")) {
    res.json({ error: "404 Not Found" })
  } else {
    res.type("txt").send( "4040 Not Found" )
  }
})
// app.get("/*", (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
// })

// Error custom handler
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}` ))