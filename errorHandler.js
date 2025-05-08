// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    let error = { ...err };
    error.message = err.message;
  
    // MySQL Error Handling
    if (err.code === 'ER_DUP_ENTRY') {
      error = { message: 'Duplicate field value entered', statusCode: 400 };
    }
    
    if (err.code === 'ER_BAD_NULL_ERROR') {
      error = { message: 'Please provide all required fields', statusCode: 400 };
    }
  
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || 'Server Error'
    });
  };
  
  module.exports = errorHandler;