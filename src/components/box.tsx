import Button from "./button";

type BoxProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Box({ children, isOpen, setIsOpen }:BoxProps) {
  return (
    <div className="box">
      <Button isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
      {isOpen && children}
    </div>
  );
}
