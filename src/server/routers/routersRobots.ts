import express from "express";
import getRobots from "../controllers/controllers";
import authentication from "../middlewares/authentication";

const routersRobots = express.Router();

routersRobots.get("/", authentication, getRobots);

export default routersRobots;
