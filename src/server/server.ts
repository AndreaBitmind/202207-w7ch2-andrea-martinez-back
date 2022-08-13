/* import "../environmentDotenv"; */
import chalk from "chalk";
import Debug from "debug";
import express from "express";

export const app = express();
const debug = Debug("my-robots:src:server:server.ts");

const startServer = (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.green(`Server listening on http://localhost:${port}`));
      resolve(true);
    });
    server.on("error", (error) => {
      debug(chalk.red("Error connecting to dataBase: ", error.message));
      reject(error);
    });
  });

export default startServer;
