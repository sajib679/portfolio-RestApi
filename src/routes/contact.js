const express = require("express");
const { createContact, getAllContact } = require("../controller/contact");
const router = express.Router();

router.get("/admin/contact", getAllContact);

router.post("/admin/contact", createContact);

module.exports = router;
