import React from "react";
import { FolderOpen } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  message?: string;
  actionText?: string;
  actionHref?: string;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No information found",
  message = "There is currently no data available for this section.",
  actionText,
  actionHref,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-10 border border-dashed border-slate-300 rounded text-center bg-white ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-500">
        <FolderOpen className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-brand-textPrimary mb-1">{title}</h3>
      <p className="text-sm text-brand-textSecondary max-w-sm mb-4">{message}</p>
      {actionText && actionHref && (
        <a
          href={actionHref}
          className="text-sm font-medium text-brand-blue hover:text-brand-navy underline underline-offset-4"
        >
          {actionText}
        </a>
      )}
    </div>
  );
};

export default EmptyState;
