import { Request, Response } from "express";
import getRobots from "./controllers";

describe("Given a getRobot controller", () => {
  describe("When it receives a response object", () => {
    const responseTest = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Partial<Response>;
    const requestTest = {} as Partial<Request>;

    test("Then it should call the response method status with 200", () => {
      const status = 200;

      getRobots(requestTest as Request, responseTest as Response);

      expect(responseTest.status).toHaveBeenCalledWith(status);
    });

    test("Then it should call the response method json with a robot object", () => {
      const robotTest = {
        name: "manu",
        speed: 500,
        strength: 40,
        endurance: 30,
      };

      getRobots(requestTest as Request, responseTest as Response);

      expect(responseTest.json).toHaveBeenCalledWith(robotTest);
    });
  });
});
