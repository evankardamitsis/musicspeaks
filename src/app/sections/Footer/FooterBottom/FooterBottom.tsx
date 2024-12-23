import React from "react";

const FooterBottom = () => {
  return (
    <div className="min-h-[28vh] mt-32 flex flex-col items-center justify-center bg-black/90 p-12 backdrop-blur-md shadow-md rounded-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white text-sm w-full max-w-5xl px-4">
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-4">
          <div>
            <a href="mailto:contact@example.com" className="font-bold">
              contact@example.com
            </a>
          </div>
          <div>
            <a href="tel:+1234567890" className="font-bold">
              +123 456 7890
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="bg-[#082FFF] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[#0626CC] transition-colors duration-300"
          >
            book a call
          </a>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-end space-y-4">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
        </div>
        <p className={"text-white text-xs mt-2"}>
          Developed with 😍 by{" "}
          <a href={"https://belowthefold.gr/"} className={"text-yellow-300"}>
            Below The Fold
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
