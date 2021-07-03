// Setup Dependencies and constants
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const router = require('./lib/router');

// Spin up the server and listen on port 3000
app.listen(port);
app.use(express.json());


app.use('/api/v0/', router);

console.log(`Node Express Sample API listening on port ${port}`);