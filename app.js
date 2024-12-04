const express = require("express");

const app = express();
const port = "7000";
app.get("/", (req, res) => {
  res.json({ name: "Shouq" });
});
app.listen(port, () => {
  console.log(`Server is now up at ${port}!`);
});
