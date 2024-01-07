const express = require('express')
const app = express()
const port = process.env.PORT || "5000"


app.get('/', (req, res) => {
  res.sendFile('Hello World!',{root:path.join(__dirname,"public")});
})

app.use("/api/course", require("./routes/course.routes"));

app.use(express.static('public'));
app.use('/image', express.static('image'));

app.listen(port, () => {
  console.log(`Server running ${port}`)
})