import joi from "joi";

export const EnvConfigurationSchema = joi.object({
  PORT: joi.number().required(),
  NODE_ENV: joi.string(),
  API_KEY: joi.string().required(),
  GRAPHQL_URL: joi.string().required(),
  GRAPHQL_API_KEY: joi.string().required(),
});
