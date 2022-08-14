import cors from "cors";
import express from "express";
import "./environmentDotenv";
import morgan from "morgan";
import notFoundError from "./server/middlewares/errors";
import routersRobots from "./server/routers/routersRobots";
import startServer, { app } from "./server/server";
import connectDB from "./database";

const port = process.env.PORT ?? 4000;
const mongoURL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

(async () => {
  try {
    connectDB(mongoURL);
    startServer(+port);
  } catch (error) {
    process.exit(1);
  }
})();

app.use("/robots", routersRobots);

app.use(notFoundError);

export default app;
