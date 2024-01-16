const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5050;

//products - id, name, price, imageURL
//models
const ProductModel = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    price: Number,
    imageURL: String,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//products CRUD
app.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.send({ message: "success", data: products });
  } catch (error) {
    res.send({ message: "error", data: [] });
  }
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const product = await ProductModel.findById(id);
    res.send({ message: "success", data: product });
  } catch (error) {
    res.send({message:'error',data:{}});
  }
});

app.post('/products',async(req,res)=>{
   
    const newProduct = new ProductModel({
        name: req.body.name,
        price: req.body.price,
        imageURL: req.body.imageURL
    });

    await newProduct.save();

    res.send({message: 'success', newProduct: newProduct});
});

app.delete('/products/:id',async(req,res)=>{
    const id = req.params.id;

    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    res.send({message: 'success',data: deletedProduct});
})

app.patch('/products/:id',async(req,res)=>{
    const id = req.params.id;

    const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body);

    res.send({message:'success',data: updatedProduct});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log("failed to connect to Mongo DB!");
  });
