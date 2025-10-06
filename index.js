const express = require('express');

const app = express();

const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST || 'http://localhost:3005';

app.get('/', (req, res) => {
  fetch(DATE_SERVER_HOST)
    .then(response => response.json())
    .then(date => res.send(`Hello! Current date is: ${date}\n`));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
