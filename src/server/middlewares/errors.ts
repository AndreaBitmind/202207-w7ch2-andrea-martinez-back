import chalk from "chalk";
import Debug from "debug";
import { NextFunction, Request, Response } from "express";
import CustomError from "../../types/error";

const debug = Debug("my-robots:middlewares:errors.ts");

export const notFoundError = (req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
  debug(chalk.red("endpoint not found"));
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const errorCode = error.statusCode ?? 500;
  const errorMessage =
    error.publicMessage ?? "Something went wrong, please try again";

  debug(chalk.redBright(error.message));

  res.status(errorCode).json({ error: errorMessage });
};

export default notFoundError;
