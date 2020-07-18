const express = require('express');
const fs = require("fs");

const app = express();

app.get('/api/portraits', (req, res) => {
  filePrefix = __dirname + '/data/'

  portraits = [
    {
      name: 'American Gothic',
      artist: 'Grant Wood',
      file: 'amgoth.svg',
      colors: [
        'black',
        'cream',
        'light gray',
        'red',
        'dark brown',
        'light blue',
        'peach',
        'green',
        'light brown',
        'dark gray'
      ]
    },
    {
      name: 'Girl with a Pearl Earring',
      artist: 'Johannes Vermeer',
      file: 'girlpearl.svg',
      colors: [
        'cream',
        'dark blue',
        'yellow',
        'peach',
        'light blue',
        'pink',
        'black',
        'dark brown',
        'light brown',
        'gray'
      ]
    }
  ]

  for (var i = 0; i < portraits.length; i++)
    portraits[i].file = fs.readFileSync(filePrefix + portraits[i].file, "utf8")

  res.json(portraits)
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);