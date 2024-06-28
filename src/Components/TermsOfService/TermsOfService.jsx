import React from "react";
import "./TermsOfService.css";

const TermsOfService = () => {
  return (
    <div className="terms-of-service-container">
      <h1 className="terms-of-service-title">Terms of Service</h1>
      <div className="terms-of-service-content">
        <p>
          Welcome to GamerJunction! These Terms of Service ("Terms") govern your
          use of our website, products, and services. Please read these Terms
          carefully before accessing or using our platform.
        </p>

        <p>
          <strong>1. Acceptance of Terms</strong>
        </p>
        <p>
          By accessing or using GamerJunction, you agree to be bound by these
          Terms. If you do not agree with any part of these Terms, you may not
          access our platform.
        </p>

        <p>
          <strong>2. User Accounts</strong>
        </p>
        <p>
          <strong>2.1 Registration:</strong> To access certain features of
          GamerJunction, you may need to create a user account. You agree to
          provide accurate and complete information during the registration
          process.
        </p>
        <p>
          <strong>2.2 Account Security:</strong> You are responsible for
          maintaining the confidentiality of your account credentials and for
          all activities that occur under your account. Notify us immediately of
          any unauthorized use or security breach.
        </p>

        <p>
          <strong>3. Content and Conduct</strong>
        </p>
        <p>
          <strong>3.1 User Content:</strong> You retain ownership of any content
          you submit or upload to GamerJunction. By submitting content, you
          grant us a non-exclusive, royalty-free license to use, reproduce, and
          distribute the content.
        </p>
        <p>
          <strong>3.2 Prohibited Conduct:</strong> You agree not to engage in
          any activity that violates these Terms, including but not limited to:
          - Using GamerJunction for illegal or unauthorized purposes. -
          Uploading or transmitting viruses or harmful code. - Harassing,
          threatening, or infringing upon the rights of others.
        </p>
        <p>
          <strong>3.3 Content Moderation:</strong> We reserve the right to
          monitor, remove, or modify user-generated content that violates these
          Terms or is otherwise objectionable.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
