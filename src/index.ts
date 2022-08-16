import cors from "cors";
import express from "express";
import "./environmentDotenv";
import morgan from "morgan";
import { notFoundError, generalError } from "./server/middlewares/errors";
import routersRobots from "./server/routers/routersRobots";
import startServer, { app } from "./server/server";
import connectDB from "./database";
import usersRobots from "./server/routers/userRouter";
import usersRouter from "./server/routers/userRouter";

const port = process.env.PORT ?? 4000;
const mongoURL = process.env.MONGO_URL as string;

(async () => {
  try {
    connectDB(mongoURL);
    startServer(+port);
  } catch (error) {
    process.exit(1);
  }
})();

/* const cors = require("cors"); */

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(morgan("dev"));
/* app.use(cors()); */
app.use(express.json());

app.use("/robots", routersRobots);
app.use("/users", usersRouter);

app.use(notFoundError);

app.use(generalError);

export default app;
