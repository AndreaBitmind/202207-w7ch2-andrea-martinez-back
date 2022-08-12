import "./environmentDotenv";
import express from "express";
import Debug from "debug";

const debug = Debug("my-robots:files:index");
debug("hola");

const port = process.env.PORT ?? 4000;

const app = express();

app.listen(port, () => {
  debug("si");
});
