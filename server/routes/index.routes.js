const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

//PHONES ROUTES
router.use("/phones", require('./phones.routes')) 

//AUTH ROUTES
router.use("/user", require('./auth.routes'))

module.exports = router;
