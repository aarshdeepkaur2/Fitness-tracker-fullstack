"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_2 = __importDefault(require("../config/cors"));
const swagger_1 = __importDefault(require("../config/swagger"));
const errorHandler_1 = __importDefault(require("./api/v1/middleware/errorHandler"));
// initialize express application
const app = (0, express_1.default)();
// allow use of .env variables
dotenv_1.default.config();
// add morgan middleware, combined format logs info about each HTTP request
app.use((0, morgan_1.default)("combined"));
// allow express to parse json
app.use(express_1.default.json());
// add Cross-Origin Resource Sharing middleware
// This will refuse requests from origins that do not fulfill corsOptions requirements
// see https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
app.use((0, cors_1.default)(cors_2.default));
// invoke swagger middleware for serving docs in /api-docs
(0, swagger_1.default)(app);
// listen for requests on root and send simple text response
app.get("/", (_req, res) => {
    res.send("Backend is Running Sucessfully!!!");
});
//errorhandler catches errors as last element in middleware chain
// occurs when "next" is invoked
app.use(errorHandler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map