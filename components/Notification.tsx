import clsx from "clsx";
import IconButton from "./IconButton";
import { CloseLine } from "./icons/System";

interface NotificationProps {
  title: string;
  children: React.ReactNode;
  mode: "information" | "warning" | "error" | "success";
  isFixed?: boolean;
  onClose?: () => void;
  className?: string;
}

const Notification = ({
  title,
  children,
  mode,
  isFixed = false,
  onClose,
  className,
}: NotificationProps) => {
  const notificationClasses = clsx("bg-white p-6 rounded-5xl w-full max-w-lg", {
    "bg-light-hrg-red": mode === "error",
    "bg-flare-yellow": mode === "warning",
    "border-jungle-green": mode === "success",
    [className ?? ""]: className,
  });

  const notification = (
    <div className={notificationClasses}>
      <div className="flex justify-between gap-3 mb-4">
        <h5>{title}</h5>
        {onClose && (
          <IconButton
            buttonColor={
              mode === "error" || mode === "success" ? "white" : undefined
            }
            aria-label="close"
            icon={CloseLine}
            size="small"
            onClick={onClose}
          />
        )}
      </div>
      {children}
    </div>
  );

  if (!isFixed) {
    return notification;
  }

  return (
    <div className="fixed flex justify-center w-full bg-transparent bottom-8 z-[100000] left-0 right-0 px-3">
      {notification}
    </div>
  );
};

export default Notification;
