const express = require("express");
const { requireSignIn, upload } = require("../middleware");
const {
  createPartnership,
  getAllPartnership,
} = require("../controller/partnership");
const router = express.Router();

router.get("/admin/partnership", getAllPartnership);

router.post(
  "/admin/partnership",
  requireSignIn,
  upload.array("partnershipPicture"),
  createPartnership
);

module.exports = router;
