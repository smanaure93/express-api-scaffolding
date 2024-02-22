import express from "express";
import cors from "cors";
import helmet from "helmet";
import { cocktailRouter, cookieRouter, userInteractionRouter } from "./routes";
import { APIConfiguration, EnvConfigurationSchema } from "./configuration";


/**
 * Env Validation
 */
const validation = EnvConfigurationSchema.validate(APIConfiguration)
if (validation.error) {
  throw `Error running server: ${validation.error}`
}

/**
 *  App Variables
 */

const PORT: string | number = APIConfiguration.PORT || 3002;

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 *  Routes
 */
app.use("/cocktails", cocktailRouter);
app.use("/cookies", cookieRouter);
app.use("/user-interactions", userInteractionRouter);

/**
 *  Start Server
 */

app.listen(PORT, () => {
  console.log(`DIAGEO RUNNING. Listening on port ${PORT}`);
});
