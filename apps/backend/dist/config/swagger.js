"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
//define swagger options
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0"
        }
    },
    // path to annotated files
    apis: ["./src/app.ts"]
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
// export method for serving swagger documentation in /api-docs directory
const setupSwagger = (app) => {
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
};
// import as Express app middleware invocation
exports.default = setupSwagger;
//# sourceMappingURL=swagger.js.map