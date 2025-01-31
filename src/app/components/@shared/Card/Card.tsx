import React from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  content: string;
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
      className={`relative bg-white shadow-md lg:p-20 p-16 w-full max-w-4xl mx-auto flex flex-col min-h-[400px] ${className}`}
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

      <div
        className="text-gray-700 mt-4 text-left flex-grow"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Card;
