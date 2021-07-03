const express = require('express');

const test = require('../routes/test');
const def = require('../routes/default');

let _ = express.Router();

_.get('/test', test.get);
_.all('/test', def._405);

_.get('*', def._404);

module.exports = _;