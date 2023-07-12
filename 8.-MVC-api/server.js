const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const { logger } = require("./middleware/logEvents")
const errorHandler = require("./middleware/errorHandler")
const PORT = process.env.PORT || 3500

// custom middleware logger
app.use(logger)

//Cross Origin Resource Sharing
app.use(cors(corsOptions))

//built-in middleware to hanlde urlencoded data
//in other words, form data:
//"content-type: application/x-www-form-urlencoded"
app.use(express.urlencoded({ extended: false }))

//built-in middleware for json
app.use(express.json())

//serve static files
app.use(express.static(path.join(__dirname, "/public")))

// Routes
app.use("/", require("./routes/root"))
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