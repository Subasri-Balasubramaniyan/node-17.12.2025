const express = require("express");
const axios = require("axios");

const app = express();

// Route to Auth Service
app.get("/auth/login", async (req, res) => {
  const response = await axios.get("http://localhost:4001/auth/login");
  res.json(response.data);
});

// Route to Product Service
app.get("/products", async (req, res) => {
  const response = await axios.get("http://localhost:4002/products");
  res.json(response.data);
});

app.listen(3000, () => {
  console.log("🚪 API Gateway running on port 3000");
});
