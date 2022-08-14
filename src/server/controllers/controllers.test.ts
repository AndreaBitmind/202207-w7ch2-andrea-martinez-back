import { Request, Response } from "express";
import Robot from "../../database/models/Robot";

import getRobots from "./controllers";

describe("Given a getRobot controller", () => {
  describe("When it receives a response object", () => {
    const responseTest = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Partial<Response>;
    const requestTest = {} as Partial<Request>;

    test("Then it should call the response method status with 200", async () => {
      const status = 200;

      Robot.find = jest.fn();

      await getRobots(requestTest as Request, responseTest as Response);
      expect(responseTest.status).toHaveBeenCalledWith(status);
    });

    test("Then it should call the response method json with a robot object", async () => {
      const robotTest = {
        robots: {
          endurance: 30,
          name: "manu",
          speed: 500,
          strength: 40,
        },
      };

      Robot.find = jest.fn().mockResolvedValue(robotTest);

      await getRobots(requestTest as Request, responseTest as Response);

      expect(responseTest.json).toHaveBeenCalledWith(robotTest);
    });
  });
});
