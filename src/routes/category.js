const express = require("express");
const { requireSignIn, upload } = require("../middleware");
const { createCategory, getAllCategory } = require("../controller/category");
const router = express.Router();

router.get("/admin/category", getAllCategory);

router.post(
  "/admin/category",
  requireSignIn,
  upload.array("categoryPictures"),
  createCategory
);

module.exports = router;
