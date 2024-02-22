import dayjs from "dayjs";
import { HTTP_STATUS } from "../constants/http_status";
import { GenericResponse } from "../types/shared.types";
import {
  SaveUserInteractionRequest,
  UserInteraction,
} from "../types/user_interaction.types";
import ConsumerService from "./consumer.service";

class UserInteractionService {
  constructor(private consumerService: ConsumerService) {}

  /**
   * Save user interaction data.
   *
   * @param {SaveUserInteractionRequest} interactions - the user interaction data to be saved
   * @return {Promise<GenericResponse>} a promise that resolves to a generic response object
   */
  async SaveUserInteraction(
    interactions: SaveUserInteractionRequest
  ): Promise<GenericResponse> {
    const loggerIdentifier = `[${this.constructor.name}][${this.SaveUserInteraction.name}]`;
    try {
      const { data } = interactions;

      console.log(
        `${loggerIdentifier}[${dayjs().format(
          "YYYY-MM-DD HH:mm:ss"
        )}]: Starting save interaction process, saving ${
          data.length
        } new interaction${data.length > 1 ? "s" : ""}`
      );

      // Retrieve the consumer information
      let consumer = await this.consumerService.GetConsumer(
        String(data[0].consumerId)
      );

      // If the consumer does not exist, create a new one
      if (!consumer) {
        console.log(
          `${loggerIdentifier}[${dayjs().format(
            "YYYY-MM-DD HH:mm:ss"
          )}]: Consumer with id ${String(data[0].consumerId)} not found`
        );

        consumer = await this.consumerService.CreateConsumer(
          String(data[0].consumerId)
        );
      }

      // Prepare updated interaction data
      const updateInput = {
        createdAt: consumer.createdAt,
        id: consumer.id,
        interactions: [
          ...(consumer.interactions?.map((i) => ({
            createdAt: i.createdAt,
            interactionType: i.interactionType,
            site: i.site,
            sourceId: i.sourceId,
          })) || []),
          ...data.map((interaction: UserInteraction) => {
            return {
              createdAt: dayjs().format("YYYY/MM/DD HH:mm"),
              interactionType: interaction.interactionType,
              site: interaction.site,
              sourceId: interaction.sourceId,
            };
          }),
        ],
      };

      // Update the consumer with the new interaction data
      await this.consumerService.UpdateConsumer(updateInput);

      console.log(
        `${loggerIdentifier}[${dayjs().format(
          "YYYY-MM-DD HH:mm:ss"
        )}]: Save interaction process finished, saved ${
          data.length
        } new interaction${data.length > 1 ? "s" : ""}`
      );

      // Return a success response
      return {
        status: HTTP_STATUS.SUCCESS,
        description: "User interaction saved",
      };
    } catch (error: any) {
      // Log and throw any errors that occur
      throw `${loggerIdentifier}: ${error.message}`;
    }
  }
}

export default UserInteractionService;
