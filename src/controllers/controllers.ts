import chalk from "chalk";
import Debug from "debug";
import { Request, Response } from "express";
import robots from "../data-provisional/data";

const debug = Debug("my-robots:src:controllers:controllers.ts");

const getRobots = (req: Request, res: Response) => {
  res.status(200).json(robots);

  debug(chalk.green("We have printed all robots! :)"));
};

export default getRobots;
