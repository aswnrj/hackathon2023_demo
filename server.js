const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const hostname = '0.0.0.0'
const port = 3000;

const rawData = fs.readFileSync('data.json');
const businessData = JSON.parse(rawData);

app.use(bodyParser.json());

app.get('/business/:name', (req, res) => {
  const businessName = req.params.name;

  if (businessData[businessName]) {
    const data = businessData[businessName];
    res.json(data);
  } else {
    res.status(404).json({ message: 'Business not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});