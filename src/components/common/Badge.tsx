import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "brand" | "orange";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "brand",
  className = "",
}) => {
  const variantStyles = {
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
    brand: "bg-blue-50 text-brand-blue border-blue-200",
    orange: "bg-amber-50 text-brand-brightOrange border-amber-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
