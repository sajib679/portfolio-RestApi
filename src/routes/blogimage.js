const express = require("express");
const { requireSignIn, upload } = require("../middleware");
const { createImage, getAllImage } = require("../controller/blogimage");
const router = express.Router();

router.get("/admin/uploadImage", getAllImage);

router.post(
  "/admin/uploadImage",
  requireSignIn,
  upload.single("blogImage"),
  createImage
);

module.exports = router;
