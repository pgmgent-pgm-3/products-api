const express = require("express");
const faker = require("faker");

// router initialiseren
const router = express.Router();

// producten retourneren
const getProducts = (req, res) => {
  try {
    const products = [];
    for (let i = 0; i < 20; i++) {
      const name = faker.commerce.productName();
      // random producten maken
      const product = {
        name: name,
        adjective: faker.commerce.productAdjective(),
        description: faker.commerce.productDescription(),
        material: faker.commerce.productMaterial(),
        price: faker.commerce.price(),
        image: `https://source.unsplash.com/350x500?sig=1&${faker.helpers.slugify(name)}`,
      };
      products.push(product);
    }

    // great succes
    res.status(200).json(products);
  } catch (e) {
    // error tijdelijk in console weergeven
    res.status(500).json({
      error: e.toString(),
    });
  }
};

// /api/products pad
router.get("/products", getProducts);

// functionaliteiten exporteren
module.exports = router;
