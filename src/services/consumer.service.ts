import dayjs from "dayjs";
import { clientGraphQL } from "../clients";
import { graphQLHeaders } from "../clients/graphql";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { Consumer } from "../types/consumer.types";
import { DynamoList } from "../types/shared.types";

class ConsumerService {
  constructor() {}

  /**
   * Lists consumers with an optional limit and nextToken.
   *
   * @param {number} limit - The maximum number of items to return.
   * @param {string} nextToken - The token for the next page of results.
   * @return {Promise<DynamoList<Consumer>>} A promise that resolves with the list of consumers.
   */
  async ListConsumer(
    limit = 1000,
    nextToken?: string
  ): Promise<DynamoList<Consumer>> {
    const loggerIdentifier = `[${this.constructor.name}][${this.ListConsumer.name}]`;
    try {
      console.log(
        `${loggerIdentifier}[${dayjs().format(
          "YYYY-MM-DD HH:mm:ss"
        )}]: Getting consumer list`
      );

      const { listConsumers: result } = await clientGraphQL.request<{
        listConsumers: DynamoList<Consumer>;
      }>(
        queries.listConsumers,
        {
          limit,
          nextToken,
        },
        { ...graphQLHeaders }
      );
      return result;
    } catch (error: any) {
      throw `${loggerIdentifier}: ${error.message}`;
    }
  }

  /**
   * Retrieves a consumer by ID from DynamoDB.
   *
   * @param {string} consumerId - the ID of the consumer to retrieve
   * @return {Promise<Consumer | null>} returns a Promise that resolves to the retrieved Consumer object or null if not found
   */
  async GetConsumer(consumerId: string): Promise<Consumer | null> {
    const loggerIdentifier = `[${this.constructor.name}][${this.GetConsumer.name}]`;
    try {
      console.log(
        `${loggerIdentifier}[${dayjs().format(
          "YYYY-MM-DD HH:mm:ss"
        )}]: Getting consumer id: ${consumerId}`
      );

      const { getConsumer: result } = await clientGraphQL.request<{
        getConsumer: Consumer;
      }>(
        queries.getConsumer,
        {
          id: consumerId,
        },
        { ...graphQLHeaders }
      );
      return result;
    } catch (error: any) {
      throw `${loggerIdentifier}: ${error.message}`;
    }
  }

  /**
   * Creates a consumer with the given consumerId.
   *
   * @param {string} consumerId - The unique identifier for the consumer
   * @return {Promise<Consumer>} The newly created consumer object
   */
  async CreateConsumer(consumerId: string): Promise<Consumer> {
    const loggerIdentifier = `[${this.constructor.name}][${this.CreateConsumer.name}]`;
    try {
      console.log(
        `${loggerIdentifier}[${dayjs().format(
          "YYYY-MM-DD HH:mm:ss"
        )}]: Creating consumer id: ${consumerId}`
      );

      const { createConsumer: result } = await clientGraphQL.request<{
        createConsumer: Consumer;
      }>(
        mutations.createConsumer,
        {
          input: {
            id: consumerId,
            createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          },
        },
        { ...graphQLHeaders }
      );
      return result;
    } catch (error: any) {
      throw `${loggerIdentifier}: ${error.message}`;
    }
  }

  /**
   * Update a consumer in DynamoDB.
   *
   * @param {Consumer} consumer - the consumer object to be updated
   * @return {Promise<Consumer>} the updated consumer object
   */
  async UpdateConsumer(consumer: Consumer): Promise<Consumer> {
    const loggerIdentifier = `[${this.constructor.name}][${this.UpdateConsumer.name}]`;
    try {
      console.log(
        `${loggerIdentifier}[${dayjs().format(
          "YYYY-MM-DD HH:mm:ss"
        )}]: Updating consumer id: ${consumer.id}`
      );
      const { updateConsumer: result } = await clientGraphQL.request<{
        updateConsumer: Consumer;
      }>(
        mutations.updateConsumer,
        {
          input: consumer,
        },
        { ...graphQLHeaders }
      );
      return result;
    } catch (error: any) {
      throw `${loggerIdentifier}: ${error.message}`;
    }
  }
}

export default ConsumerService;
