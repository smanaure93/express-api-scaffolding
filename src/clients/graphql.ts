import { GraphQLClient } from "graphql-request";
import { APIConfiguration } from "../configuration";

export const graphQLHeaders = {
  "X-Api-Key": APIConfiguration.GRAPHQL_API_KEY,
};

export const clientGraphQL = new GraphQLClient(APIConfiguration.GRAPHQL_URL);
