const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.post('/api/connect', (req, res) => {
  console.log('connect');
  res.send('connected');
});
