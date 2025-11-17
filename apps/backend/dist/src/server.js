"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// get port number from the .env file
const PORT = process.env.PORT || 3000;
// imported app listens for requests on given server
const server = app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = server;
//# sourceMappingURL=server.js.map