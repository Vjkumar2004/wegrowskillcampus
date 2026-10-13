import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Component = "div",
  id,
}) => {
  return (
    <Component
      id={id}
      className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 ${className}`}
    >
      {children}
    </Component>
  );
};

export default Container;
