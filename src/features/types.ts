import { TPerson } from "../types";

export interface TResponse {
  page: number;
  results: number;
  seed: string;
  version: string;
}

export interface TAddressResponse {
  info: TResponse;
  results: TPerson;
}
