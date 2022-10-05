function errorHandler (err , req , res , next){
//   let statuscode = 500
  let errorCode = "UNKNOWN ERROR"
  let path = ''

  if(err.message.split('').splice(0,10).join('')=='Validation'){
      console.log('masuk error validation');
      errorCode = 400;
      message = err.errors[0].message;
      res.status(errorCode).json({errorCode,message});
      console.log(message);
  } else if (err.message.split('').splice(0,5).join('')=='WHERE'){
      errorCode = 402;
      message = err.message;
      res.status(errorCode).json({errorCode,message});
      console.log(err.message)
  } else {
      errorCode = 403;
      message = err.message;
      res.status(errorCode).json({errorCode,message});
      console.log(err.message)
  }
  

  // res.status(statuscode).json(`${errorCode} in ${path}, ${msg}`)
  
}

module.exports = errorHandler;