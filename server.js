const path = require('path');

const express = require('express');

const app = express();

// DEFINES A FOLDER FOR THE STATIC FILES
app.use(express.static('public'));

// DEFINES THE MAIN ENTRY POINT
app.get('/', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () =>{
  console.log('App web-server listening on port 3000');
});
