/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConsumer = /* GraphQL */ `
  subscription OnCreateConsumer($filter: ModelSubscriptionConsumerFilterInput) {
    onCreateConsumer(filter: $filter) {
      id
      title
      interactions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateConsumer = /* GraphQL */ `
  subscription OnUpdateConsumer($filter: ModelSubscriptionConsumerFilterInput) {
    onUpdateConsumer(filter: $filter) {
      id
      title
      interactions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteConsumer = /* GraphQL */ `
  subscription OnDeleteConsumer($filter: ModelSubscriptionConsumerFilterInput) {
    onDeleteConsumer(filter: $filter) {
      id
      title
      interactions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInteractions = /* GraphQL */ `
  subscription OnCreateInteractions(
    $filter: ModelSubscriptionInteractionsFilterInput
  ) {
    onCreateInteractions(filter: $filter) {
      id
      content
      createdAt
      updatedAt
      consumerInteractionsId
      __typename
    }
  }
`;
export const onUpdateInteractions = /* GraphQL */ `
  subscription OnUpdateInteractions(
    $filter: ModelSubscriptionInteractionsFilterInput
  ) {
    onUpdateInteractions(filter: $filter) {
      id
      content
      createdAt
      updatedAt
      consumerInteractionsId
      __typename
    }
  }
`;
export const onDeleteInteractions = /* GraphQL */ `
  subscription OnDeleteInteractions(
    $filter: ModelSubscriptionInteractionsFilterInput
  ) {
    onDeleteInteractions(filter: $filter) {
      id
      content
      createdAt
      updatedAt
      consumerInteractionsId
      __typename
    }
  }
`;
