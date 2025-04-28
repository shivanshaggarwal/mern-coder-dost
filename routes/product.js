const productController = require("../controller/product");
const express = require("express");
const router = express.Router();

// Create Post- CRUD
router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

module.exports = router;
