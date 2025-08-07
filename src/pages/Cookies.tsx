
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Cookies = () => {
  return (
    <PageLayout
      title="Cookie Policy"
      description="Last updated: May 15, 2023"
    >
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
        </p>

        <h2>2. How We Use Cookies</h2>
        <p>
          When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
        </p>
        <ul>
          <li>To enable certain functions of the Service</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
          <li>To enable advertisements delivery, including behavioral advertising</li>
        </ul>

        <h2>3. Types of Cookies We Use</h2>
        <h3>Essential Cookies</h3>
        <p>
          These cookies are essential to provide you with services available through our website and to enable you to use some of its features. Without these cookies, the services that you have asked for cannot be provided, and we only use these cookies to provide you with those services.
        </p>

        <h3>Functionality Cookies</h3>
        <p>
          These cookies allow our website to remember choices you make when you use our website. The purpose of these cookies is to provide you with a more personal experience and to avoid you having to re-select your preferences every time you visit our website.
        </p>

        <h3>Analytics Cookies</h3>
        <p>
          These cookies are used to collect information about traffic to our website and how users use our website. The information gathered may include the number of visitors to our website, the websites that referred them to our website, the pages they visited on our website, what time of day they visited our website, whether they have visited our website before, and other similar information.
        </p>

        <h3>Advertising Cookies</h3>
        <p>
          These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
        </p>

        <h2>4. Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
        </p>

        <h2>5. What Are Your Choices Regarding Cookies</h2>
        <p>
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
        </p>
        <p>
          Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
        </p>

        <h2>6. Where Can You Find More Information About Cookies</h2>
        <p>
          You can learn more about cookies and the following third-party websites:
        </p>
        <ul>
          <li>AllAboutCookies: <a href="http://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">http://www.allaboutcookies.org/</a></li>
          <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/</a></li>
        </ul>

        <h2>7. Changes to Our Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "last updated" date at the top of this Cookie Policy.
        </p>
        <p>
          You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at privacy@learner.com.
        </p>
      </div>
    </PageLayout>
  );
};

export default Cookies;
