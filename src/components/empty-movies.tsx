type EmptyMoviesProps = {
  message?: string;
};

export default function EmptyMovies({
  message = "No movies found",
}: EmptyMoviesProps) {
  return (
    <div className="empty">
      <span>🎬</span>
      <p>{message}</p>
    </div>
  );
}
