const path = require("path");
const express = require("express");

const app = express();

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");

app.set("view engine", "ejs");
//built in middleware
app.use(express.static(staticPath));

//template engine route
app.get("/", (req, res) => {
  res.render("index", {
    name: "Sujan",
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});
