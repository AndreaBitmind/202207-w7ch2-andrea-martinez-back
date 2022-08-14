import chalk from "chalk";
import Debug from "debug";
import { Request, Response } from "express";
import Robot from "../../database/models/Robot";

const debug = Debug("my-robots:src:controllers:controllers.ts");

const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
  debug(chalk.green("We are connected to database :)"));
};

export default getRobots;
