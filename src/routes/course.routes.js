const { Router } = require("express");
const fs = require("fs");
const topCourseData = require("../../public/topCourses.json");
const router = Router();

router.get("/topCourses", async (req, res) => {
  try {
    // fs.readFile("./public/topCourses.json", "utf8", (err, data) => {
    //   if (err) {
    //     res.send("Cant take data");
    //     return;
    //   }
    //   console.log(data);
     
    // });
    res.send(topCourseData);
  } catch (e) {
    res.status(500).json({ e });
  }
});

module.exports = router;
