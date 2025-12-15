const express = require("express");
const cors = require("cors")

require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());


connectDB();


app.get("/", (req, res) => {
  res.send("backend is running");
});


const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);


app.use("/images", express.static("public/images"));


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
