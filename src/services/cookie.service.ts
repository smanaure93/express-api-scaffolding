import { HTTP_STATUS } from "../constants/http_status";
import { GenericResponse } from "../types/shared.types";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

class CookieService {
  constructor() {}

  /**
   * GenerateUserCookie function to generate a random user cookie.
   *
   * @return {Promise<GenericResponse>} - User cookie generation response
   */
  async GenerateUserCookie(): Promise<GenericResponse> {
    const loggerIdentifier = `[${this.constructor.name}][${this.GenerateUserCookie.name}]`;
    try {
      console.log(
        `${loggerIdentifier}[${dayjs().format(
          "YYYY-MM-DD HH:mm:ss"
        )}]: Generating random user cookie`
      );

      return {
        status: HTTP_STATUS.SUCCESS,
        description: "User cookie generated",
        data: {
          cookie: `DAG-${uuid()}`.replaceAll("-", "").toUpperCase(),
        },
      };
    } catch (error: any) {
      throw `${loggerIdentifier}: ${error.message}`;
    }
  }
}

export default CookieService;
