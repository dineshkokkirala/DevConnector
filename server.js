const express = require("express");
const mongoose = require("mongoose");

const db = require("./config/key").mongoURI;

//connect DB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const app = express();

//middleware
app.use(express.json());

app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.get("/", (req, res) => res.send("Hello dev Connectors!!!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));
