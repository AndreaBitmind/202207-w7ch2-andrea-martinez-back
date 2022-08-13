import "./environmentDotenv";
import express from "express";
import morgan from "morgan";
import notFoundError from "./server/middlewares/errors";
import routersRobots from "./server/routers/routersRobots";
import startServer from "./server/server";

const port = process.env.PORT ?? 4000;
const app = express();

startServer(+port);
app.use(morgan("dev"));

app.use("/robots", routersRobots);

app.use(notFoundError);

export default app;
