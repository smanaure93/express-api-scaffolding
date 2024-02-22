import express, { Request, Response } from "express";
import { cocktailService, cookieService } from "../services/init_instances";
import { HTTP_STATUS } from "../constants/http_status";
import multer from "multer";
import { apikeyVerification } from "../middlewares";

const upload = multer({ dest: "tmp-uploads/" });

export const cocktailRouter = express.Router();

cocktailRouter.post(
  "/bulk-upload",
  [apikeyVerification],
  upload.single("file"),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        throw `ValidationError: Should have a file on the request`;
      }
      const result = await cocktailService.BulkUpload(req.file);
      res.status(HTTP_STATUS.SUCCESS).send(result);
    } catch (e: any) {
      res
        .status(HTTP_STATUS.BACKEND_ERROR)
        .send({ status: HTTP_STATUS.BACKEND_ERROR, description: e });
    }
  }
);
