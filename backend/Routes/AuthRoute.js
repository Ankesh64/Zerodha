const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);       // POST /signup → runs Signup function
router.post("/login", Login);         // POST /login  → runs Login function
router.post("/", userVerification);   // POST /       → checks if token is valid

module.exports = router;