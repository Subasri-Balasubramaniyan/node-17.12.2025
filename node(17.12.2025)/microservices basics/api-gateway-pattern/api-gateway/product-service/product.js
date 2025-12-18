const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
  ]);
});

app.listen(4002, () => {
  console.log("📦 Product Service running on port 4002");
});
