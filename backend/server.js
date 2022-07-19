const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbconnect = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dbconnect();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/users", userRoutes);

app.listen(port, console.log(`Server is listening on port ${port}`));
