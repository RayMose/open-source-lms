
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Terms = () => {
  return (
    <PageLayout
      title="Terms of Service"
      description="Last updated: May 15, 2023"
    >
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Learner. These Terms of Service ("Terms") govern your use of our website, platform, and services (collectively, the "Services"), operated by Learner Education Inc. ("Learner", "we", "us", or "our").
        </p>
        <p>
          By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Services.
        </p>

        <h2>2. Accounts and Registration</h2>
        <p>
          When you create an account with us, you must provide accurate, complete, and up-to-date information. You are responsible for safeguarding the password and for all activities that occur under your account.
        </p>
        <p>
          You agree to notify us immediately of any unauthorized access to or use of your account. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
        </p>

        <h2>3. User Content</h2>
        <p>
          Our Services allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post on or through the Services, including its legality, reliability, and appropriateness.
        </p>
        <p>
          By posting User Content on or through the Services, you represent and warrant that: (i) the User Content is yours or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your User Content on or through the Services does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
        </p>

        <h2>4. Course Enrollment and Payments</h2>
        <p>
          Certain aspects of the Services may be paid offerings ("Premium Services"). If you elect to use Premium Services, you agree to the pricing and payment terms, as we may update them from time to time.
        </p>
        <p>
          All payments are non-refundable except as expressly set forth in our Refund Policy. We may change the fees for the Premium Services at any time, provided that we will give you reasonable prior notice of any such changes.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          The Services and their original content (excluding User Content), features, and functionality are and will remain the exclusive property of Learner and its licensors. The Services are protected by copyright, trademark, and other laws of both the United States and foreign countries.
        </p>
        <p>
          Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Learner.
        </p>

        <h2>6. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        <p>
          Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          In no event shall Learner, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; (iii) any content obtained from the Services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p>
          By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Services.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at legal@learner.com.
        </p>
      </div>
    </PageLayout>
  );
};

export default Terms;
