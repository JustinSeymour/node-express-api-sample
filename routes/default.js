// Create the module to export
let _ = {};

// Method not allowed
_._405 = async (req, res) => {
   let code = 405;
   return res.status(code).json({
      timestamp: Date.now(),
      message: 'Error: Method not allowed'
   });
};

// Not found
_._404 = async (req, res) => {
   let code = 404;
   return res.status(code).json({
      timestamp: Date.now(),
      message: 'Error: Route not found'
   });
};

// Export the module
module.exports = _;