import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { Error } from "mongoose";
import CustomError from "../../types/error";
import { verifyToken } from "../../utils/auth";
import CreateCustomError from "../../utils/CreateCustomError";

interface CustomRequest extends Request {
  payload: JwtPayload;
}

const authentication = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const dataAuthentication = req.get("Authorization");
  if (!dataAuthentication || !dataAuthentication.startsWith("Bearer")) {
    const error: CustomError = CreateCustomError(
      400,
      "Bad request",
      "Authentication error"
    );

    next(error);
    return;
  }

  const token = dataAuthentication.slice(7);
  const tokenData = verifyToken(token);

  if (typeof tokenData === "string") {
    next(Error);
  }
  req.payload = tokenData as CustomRequest;
};

export default authentication;
