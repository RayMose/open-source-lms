
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Privacy = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Last updated: May 15, 2023"
    >
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h2>1. Introduction</h2>
        <p>
          At Learner, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
        </p>
        <p>
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>Personal Data</h3>
        <p>
          We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information.
        </p>
        <h3>Non-Personal Data</h3>
        <p>
          We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
        <ul>
          <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
          <li>To improve our website in order to better serve you.</li>
          <li>To allow us to better service you in responding to your customer service requests.</li>
          <li>To administer a contest, promotion, survey or other site feature.</li>
          <li>To quickly process your transactions.</li>
          <li>To send periodic emails regarding your order or other products and services.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>

        <h2>5. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
        </p>

        <h2>6. Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We will retain your information for as long as your account is active or as needed to provide you services. If you wish to cancel your account or request that we no longer use your information to provide you services, contact us at privacy@learner.com. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
        </p>

        <h2>8. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul>
          <li>The right to access your personal information</li>
          <li>The right to rectify or update your personal information</li>
          <li>The right to erase your personal information</li>
          <li>The right to restrict processing of your personal information</li>
          <li>The right to object to processing of your personal information</li>
          <li>The right to data portability</li>
        </ul>

        <h2>9. Children's Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
        </p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this Privacy Policy.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@learner.com.
        </p>
      </div>
    </PageLayout>
  );
};

export default Privacy;
