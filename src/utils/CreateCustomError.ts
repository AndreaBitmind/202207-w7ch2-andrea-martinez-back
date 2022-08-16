import { Error } from "mongoose";
import CustomError from "../types/error";

const CreateCustomError = (
  code: number,
  publicMessage: string,
  privateMessage: string
) => {
  const error = new Error(publicMessage) as CustomError;
  error.statusCode = code;
  error.publicMessage = publicMessage;
  error.privateMessage = privateMessage;

  return error;
};

export default CreateCustomError;
