const { cafeController } = require("../controllers/cafe.controller");
const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const router = Router();

router.get("/", cafeController.getAllCafe);
router.post("/signup", cafeController.signUpCafe);
// router.post("/signin", cafeController.signIn);
router.delete("/:id", authMiddleware, cafeController.deleteCafe);

module.exports = router;
