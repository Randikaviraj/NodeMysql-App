const router = require("express").Router();

const signupHandler = require("../db/userhandlers").signupHandler;
const loginHandler =require("../db/userhandlers").loginHandler;

router.post("/login", (req, res) => {
    loginHandler(req.body.loginname,req.body.pw)
    res.send(req.body);
});

router.post("/signup", (req, res) => {
  signupHandler(
    req.body.id,
    req.body.firstname,
    req.body.lastname,
    req.body.WorkingArea,
    req.body.tp,
    req.body.email,
    req.body.passw
  );
  res.send(req.body);
});

module.exports = router;
