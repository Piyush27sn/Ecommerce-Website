const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then( async() => {
    await Product.deleteMany();

    await Product.insertMany(
        [
            {
                name: "Nike Air Max",
                price: 2200,
                category: "Shoes",
                ratingP: 4.9,
                image: "nike-air-max.png",
                featured: true
            },
            {
                name: "Samsung S25",
                price: 60000,
                category: "Electronics",
                ratingP: 4.8,
                image: "samsung-s25.png",
                featured: true
            },
            {
                name: "Mix Fruit Juice",
                price: 120,
                category: "Drinks",
                ratingP: 4.9,
                image: "mix-fruit-juice.png",
                featured: true
            },
            {
                name: "Water Bottle 1L",
                price: 80,
                category: "Kitchen",
                ratingP: 4.8,
                image: "water-bottle.png",
                featured: true
            }
        ]
    );

    console.log("Database seeded");
    mongoose.connection.close();
    
});
