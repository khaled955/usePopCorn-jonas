import MovieCardSkeleton from "./movie-card-skeleton";

export default function MovieListSkeleton() {
  return (
    <ul className="list list-movies">
      {Array.from({ length: 6 }, (_, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </ul>
  );
}
