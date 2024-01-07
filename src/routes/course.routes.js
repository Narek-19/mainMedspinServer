const { Router } = require("express");

const router = Router();

router.get("/topCourses/:lng", async (req, res) => {
  const lng = req.params.lng;
  const topCourseData = require(`../../public/topCourses/${lng}-topCourses.json`);
  console.log(lng,"lng");
  try {

    res.send(topCourseData);
  } catch (e) {
    res.status(500).json({ e });
  }
});

module.exports = router;
