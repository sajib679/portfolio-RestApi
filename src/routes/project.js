const express = require("express");
const { requireSignIn, upload } = require("../middleware");
const { createProject, getAllProject } = require("../controller/project");
const router = express.Router();

router.get("/admin/project", getAllProject);

router.post(
  "/admin/project",
  requireSignIn,
  upload.array("projectPictures"),
  createProject
);

module.exports = router;
