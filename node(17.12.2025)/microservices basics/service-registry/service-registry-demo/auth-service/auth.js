const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 4001;

app.get("/auth/login", (req, res) => {
  res.json({ message: "Auth service response" });
});

// Safe registration
async function registerService() {
  try {
    await axios.post("http://localhost:5000/register", {
      name: "AUTH_SERVICE",
      url: `http://localhost:${PORT}`,
    });
    console.log("✅ Auth Service registered successfully");
  } catch (err) {
    console.log("❌ Service Registry not available. Retrying later...");
  }
}

app.listen(PORT, () => {
  console.log("🔐 Auth Service running on port 4001");
  registerService();
});
