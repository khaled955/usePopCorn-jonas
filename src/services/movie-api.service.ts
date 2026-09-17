import { API_KEY, API_URL } from "../constants/api.constant";
import type { ApiResponse } from "../types/api-type";
import type { Movie, MovieDetails } from "../types/movie.type";

// fetchMovies function to fetch movies based on a search query
export async function fetchMovies(
  query: string,
  signal?: AbortSignal,
): Promise<Movie[]> {
  const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}`, {
    signal,
  });
  const data: ApiResponse<{ Search: Movie[] }> = await response.json();

  // catch errors
  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data.Search;
}

// fetchMovie function to fetch detailed information about a specific movie by its ID
export async function fetchMovie(id: string): Promise<MovieDetails> {
  const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`);
  const data: ApiResponse<MovieDetails> = await response.json();

  // catch errors
  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
}
