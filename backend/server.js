const express = require("express");
const cors = require("cors")
require("dotenv").config();
const connectDB = require("./config/db");
const path = require("path");


const app = express();
app.use(cors());
app.use(express.json());


connectDB();


app.get("/", (req, res) => {
  res.send("backend is running");
});


const productRoutes = require("./routes/productRoutes");
// const authRoutes = require("./routes/auth.js");

app.use("/api/products", productRoutes);
app.use("/images", express.static("public/images"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/auth", require("./routes/auth"));


app.use("/images", express.static(path.join(__dirname, "public/images")));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
