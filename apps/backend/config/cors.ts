import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    // Allowing all origins
    if (process.env.NODE_ENV === "development") {
      callback(null, true);
    } else {
      const allowedOrigins = [process.env.FRONTEND_URL];
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS restriction"), false);
      }
    }
  },
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "PUT", "POST", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
};

export default corsOptions;
