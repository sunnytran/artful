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
      colors: {
        'black': {
          'hex': '#000000',
          'mixOf': null
        },
        'yellow': {
          'hex': '#ffea00',
          'mixOf': null
        },
        'cream': {
          'hex': '#ffe6d0',
          'mixOf': [
            'yellow',
            'white'
          ]
        },
        'gray': {
          'hex': '#808080',
          'mixOf': null
        },
        'light gray': {
          'hex': '#bababa',
          'mixOf': [
            'gray',
            'white'
          ]
        },
        'dark gray': {
          'hex': '#a9a9a9',
          'mixOf': [
            'gray',
            'black'
          ]
        },
        'red': {
          'hex': '#ff3333',
          'mixOf': null
        },
        'brown': {
          'hex': '#8b4513',
          'mixOf': null
        },
        'light brown': {
          'hex': '#e08b3e',
          'mixOf': [
            'brown',
            'white'
          ]
        },
        'dark brown': {
          'hex': '#785027',
          'mixOf': [
            'brown',
            'black'
          ]
        },
        'blue': {
          'hex': '#1a1aff',
          'mixOf': null
        },
        'light blue': {
          'hex': '#c1e1ec',
          'mixOf': [
            'blue',
            'white'
          ]
        },
        'peach': {
          'hex': '#ffe5b4',
          'mixOf': [
            'white',
            'red',
            'yellow'
          ]
        },
        'green': {
          'hex': '#1d771d',
          'mixOf': null
        }
      }
    },
    {
      name: 'Girl with a Pearl Earring',
      artist: 'Johannes Vermeer',
      file: 'girlpearl.svg',
      colors: {
        'cream': {
          'hex': '#ffe6d0',
          'mixOf': null
        },
        'blue': {
          'hex': '#1a1aff',
          'mixOf': null
        },
        'light blue': {
          'hex': '#c1e1ec',
          'mixOf': [
            'blue',
            'white'
          ]
        },
        'dark blue': {
          'hex': '#000058',
          'mixOf': [
            'blue',
            'black'
          ]
        },
        'yellow': {
          'hex': '#ffea00',
          'mixOf': null
        },
        'peach': {
          'hex': '#ffe5b4',
          'mixOf': null
        },
        'pink': {
          'hex': '#ffc0cb',
          'mixOf': null
        },
        'black': {
          'hex': '#000000',
          'mixOf': null
        },
        'brown': {
          'hex': '#8b4513',
          'mixOf': null
        },
        'light brown': {
          'hex': '#c1e1ec',
          'mixOf': [
            'brown',
            'white'
          ]
        },
        'dark brown': {
          'hex': '#785027',
          'mixOf': [
            'brown',
            'black'
          ]
        },
        'gray': {
          'hex': '#808080',
          'mixOf': null
        }
      }
    }
  ]

  for (var i = 0; i < portraits.length; i++)
    portraits[i].file = fs.readFileSync(filePrefix + portraits[i].file, "utf8")

  res.json(portraits)
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);