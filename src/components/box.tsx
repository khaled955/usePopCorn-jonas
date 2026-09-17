import Button from "./button";

type BoxProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  forceOpen?: boolean;
};
export default function Box({
  children,
  isOpen,
  setIsOpen,
  forceOpen = false,
}: BoxProps) {
  // Variables
  const shouldShowContent = forceOpen || isOpen;

  return (
    <div className="box">
      {!forceOpen && (
        <Button isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
      )}

      {shouldShowContent && children}
    </div>
  );
}
