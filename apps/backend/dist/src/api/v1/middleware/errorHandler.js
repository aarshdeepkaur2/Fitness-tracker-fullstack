"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responsemodel_1 = require("../models/responsemodel");
const errorHandler = (err, _req, res, _next) => {
    const statusCode = err.statusCode || 500;
    const code = err.code || "UNKNOWN_ERROR";
    console.error(`Error: ${err.message} (Code: ${code})`);
    res.status(statusCode).json((0, responsemodel_1.errorResponse)(`An unexpected error occured: ${code}`));
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map