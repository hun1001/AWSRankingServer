const express = require('express');
const app = express();

const routes = require('./router/index');
const api = require('./router/api');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/api', api);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
