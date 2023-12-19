const express = require("express");
const packageController = require("../controllers/packageController");
const joi_validator = require("../joi-validator/joi-package-validations");

const router = express.Router();

// add new channel
router.post(
  "/create-package",
  joi_validator.validateCreatePackage,
  packageController.createPackage
);

module.exports = router;
