const express = require('express')
const app = express()
const port = "https://main-medspin-server.vercel.app"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/course", require("./src/routes/course.routes"));

app.listen(port, () => {
  console.log(`Server running ${port}`)
})