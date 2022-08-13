import "./environmentDotenv";
import express from "express";
import Debug from "debug";
import chalk from "chalk";
import morgan from "morgan";
import notFoundError from "./middlewares/errors";

const debug = Debug("my-robots:files:index");
const port = process.env.PORT ?? 4000;
const app = express();

app.use(morgan("dev"));

app.use(notFoundError);

app.listen(port, () => {
  debug(chalk.yellow(`It is listening in ${port}`));
});

export default app;
