const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const rootDir = require("./util/util")

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'client', 'error.html'))
  // res.status(404).sendFile(path.join(__dirname, './', 'client', 'error.html'))
});

app.listen(3000);
