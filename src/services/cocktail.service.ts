import { HTTP_STATUS } from "../constants/http_status";
import { GenericResponse } from "../types/shared.types";
import xlsx from "xlsx";
import dayjs from "dayjs";
import { capitalize } from "../utils";
import fs from "fs";

class CocktailService {
  constructor() {}

  async BulkUpload(file: Express.Multer.File): Promise<GenericResponse> {
    const loggerIdentifier = `[${this.constructor.name}][${this.BulkUpload.name}]`;
    try {
      console.log(
        `${loggerIdentifier}[${dayjs().format(
          "YYYY-MM-DD HH:mm:ss"
        )}]: Reading temp file`
      );

      const workbook = xlsx.readFile(file.path);
      let workbookSheet = workbook.SheetNames;
      let workbookResponse = xlsx.utils.sheet_to_json(
        workbook.Sheets[workbookSheet[0]]
      );

      workbookResponse.forEach((cocktail: any) => {
        cocktail.Licor = capitalize(cocktail.Licor);
        cocktail.Cocktail = cocktail.Cocktail.toUpperCase();
      });
      console.log(
        `${loggerIdentifier}[${dayjs().format(
          "YYYY-MM-DD HH:mm:ss"
        )}]: Deleting temp file`
      );
      fs.unlinkSync(file.path);
      return {
        status: HTTP_STATUS.SUCCESS,
        description: "File data",
        data: workbookResponse,
      };
    } catch (error: any) {
      throw `${loggerIdentifier}: ${error.message}`;
    }
  }
}

export default CocktailService;
