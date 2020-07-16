const express = require('express');

const app = express();

app.get('/api/portrait', (req, res) => {
  portraits = ['amgoth.svg', 'girlpearl.svg']
  res.sendFile(__dirname + '/data/' + portraits[Math.floor(Math.random() * portraits.length)])
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);