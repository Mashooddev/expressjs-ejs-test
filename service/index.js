var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Express with EJS" });
});

router.get("/sign-in", (req, res) => {
  res.render("login", { title: "Express with EJS" });
});

router.get("/sign-up", (req, res) => {
  res.render("signup", { title: "Express with EJS" });
});

module.exports = router;
