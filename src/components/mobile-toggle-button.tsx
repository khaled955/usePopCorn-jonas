import type { MobileView } from "../types/app.types";

type MobileToggleButtonProps = {
  view: MobileView;
  currentView: MobileView;
  onChangeView: (view: MobileView) => void;
  children: React.ReactNode;
};

export default function MobileToggleButton({
  view,
  currentView,
  onChangeView,
  children,
}: MobileToggleButtonProps) {
  return (
    <button
      className={currentView === view ? "active" : ""}
      onClick={() => onChangeView(view)}
    >
      {children}
    </button>
  );
}
