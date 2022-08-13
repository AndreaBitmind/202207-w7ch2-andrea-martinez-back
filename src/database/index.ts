import "../environmentDotenv";
import Debug from "debug";
import chalk from "chalk";
import mongoose from "mongoose";

const debug = Debug("pets-api:server:database:index");

const connectDB = (mongoUrl: string) =>
  new Promise((resolve, reject) => {
    mongoose.connect(mongoUrl, (error) => {
      if (error) {
        debug(chalk.red("Error conecting to Database"));
        reject(error);
        return;
      }
      debug(chalk.green("Everything went smooth"));
      resolve(true);
    });
  });

export default connectDB;
