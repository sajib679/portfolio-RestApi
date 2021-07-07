const express = require("express");
const { requireSignIn, upload } = require("../middleware");
const { createService, getAllService } = require("../controller/service");
const router = express.Router();

router.get("/admin/service", getAllService);

router.post(
  "/admin/service",
  requireSignIn,
  upload.array("servicePictures"),
  createService
);

module.exports = router;
