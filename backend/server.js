import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import config from "./config.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react_kinmel",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}

// app.get("/api/products/:id", (req, res) => {
//   const productId = parseInt(req.params.id);
//   parseInt();
//   const product = data.products.find((x) => x._id == productId);
//   console.log(product);
//   if (product) {
//     res.send(product);
//   } else res.status(404).send({ msg: " product Not Found" });
// });

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

app.listen(5000, () => {
  console.log("Sever started at http://localhost:5000");
});
