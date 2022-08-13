import express from "express";
import getRobots from "../controllers/controllers";

const routersRobots = express.Router();

routersRobots.get("/", getRobots);

export default routersRobots;
