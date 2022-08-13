import chalk from "chalk";
import Debug from "debug";
import { Request, Response } from "express";

const debug = Debug("my-robots:middlewares:errors.ts");

const notFoundError = (req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
  debug(chalk.red("endpoint not found"));
};

export default notFoundError;
