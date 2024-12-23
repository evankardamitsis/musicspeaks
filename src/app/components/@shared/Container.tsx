import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="min-h-screen w-full px-6 md:px-8 mx-auto max-w-[1440px]">
      {children}
    </div>
  );
};

export default Container;
