import React from "react";

const FooterBottom = () => {
  return (
    <div
      id="contact"
      className="mt-16 sm:mt-32 flex flex-col items-center justify-center bg-black/90 p-6 sm:p-12 backdrop-blur-md shadow-md"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white text-sm w-full max-w-5xl px-4">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div>
            <a href="mailto:info@musicspeaks.gr" className="font-bold">
              info@musicspeaks.gr
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/p/DG-xNI7sXWs/?igsh=cGhoYzhvOHlhdzdt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/musicspeaks/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center lg:items-end space-y-4">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
        </div>

        {/* Credits - Full width */}
        <div className="col-span-1 lg:col-span-2 text-center mt-8">
          <p className="text-white text-xs">
            Developed with 😍 by{" "}
            <a href="https://belowthefold.gr/" className="text-yellow-300">
              Below The Fold
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
