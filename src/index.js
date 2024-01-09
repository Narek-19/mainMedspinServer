const express = require('express')
var path = require('path');
const app = express()
const port = process.env.PORT || "5000"


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use("/api/course", require("./routes/course.routes"));

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Server running ${port}`)
})