import express from "express";
import Product from "../models/productModel.js";
import { isAuth, isAdmin } from "../util.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});
router.get("/:id", async (req, res) => {
  const products = await Product.findOne({ _id: req.params.id });
  if (products) {
    res.send(products);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

// to show the details page  of the product
router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  console.log(productId);
  const product = await Product.findById(productId);
  if (product) {
    res.send(product);
  } else {
    res.send(404).send({ message: "Product not found" });
  }
});

router.post("/", isAuth, isAdmin, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  console.log(product);
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: "New Product Created", data: newProduct });
  }
  return res.status(500).send({ message: "Error in Creating Products." });
});

router.put("/:id", isAdmin, isAuth, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;

    product.category = req.body.category;
  }

  const updatedProduct = await product.save();
  if (updatedProduct) {
    return res
      .status(200)
      .send({ message: "Product Updated", data: updatedProduct });
  }
  return res.status(500).send({ message: "Error in Updating Products." });
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: "Product Deleted" });
  } else {
    res.send("Error in Deletion");
  }
});

export default router;
