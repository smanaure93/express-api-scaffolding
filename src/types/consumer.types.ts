import { UserInteraction } from "./user_interaction.types";

export type Consumer = {
  id: string;
  interactions?: UserInteraction[];
  __typename?: string;
  createdAt?: string;
  updatedAt?: string;
};
