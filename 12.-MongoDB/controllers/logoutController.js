const usersDB = {
  users: require("../model/users.json"),
  setUsers: function(data) {
    this.users = data
  }
}

const fsPromises = require("fs").promises
const path = require("path")

const handleLogout = async (req, res) => {
  //On client, also delete the accessToken
  const cookies = req.cookies
  if(!cookies?.jwt) return res.status(204)
  const refreshToken = cookies.jwt

  //Is refreshToken in db?
  const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken )
  if(!foundUser){
    res.clearCookie("jwt", { httpOnly: true })
    return res.sendStatus(403)
  } 
  
 // Delete refreshToken in db
  const othersUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken )
  const currentUser = {...foundUser, refreshToken: "" }
  usersDB.setUsers([...othersUsers, currentUser])
  await fsPromises.writeFile(
    path.join(__dirname, "../model", "users.json"),
    JSON.stringify(usersDB.users)
  )

  res.clearCookie("jwt", { httpOnly: true, secure: true }) // secure: true - only serves on hhtps
  res.sendStatus(204)
}

module.exports = { handleLogout }