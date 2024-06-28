import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p className="privacy-policy-text">
        Welcome to GamerJunction. We value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and safeguard your data.
      </p>

      <h2 className="privacy-policy-subtitle">1. Information We Collect</h2>
      <p className="privacy-policy-text">
        We collect information that you provide to us directly, such as when you
        create an account, make a purchase, or contact customer support. This
        information may include your name, email address, phone number, and
        payment details.
      </p>

      <h2 className="privacy-policy-subtitle">
        2. How We Use Your Information
      </h2>
      <p className="privacy-policy-text">
        We use your information to process transactions, provide customer
        support, improve our services, and send you updates and promotional
        materials. We may also use your information to comply with legal
        obligations.
      </p>

      <h2 className="privacy-policy-subtitle">3. Information Sharing</h2>
      <p className="privacy-policy-text">
        We do not sell or rent your personal information to third parties. We
        may share your information with trusted partners who assist us in
        operating our website, conducting our business, or servicing you, so
        long as those parties agree to keep this information confidential.
      </p>

      <h2 className="privacy-policy-subtitle">4. Data Security</h2>
      <p className="privacy-policy-text">
        We implement a variety of security measures to maintain the safety of
        your personal information. However, please note that no method of
        transmission over the internet or method of electronic storage is 100%
        secure.
      </p>

      <h2 className="privacy-policy-subtitle">5. Your Rights</h2>
      <p className="privacy-policy-text">
        You have the right to access, correct, or delete your personal
        information. You may also object to the processing of your data or
        request that we restrict the processing of your information.
      </p>

      <h2 className="privacy-policy-subtitle">6. Changes to This Policy</h2>
      <p className="privacy-policy-text">
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on our website. You are
        advised to review this Privacy Policy periodically for any changes.
      </p>

      <p className="privacy-policy-text">
        If you have any questions about this Privacy Policy, please contact us
        at support@gamerjunction.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
