// Setup Dependencies and constants
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

// Spin up the server and listen on port 3000
app.listen(port);
app.use(express.json());

app.get('/test', (req, res) => {

   //console.log(req.hostname);
   //console.log(req.headers.cookie);

   let host = req.hostname || 'node-sample.com'; 

   res.send({
      timestamp: Date.now(),
      code: 200,
      message: 'Succesfully responded the /test endpoint.',
      host: `${host}:${port}`
   });

});

console.log(`Node Express Same API listening on port ${port}`);