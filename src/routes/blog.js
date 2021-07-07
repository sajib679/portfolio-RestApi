const express = require("express");
const { requireSignIn, upload } = require("../middleware");
const { createBlog, getAllBlog } = require("../controller/blog");
const router = express.Router();

router.get("/admin/blog", getAllBlog);

router.post(
  "/admin/blog",
  requireSignIn,
  upload.array("featureImage"),
  createBlog
);

module.exports = router;
