const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ZEUS AUTO JOINER - SERVER ONLINE ⚡");
});

app.get("/status", (req, res) => {
  res.json({
    name: "ZEUS AUTO JOINER",
    status: "online",
    scanner: "not_connected"
  });
});

app.listen(PORT, () => {
  console.log(`ZEUS AUTO JOINER running on port ${PORT}`);
});
