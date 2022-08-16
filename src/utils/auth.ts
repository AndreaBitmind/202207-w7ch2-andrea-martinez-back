import "../environmentDotenv";
import jwt from "jsonwebtoken";

export interface JwtPayloadCustom {
  id: string;
  userName: string;
}

export const createToken = (payload: JwtPayloadCustom) =>
  jwt.sign(payload, process.env.SECRET);

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.SECRET);
