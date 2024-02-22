import express, { Request, Response } from "express";
import { userInteractionService } from "../services/init_instances";
import { HTTP_STATUS } from "../constants/http_status";
import userInteractionSchema from "../schemas/user_interaction.schema";
import { apikeyVerification } from "../middlewares";

export const userInteractionRouter = express.Router();

userInteractionRouter.put(
  "",
  [apikeyVerification],
  async (req: Request, res: Response) => {
    try {
      const validation = userInteractionSchema.validate(req.body);
      if (validation.error) {
        throw `${validation.error}`;
      }
      const result = await userInteractionService.SaveUserInteraction(req.body);
      res.status(HTTP_STATUS.SUCCESS).send(result);
    } catch (e: any) {
      res
        .status(HTTP_STATUS.BACKEND_ERROR)
        .send({ status: HTTP_STATUS.BACKEND_ERROR, description: e });
    }
  }
);
