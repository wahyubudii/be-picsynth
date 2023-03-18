import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import { errorHandler, notFound } from "./middleware/errorHandling.js";
import { dbConnect } from "./config/dbConnect.js";
import { postRouter } from "./routes/postRoute.js";
import { dalleRouter } from "./routes/dalleRoute.js";

// PORT
const port = process.env.PORT || 8000;

// Rest Object
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

// Database Service
dbConnect();

// Route
app.use("/api/post", postRouter);
app.use("/api/dalle", dalleRouter);

// Server
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
