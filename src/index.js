const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/index");
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(routes);

app.set("view engine", "ejs");
app.set("views", "src/views/pages");
app.use("/static", express.static(`${__dirname}/public`));

app.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
