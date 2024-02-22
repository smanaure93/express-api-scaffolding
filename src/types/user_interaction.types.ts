export type UserInteraction = {
  id?: string;
  site: string;
  sourceId: string;
  consumerId?: string;
  interactionType: string;
  createdAt?: string;
  updatedAt?: string;
};

export type SaveUserInteractionRequest = {
  data: UserInteraction[];
};