import * as dotenv from "dotenv";
export { EnvConfigurationSchema } from "./schema";

dotenv.config();

interface EnvConfiguration {
  PORT: number;
  NODE_ENV?: string;
  API_KEY: string;
  GRAPHQL_URL: string;
  GRAPHQL_API_KEY: string;
}

const {
  PORT,
  NODE_ENV,
  API_KEY,
  GRAPHQL_URL,
  GRAPHQL_API_KEY,
} = process.env;

export const APIConfiguration = {
  PORT: Number(PORT) || 3002,
  NODE_ENV: NODE_ENV || "development",
  API_KEY,
  GRAPHQL_URL,
  GRAPHQL_API_KEY,
} as EnvConfiguration;
