/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConsumer = /* GraphQL */ `
  mutation CreateConsumer(
    $input: CreateConsumerInput!
    $condition: ModelConsumerConditionInput
  ) {
    createConsumer(input: $input, condition: $condition) {
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
export const updateConsumer = /* GraphQL */ `
  mutation UpdateConsumer(
    $input: UpdateConsumerInput!
    $condition: ModelConsumerConditionInput
  ) {
    updateConsumer(input: $input, condition: $condition) {
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
export const deleteConsumer = /* GraphQL */ `
  mutation DeleteConsumer(
    $input: DeleteConsumerInput!
    $condition: ModelConsumerConditionInput
  ) {
    deleteConsumer(input: $input, condition: $condition) {
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
