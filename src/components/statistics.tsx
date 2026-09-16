type StatisticsProps = {
  rating: number;
  userRating: number;
  runTime: number;
};

export default function Statistics({
  rating = 0,
  runTime = 0,
  userRating = 0,
}: StatisticsProps) {
  return (
    <div>
      <p>
        <span>⭐️</span>
        <span>{rating.toFixed(2)}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{userRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{runTime} min</span>
      </p>
    </div>
  );
}
