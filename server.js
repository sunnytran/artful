const express = require('express');
const fs = require('fs');
const path = require('path')

const app = express();
const pool = require('./db');

app.get('/api/colors', async (req, res) => {
  const query = await pool.query("SELECT * FROM colors")
  var rows = query.rows;
  var colors = {}
  for (var i = 0; i < rows.length; i++) {
    var name = rows[i].name
    colors[name] = {
      'hex': rows[i].hex,
      'mixOf': rows[i].mixof
    }
  }
  
  res.json(colors)
})

app.get('/api/portraits', async (req, res) => {
  const query = await pool.query("SELECT * FROM portraits")
  var rows = query.rows;
  var portraits = []
  for (var i = 0; i < rows.length; i++)
    portraits.push(rows[i])

  res.json(portraits)
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
