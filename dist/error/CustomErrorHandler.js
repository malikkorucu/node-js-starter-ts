"use strict";
const customErrorHandler = (err, req, res, next) => {
    let customError = err;
    res.status(err.status || 500).json({
        success: false,
        message: customError.message,
    });
};
module.exports = customErrorHandler;
//# sourceMappingURL=CustomErrorHandler.js.map