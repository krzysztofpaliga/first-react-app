import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button onClick={onClose} type="button" className="btn-close" />
    </div>
  );
};

export default Alert;
