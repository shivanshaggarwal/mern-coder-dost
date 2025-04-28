const userController = require("../controller/user");
const express = require("express");
const router = express.Router();

// Create Post- CRUD
router
  .post("/", userController.createUser)
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUser)
  .put("/:id", userController.replaceUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

module.exports = router;
// oCajrGd503jeCEr0