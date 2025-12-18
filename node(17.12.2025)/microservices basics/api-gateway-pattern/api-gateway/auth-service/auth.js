const express = require("express");
const app = express();

app.get("/auth/login", (req, res) => {
  res.json({ message: "User logged in successfully" });
});

app.listen(4001, () => {
  console.log("🔐 Auth Service running on port 4001");
});
