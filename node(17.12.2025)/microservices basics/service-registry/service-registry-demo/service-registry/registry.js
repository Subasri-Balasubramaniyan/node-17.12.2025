const express = require("express");
const app = express();

app.use(express.json());

const services = {}; // in-memory registry

// Register a service
app.post("/register", (req, res) => {
  const { name, url } = req.body;
  services[name] = url;
  console.log(`✅ Registered ${name} at ${url}`);
  res.send("Service registered");
});

// Discover a service
app.get("/discover/:name", (req, res) => {
  const service = services[req.params.name];
  if (!service) {
    return res.status(404).send("Service not found");
  }
  res.json({ url: service });
});

app.listen(5000, () => {
  console.log("📘 Service Registry running on port 5000");
});
