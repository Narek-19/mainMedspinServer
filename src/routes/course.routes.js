const { Router } = require("express");
const fs = require('fs');
const router = Router();

router.get("/topCourses", async (req, res) => {
  try {
    console.log("here")
    fs.readFile("./public/topCourses.json", "utf8", (err, data) => {
      if (err) {
        return;
      }
      console.log(data);
      res.send(data);
    });
  } catch (e) {
    res.status(500).json({ e });
  }
});

module.exports = router;