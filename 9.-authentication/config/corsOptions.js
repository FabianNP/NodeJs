
//Cross Origin Resource Sharing
  const whiteList = [
    "https://www.google.com", 
    "https//127.0.0.1:5500"
  ]

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

module.exports = corsOptions