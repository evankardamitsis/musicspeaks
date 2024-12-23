import React from "react";
import Container from "@/app/components/@shared/Container";
import Header from "../components/@shared/Header/Header";
import Footer from "../sections/Footer/Footer";
import FooterBottom from "../sections/Footer/FooterBottom/FooterBottom";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Header />
      <div className="py-16 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-8 max-w-3xl">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy explains how we collect, use, and protect your
              personal information when you use our digital music marketing
              services. We are committed to ensuring your privacy and protecting
              any information you share with us.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Name and contact information</li>
              <li>Social media handles and profiles</li>
              <li>Music-related content and materials</li>
              <li>Marketing preferences and campaign data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and improve our marketing services</li>
              <li>Communicate with you about your campaigns</li>
              <li>Analyze campaign performance and effectiveness</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              4. Data Protection
            </h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal information</li>
              <li>Request corrections to your data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              6. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us at:{" "}
              <a
                href="mailto:privacy@example.com"
                className="text-[#082FFF] hover:underline"
              >
                privacy@example.com
              </a>
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </Container>
  );
};

export default PrivacyPolicy;
