import React from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  content: string | React.ReactNode;
  icons?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  icons,
  className = "",
}) => {
  return (
    <div
      className={`relative bg-white shadow-md p-12 md:p-8 w-full max-w-sm mx-auto flex flex-col min-h-[500px] ${className}`}
      style={{
        clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
      }}
    >
      {icons && (
        <div className="flex justify-items-start gap-4 mb-4">{icons}</div>
      )}

      <h3 className="text-xl md:text-2xl font-bold text-left">{title}</h3>

      {subtitle && (
        <h4 className="text-left text-base md:text-lg font-bold text-[#082FFF] mt-1">
          {subtitle}
        </h4>
      )}

      <div className="text-gray-700 mt-4 text-left flex-grow">{content}</div>
    </div>
  );
};

export default Card;
