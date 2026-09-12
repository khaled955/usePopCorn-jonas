import type { Movie } from "./movie.type";

export type MovieSearchSuccessResponse = {
  Search: Movie[];
  totalResults: string;
  Response: "True";
};

export type MovieSearchErrorResponse = {
  Response: "False";
  Error: string;
};

export type MovieSearchResponse =
  | MovieSearchSuccessResponse
  | MovieSearchErrorResponse;
