const express = require('express');
const fs = require("fs");

const app = express();

app.get('/api/portrait', (req, res) => {
  portraits = [
    {
      name: 'American Gothic',
      arist: 'Grant Wood',
      file: 'amgoth.svg'
    },
    {
      name: 'Girl with a Pearl Earring',
      artist: 'Johannes Vermeer',
      file: 'girlpearl.svg'
    }
  ]

  filePrefix = __dirname + '/data/'
  var portrait = portraits[Math.floor(Math.random() * portraits.length)]
  var portraitSvg = fs.readFileSync(filePrefix + portrait.file)
  portrait.file = portraitSvg

  res.json(portrait)
  // res.sendFile(__dirname + '/data/' + portraits[Math.floor(Math.random() * portraits.length)].file)
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);