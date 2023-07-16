const sendLogin = async () => {
  const user = document.getElementById("user")
  const pwd = document.getElementById("pwd")
  try {
    const response = await fetch("http:localhost:3500/auth", {
      method: "POST",
      headers: { "ContentType": "application/json" },
      credentials: JSON.stringify({ user, pwd })
    })
    if(!response.ok){
      return await sendRefreshToken()
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return await response.json()
  }catch(err) {
    console.log(err.stack)
    displayErr()
  }
}