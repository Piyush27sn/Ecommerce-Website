import apple from "../../assets/images/HomeSLiderProducts/apple.png";

import one from "../../assets/images/details/earphone1.webp";
import two from "../../assets/images/details/earphone2.webp";
import three from "../../assets/images/details/earphone3.jpg";
import four from "../../assets/images/details/earphone4.jpg";

import britanniacake from "../../assets/images/HomeSLiderProducts/britanniacake.webp";
import browntea from "../../assets/images/HomeSLiderProducts/browntea.webp";
import buffalomilk from "../../assets/images/HomeSLiderProducts/buffalomilk.jpg";
import catfood from "../../assets/images/HomeSLiderProducts/catfood.webp";
import chocolatecake from "../../assets/images/HomeSLiderProducts/chocolatecake.jpg";
import cowmilk from "../../assets/images/HomeSLiderProducts/cowmilk.webp";
import dogfood from "../../assets/images/HomeSLiderProducts/dogfood.webp";
import greentea from "../../assets/images/HomeSLiderProducts/greentea.jpg";
import icetea from "../../assets/images/HomeSLiderProducts/icetea.webp";
import kiwi from "../../assets/images/HomeSLiderProducts/kiwi.webp";
import nescafecoffee from "../../assets/images/HomeSLiderProducts/nescafecoffee.jpeg";
import peach from "../../assets/images/HomeSLiderProducts/peach.avif";
import potato from "../../assets/images/HomeSLiderProducts/potato.jpg";
import spinach from "../../assets/images/HomeSLiderProducts/spinach.jpg";
import orange from "../../assets/images/HomeSLiderProducts/orange.jpg";

import barcode from "../../assets/images/HomeSLiderProducts/barcode.avif";
import fssai from "../../assets/images/HomeSLiderProducts/fssai.jpg";

