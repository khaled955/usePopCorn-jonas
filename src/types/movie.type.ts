type MovieType = "movie" | "series" | "episode";

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieType;
  Poster: string;
};
