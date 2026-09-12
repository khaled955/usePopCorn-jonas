import { API_KEY, API_URL } from "../constants/api.constant";
import type { MovieSearchResponse } from "../types/api-type";
import type { Movie } from "../types/movie.type";

export async function fetchMovie(query: string): Promise<Movie[]> {
  const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}`);
  const data: MovieSearchResponse = await response.json();

  // catch errors
  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data.Search;
}
