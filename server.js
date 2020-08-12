const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const pool = require("./db");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/api/colors", async (req, res) => {
  const query = await pool.query("SELECT * FROM colors");
  var rows = query.rows;
  var colors = {};
  for (var i = 0; i < rows.length; i++) {
    var name = rows[i].name;
    colors[name] = {
      hex: rows[i].hex,
      mixOf: rows[i].mixof,
    };
  }

  res.json(colors);
});

app.get("/api/portraits", async (req, res) => {
  const query = await pool.query("SELECT * FROM portraits");
  var rows = query.rows;
  var portraits = [];
  for (var i = 0; i < rows.length; i++) portraits.push(rows[i]);

  res.json(portraits);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => `Server running on port ${PORT}`);
