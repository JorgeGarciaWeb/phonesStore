const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

//AUTH ROUTES
router.use("/auth", require('./auth.routes'))

//PHONES ROUTES
router.use("/phones", require('./phones.routes')) 


module.exports = router;
