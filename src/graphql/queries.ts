/* eslint-disable */
// this is an auto generated file. This will be overwritten


export const getConsumer = /* GraphQL */ `
  query GetConsumer($id: ID!) {
    getConsumer(id: $id) {
      id
      createdAt
      interactions {
        site
        sourceId
        interactionType
        createdAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listConsumers = /* GraphQL */ `
  query ListConsumers(
    $filter: ModelConsumerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsumers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
