const express = require('express')
const app = express()
const port = process.env.PORT || "5000"


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use("/api/course", require("./routes/course.routes"));

app.use(express.static('public'));
app.use('/image', express.static('image'));

app.listen(port, () => {
  console.log(`Server running ${port}`)
})