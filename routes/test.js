let _ = {};

_.get = async (req, res) => {

   let host = req.hostname || 'node-sample.com'; 
   let port = process.env.PORT || 3000;

   res.send({
      timestamp: Date.now(),
      code: 200,
      message: 'Succesfully responded the /test endpoint.',
      host: `${host}:${port}`
   });

};

module.exports = _;
