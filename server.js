const express = require('express');
const fs = require('fs');
const path = require('path')

const app = express();

app.get('/api/colors', (req, res) => {
  colors = {
    'black': {
      'hex': '#000000',
      'mixOf': null
    },
    'white': {
      'hex': '#ffffff',
      'mixOf': null
    },
    'gray': {
      'hex': '#808080',
      'mixOf': [
        'black',
        'white'
      ]
    },
    'light gray': {
      'hex': '#bababa',
      'mixOf': [
        'gray',
        'white'
      ]
    },
    'dark gray': {
      'hex': '#555555',
      'mixOf': [
        'gray',
        'black'
      ]
    },
    'red': {
      'hex': '#ff3333',
      'mixOf': null
    },
    'pink': {
      'hex': '#ffc0cb',
      'mixOf': [
        'red',
        'white'
      ]
    },
    'orange': {
      'hex': '#ffa500',
      'mixOf': [
        'red',
        'yellow'
      ]
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
    'peach': {
      'hex': '#ffe5b4',
      'mixOf': [
        'red',
        'white',
        'yellow'
      ]
    },
    'green': {
      'hex': '#1d771d',
      'mixOf': [
        'blue',
        'yellow'
      ]
    },
    'light green': {
      'hex': '#adff2f',
      'mixOf': [
        'green',
        'white'
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
    'dark blue': {
      'hex': '#000058',
      'mixOf': [
        'blue',
        'black'
      ]
    },
  }

  res.json(colors)
})

app.get('/api/portraits', (req, res) => {
  filePrefix = __dirname + '/data/'

  portraits = [
    {
      name: 'Composition A',
      artist: 'Piet Mondrian',
      file: 'SvgCompa.js',
      colors: [
        'black',
        'yellow',
        'light gray',
        'red',
        'blue',
        'light blue'
      ],
      facts: [
        "Piet Mondrian's name is an anagram for \"I paint modern\"",
        "Mondrian liked to dance to jazz, but wasn't very good at it",
        "Mondrian was a qualified art teacher"
      ]
    },
    {
      name: 'Creation of Adam',
      artist: 'Michelangelo',
      file: 'SvgAdam.js',
      colors: [
        'light blue',
        'light brown',
        'cream',
        'dark brown',
        'peach',
        'pink',
        'yellow'
      ],
      facts: [
        "Michelangelo painted God last because he wanted to make him look perfect",
        "Michelangelo didn't see the entire painting for four years until he was done",
        "Michaelangelo dissected a lot of bodies so he could know how to paint bodies perfectly"
      ]
    }
  ]

  res.json(portraits)
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

// {
//   name: 'American Gothic',
//   artist: 'Grant Wood',
//   file: 'amgoth.svg',
//   colors: [
//     'black',
//     'cream',
//     'light gray',
//     'dark gray',
//     'red',
//     'light brown',
//     'dark brown',
//     'light blue',
//     'peach',
//     'green'
//   ]
// },
// {
//   name: 'Girl with a Pearl Earring',
//   artist: 'Johannes Vermeer',
//   file: 'girlpearl.svg',
//   colors: [
//     'cream',
//     'light blue',
//     'dark blue',
//     'yellow',
//     'peach',
//     'pink',
//     'black',
//     'light brown',
//     'dark brown',
//     'gray'
//   ]
// }
