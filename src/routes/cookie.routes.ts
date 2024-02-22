import express, { Request, Response } from "express";
import { cookieService } from "../services/init_instances";
import { HTTP_STATUS } from "../constants/http_status";
import { apikeyVerification } from "../middlewares";

export const cookieRouter = express.Router();

cookieRouter.get(
  "/generate",
  [apikeyVerification],
  async (req: Request, res: Response) => {
    try {
      const result = await cookieService.GenerateUserCookie();
      res.status(result.status).send(result);
    } catch (e: any) {
      res
        .status(HTTP_STATUS.BACKEND_ERROR)
        .send({ status: HTTP_STATUS.BACKEND_ERROR, description: e });
    }
  }
);
