const customErrorHandler = (err: any, req: any, res: any, next: any) => {
  let customError = err;

  res.status(err.status || 500).json({
    success: false,
    message: customError.message,
  });
};

module.exports = customErrorHandler;