"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// configure the type of requests that CORS will allow to be made to the backend
const corsOptions = {
    // throw an error if the request does not come from the list of allowed origins
    origin: function (origin, callback) {
        const allowedOrigins = [process.env.FRONTEND_URL];
        // invoke callback (eg. next middleware) if  origin matches or no origin
        // some services (like postman) do not include an origin in their request
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS restriction"), false);
        }
    },
    // allow specific headers, methods, and inclusion of credentials
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    credentials: true
};
exports.default = corsOptions;
//# sourceMappingURL=cors.js.map