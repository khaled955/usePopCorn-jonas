type NumResultsProps = {
  totalResults: number;
};

export default function NumResults({ totalResults }: NumResultsProps) {
  return (
    <p className="num-results">
      Found <strong>{totalResults}</strong> results
    </p>
  );
}
