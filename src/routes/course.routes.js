const { Router } = require("express");

const router = Router();

router.get("/topCourses/:lng", async (req, res) => {
  const lng = req.params.lng;
  const topCourseData = require(`../../public/topCourses/${lng}-topCourses.json`);
  try {
    res.send(topCourseData);
  } catch (e) {
    res.status(500).json({ e });
  }
});

router.get("/currentCourse/:id", async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = require(`../../public/courseId/${courseId}-course.json`);
    res.send(course);
  } catch (e) {
    res.status(500).json({ e });
  }
});

module.exports = router;
