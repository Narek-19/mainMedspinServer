const { Router } = require("express");

const router = Router();

router.get("/current/:img", async (req, res) => {
  try {
    const img = req.params.img;
    const image = require(`../../image/${img}`);
    console.log(image,"image");
    res.send(image);
  } catch (e) {
    res.status(500).json({ e });
  }
});

module.exports = router;
