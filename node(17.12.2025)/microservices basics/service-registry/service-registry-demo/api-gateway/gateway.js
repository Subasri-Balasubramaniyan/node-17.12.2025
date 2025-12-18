const express = require("express");
const axios = require("axios");

const app = express();

// Discover & route to Auth Service
app.get("/auth/login", async (req, res) => {
  const { data } = await axios.get(
    "http://localhost:5000/discover/AUTH_SERVICE"
  );

  const response = await axios.get(`${data.url}/auth/login`);
  res.json(response.data);
});

// Discover & route to Product Service
app.get("/products", async (req, res) => {
  const { data } = await axios.get(
    "http://localhost:5000/discover/PRODUCT_SERVICE"
  );

  const response = await axios.get(`${data.url}/products`);
  res.json(response.data);
});

app.listen(3000, () => {
  console.log("🚪 API Gateway running on port 3000");
});
