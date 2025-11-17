import express from "express";
import cors from "cors";
import progressRoutes from "./routes/progressRoutes";

import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

const app = express();

// allow JSON from front-end
app.use(express.json());

// allow only front-end at localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// 🔹 Load Swagger file
const swaggerFile = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../swagger/swagger.json"), "utf8")
);

// 🔹 Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// routes for progress
app.use("/progress", progressRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

// if route not found
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Swagger Docs at http://localhost:3000/api-docs");
});
