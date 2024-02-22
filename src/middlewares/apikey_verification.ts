import { NextFunction, Request, Response } from "express";
import { HTTP_STATUS } from "../constants/http_status";
import { APIConfiguration } from "../configuration";

/**
 * Middleware function to verify the API key in the request headers.
 *
 * @param {Request} req - the request object
 * @param {Response} res - the response object
 * @param {NextFunction} next - the next function in the middleware chain
 * @return {void} 
 */
export const apikeyVerification = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const apikey = (req.headers["diageo-apikey"] as string) || undefined;
    if (!apikey) {
      return res.status(HTTP_STATUS.FORBIDDEN).send({
        status: HTTP_STATUS.FORBIDDEN,
        message: "There is no API KEY in the request",
      });
    }
    if(apikey !== APIConfiguration.API_KEY) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).send({
        status: HTTP_STATUS.UNAUTHORIZED,
        message: "Invalid Api Key",
      });
    }
    return next();
  } catch (err) {
    return res
      .status(HTTP_STATUS.UNAUTHORIZED)
      .send({ status: HTTP_STATUS.UNAUTHORIZED, message: "Invalid Api Key" });
  }
};