const express = require("express");
const router = express.Router();
const {submitFormController,signup}  = require("../Controller/Form");

router.post("/form", submitFormController);
router.post("/signup", signup);

module.exports = router;
