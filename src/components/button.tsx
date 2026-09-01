type ButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};
export default function Button({ onClick, isOpen }: ButtonProps) {
  return (
    <button className="btn-toggle" onClick={onClick}>
      {isOpen ? "–" : "+"}
    </button>
  );
}
