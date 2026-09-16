import { useEffect, useState } from "react";
import type { WatchedMovie } from "../types/movie.type";

const STORAGE_KEY = "imdbwatchedMovies";

export function useWatchedMovies() {
  const [watched, setWatched] = useState<WatchedMovie[]>(() => {
    const storedMovies = localStorage.getItem(STORAGE_KEY);

    return storedMovies ? JSON.parse(storedMovies) : [];
  });

  // Store watched movies whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watched));
  }, [watched]);

  // Add movie
  function addWatchedMovie(movie: WatchedMovie) {
    setWatched((watched) => {
      // check to prevent duplicate data
      const alreadyWatched = watched.some(
        (item) => item.imdbID === movie.imdbID,
      );

      if (alreadyWatched) return watched;

      return [...watched, movie];
    });
  }

  // Delete movie
  function deleteWatchedMovie(id: string) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return {
    watched,
    addWatchedMovie,
    deleteWatchedMovie,
  };
}
