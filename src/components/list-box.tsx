import Button from "./button";

type ListBoxProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ListBox({ children, isOpen, setIsOpen }: ListBoxProps) {
  return (
    <div className="box">
      <Button isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
      {isOpen && children}
    </div>
  );
}
