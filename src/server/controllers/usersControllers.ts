import { Request, Response } from "express";
import { createToken, JwtPayloadCustom } from "../../utils/auth";

export interface LoginData {
  userName: string;
  password: string;
}

const loginUser = (req: Request, res: Response) => {
  const user: LoginData = req.body;
  const payload: JwtPayloadCustom = {
    id: "135168686",
    userName: user.userName,
  };

  const responseData = {
    user: {
      token: createToken(payload),
    },
  };

  res.status(200).json(responseData);
};

export default loginUser;
