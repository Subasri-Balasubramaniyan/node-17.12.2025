const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 4002;

app.get("/products", (req, res) => {
  res.json([{ id: 1, name: "Laptop" }]);
});

// Register with Service Registry
axios.post("http://localhost:5000/register", {
  name: "PRODUCT_SERVICE",
  url: `http://localhost:${PORT}`
});

app.listen(PORT, () => {
  console.log("📦 Product Service running on port 4002");
});
