export type GenericResponse = {
  status: number;
  description?: string;
  data?: any;
};


export type DynamoList<T> = {
  items: T[];
  nextToken?: string;
  __typename: string;
}