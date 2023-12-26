const express = require('express')
const app = express()
// const port = process.env.PORT || "5000"
const port = "https://main-medspin-server-w9t6.vercel.app"

console.log(process.env.PORT,"here");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/course", require("./src/routes/course.routes"));

app.listen(port, () => {
  console.log(`Server running ${port}`)
})