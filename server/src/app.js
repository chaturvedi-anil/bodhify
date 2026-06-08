import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import courseRouter from "./routes/course.routes.js";

const app = express();

app.use(express.json());
app.use(cors({}));

// routes
app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "ok" });
});

app.use("/api/auth", authRouter);
app.use("/api/courses", courseRouter);

// app.use((req, res, next) => {
//   next(new ApiError(404, `Route ${req.originalUrl} not found`));
// });

app.use(errorHandler);

export default app;
