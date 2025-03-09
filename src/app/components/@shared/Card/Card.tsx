"use client";

import React, { useState } from "react";
import Modal from "../Modal/Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`relative bg-white shadow-md lg:p-20 p-16 w-full max-w-4xl mx-auto flex flex-col min-h-[250px] md:min-h-[400px] ${className}`}
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

        {/* Show button on mobile, hide on md and up */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="md:hidden mt-6 text-[#082FFF] font-semibold hover:text-[#0626CC] transition-colors duration-300 flex items-center"
        >
          See how
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Content visible on md screens and up */}
        <div
          className="text-gray-700 mt-4 text-left flex-grow hidden md:block"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* Modal for mobile view */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        subtitle={subtitle}
        content={content}
      />
    </>
  );
};

export default Card;