export const HomeSliderProducts = [
  {
    id: 1,
    name: "Chocolate Cake",
    category: "Cake & Milk",
    quantity: 15,
    price: 299,
    image: chocolatecake,
    images: [chocolatecake, barcode, fssai],
    ratingP: 4.8,
    description:
      "A chocolate cake is a rich, moist dessert made with chocolate or cocoa powder, flour, and sugar, often featuring layers of cake and cream.",
    vendor: "A1 Bakeries, Delhi",
    addInfo: "Its good",
  },
  {
    id: 2,
    name: "Wired Earphones",
    category: "Electronics",
    quantity: 5,
    price: 2499,
    image: four,
    images: [one, two, three, four],
    ratingP: 4.4,
    description:
      "The Apple Earphones are wired earphones designed for convenience and style. They boast 9.0mm bass drivers for enhanced audio, delivering rich, deep bass tones. A three-button remote with an integrated microphone provides control over music playback, video controls, and call management.",
    vendor: "B",
    addInfo: [
      "Noise Control: None ",
      "Headphone Jack: 3.5mm ",
      "Model Name: Easphones 1 ",
      "Item Weight: 30grams ",
      "Net Quantity: 1 ",
      "Product Dimensions: 3.6 x 3.6 x 2.2 cm ",
    ],
  },
  {
    id: 3,
    name: "Red Apple",
    category: "Vegetables & Fruits",
    quantity: 24,
    price: 99,
    image: apple,
    images: [apple, barcode, fssai],
    ratingP: 4.6,
    description:
      " It is a nutritious choice, rich in fiber, vitamin C, and antioxidants, which can contribute to a healthy diet and may help lower cholesterol and blood sugar. Apples can be eaten raw for a crisp snack or used in cooking for dishes like pies and sauces.",
    vendor: "Daily Fresh Farms, Harayana",
  },
  {
    id: 4,
    name: "Green Tea",
    category: "Coffee & Tea",
    quantity: 9,
    price: 199,
    image: greentea,
    images: [greentea, barcode, fssai],
    ratingP: 4.0,
    description:
      "A green tea product description should highlight its origin (leaves from Camellia sinensis), minimal processing (not oxidized), and flavor profile (grassy, earthy, vegetal, or floral).",
    vendor: "Tea Valley, Assam",
  },
  {
    id: 5,
    name: "Peach",
    category: "Vegetables & Fruits",
    quantity: 22,
    price: 79,
    image: peach,
    images: [peach, barcode, fssai],
    ratingP: 4.2,
    description: "product description",
    vendor: "Daily Fresh Farms, Harayana",
  },
  {
    id: 6,
    name: "Britannia Cake",
    category: "Cake & Milk",
    quantity: 29,
    price: 79,
    image: britanniacake,
    images: [britanniacake, barcode, fssai],
    ratingP: 3.9,
    description: "product description",
    vendor: "A1 Bakeries, Delhi",
  },
  {
    id: 7,
    name: "Ice Tea",
    category: "Coffee & Tea",
    quantity: 15,
    price: 39,
    image: icetea,
    images: [icetea, barcode, fssai],
    ratingP: 3.7,
    description: "product description",
    vendor: "Tea Valley, Assam",
  },
  {
    id: 8,
    name: "Orange",
    category: "Vegetables & Fruits",
    quantity: 39,
    price: 89,
    image: orange,
    images: [orange, barcode, fssai],
    ratingP: 4.1,
    description: "product description",
    vendor: "Daily Fresh Farms, Harayana",
  },
  {
    id: 9,
    name: "Buffalo Milk",
    category: "Cake & Milk",
    quantity: 49,
    price: 99,
    image: buffalomilk,
    images: [buffalomilk],
    ratingP: 4.3,
    description: "product description",
    vendor: "D",
  },
  {
    id: 10,
    name: "Cow Milk",
    category: "Cake & Milk",
    quantity: 23,
    price: 79,
    image: cowmilk,
    images: [cowmilk],
    ratingP: 4.8,
    description: "product description",
    vendor: "D",
  },
  {
    id: 11,
    name: "Cat Food",
    category: "Pet Food",
    quantity: 9,
    price: 399,
    image: catfood,
    images: [catfood],
    ratingP: 3.4,
    description: "product description",
    vendor: "Pet Foods India, Gujarat",
  },
  {
    id: 12,
    name: "Dog Food",
    category: "Pet Food",
    quantity: 18,
    price: 499,
    image: dogfood,
    images: [dogfood],
    ratingP: 3.8,
    description: "product description",
    vendor: "Pet Foods India, Gujarat",
  },
  {
    id: 13,
    name: "Potatoes",
    category: "Vegetables & Fruits",
    quantity: 89,
    price: 19,
    image: potato,
    images: [potato, barcode, fssai],
    ratingP: 4.1,
    description: "product description",
    vendor: "Daily Fresh Farms, Harayana",
  },
  {
    id: 14,
    name: "Brown Tea",
    category: "Coffee & Tea",
    quantity: 4,
    price: 25,
    image: browntea,
    images: [browntea, barcode, fssai],
    ratingP: 4.5,
    description: "product description",
    vendor: "Tea Valley, Assam",
  },
  {
    id: 15,
    name: "Nescafe Coffee",
    category: "Coffee & Tea",
    quantity: 31,
    price: 10,
    image: nescafecoffee,
    images: [nescafecoffee, barcode, fssai],
    ratingP: 4.4,
    description: "product description",
    vendor: "Tea Valley, Assam",
  },
  {
    id: 16,
    name: "Spinach",
    category: "Vegetables & Fruits",
    quantity: 14,
    price: 49,
    image: spinach,
    images: [spinach, barcode, fssai],
    ratingP: 4.1,
    description: "product description",
    vendor: "Daily Fresh Farms, Harayana",
  },
  {
    id: 17,
    name: "Organic Kiwi",
    category: "Vegetables & Fruits",
    quantity: 8,
    price: 49,
    image: kiwi,
    images: [kiwi, kiwi, barcode, fssai],
    ratingP: 4.4,
    description: "product description",
    vendor: "Daily Fresh Farms, Harayana",
  },
];
