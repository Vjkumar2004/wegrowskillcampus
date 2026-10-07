import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = "Loading information...",
  className = "",
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center p-12 text-center text-slate-600 ${className}`}
    >
      <Loader2 className="w-8 h-8 animate-spin text-brand-blue mb-3" aria-hidden="true" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

export default LoadingState;
