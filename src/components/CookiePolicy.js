import React from 'react';
import './LegalPages.css';

function CookiePolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <div className="legal-badge">
            <span className="legal-icon">🍪</span>
            <span>Cookie Policy</span>
          </div>
          <h1>Cookie Policy</h1>
          <p className="legal-subtitle">
            Last updated: September 19, 2025
          </p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Our Cookie-Free Approach</h2>
            <p>
              Great news! ParkPin doesn't use cookies, web tracking, or any browser-based storage on our website 
              or in our iOS app. This Cookie Policy explains our approach to web tracking and why you won't find 
              any cookies when visiting our website or using our app.
            </p>
          </section>

          <section className="legal-section">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that websites place on your device to remember information about you, 
              track your behavior, or personalize your experience. They're commonly used for analytics, 
              advertising, and user tracking across the web.
            </p>
          </section>

          <section className="legal-section">
            <h2>Why We Don't Use Cookies</h2>
            <div className="legal-list">
              <div className="legal-item">
                <h3>Privacy by Design</h3>
                <p>Our commitment to privacy means we don't track, analyze, or monitor user behavior on our website or in our app.</p>
              </div>
              <div className="legal-item">
                <h3>No Analytics</h3>
                <p>We don't use Google Analytics, Facebook Pixel, or any other tracking services that require cookies.</p>
              </div>
              <div className="legal-item">
                <h3>No Advertising</h3>
                <p>We don't display ads or work with advertising networks, so we have no need for advertising cookies or tracking pixels.</p>
              </div>
              <div className="legal-item">
                <h3>Simple Experience</h3>
                <p>Our website provides information about ParkPin without needing to remember your preferences or track your visits.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>ParkPin Mobile App</h2>
            <p>
              The ParkPin iOS app operates entirely locally on your device and doesn't communicate with web servers 
              for data collection. It uses iOS's built-in storage for your parking data, which is completely 
              different from web cookies and much more private:
            </p>
            <ul>
              <li>All data stays on your iPhone or iPad</li>
              <li>No network requests for tracking or analytics</li>
              <li>No third-party SDKs for data collection</li>
              <li>iOS data protection encrypts your information</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Website Functionality</h2>
            <p>
              Our website works perfectly without cookies. You can browse information about ParkPin, read our 
              privacy policy, and contact us without any tracking or data collection. We don't need to remember 
              your visits or customize your experience.
            </p>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <div className="legal-list">
              <div className="legal-item">
                <h3>No Embedded Content</h3>
                <p>We don't embed YouTube videos, social media widgets, or other third-party content that might use cookies.</p>
              </div>
              <div className="legal-item">
                <h3>No External Scripts</h3>
                <p>Our website doesn't load analytics scripts, advertising code, or tracking libraries from external domains.</p>
              </div>
              <div className="legal-item">
                <h3>Clean Hosting</h3>
                <p>Our hosting provider doesn't inject tracking code or analytics into our pages.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Browser Storage</h2>
            <p>
              While our website doesn't use cookies, modern browsers might temporarily store some technical data:
            </p>
            <ul>
              <li><strong>Browser Cache:</strong> Your browser may cache our website files for faster loading</li>
              <li><strong>DNS Cache:</strong> Your device remembers our website's address temporarily</li>
              <li><strong>HTTPS Certificates:</strong> Security certificates are cached by your browser</li>
            </ul>
            <p>This is normal browser behavior and doesn't involve tracking or personal data collection.</p>
          </section>

          <section className="legal-section">
            <h2>Your Privacy Controls</h2>
            <p>
              Since we don't use cookies, you don't need to worry about cookie settings when using our website 
              or app. However, you always have control over your browser's cookie settings for other websites:
            </p>
            <ul>
              <li>Enable or disable cookies in your browser settings</li>
              <li>Clear existing cookies from other websites</li>
              <li>Use private/incognito browsing mode</li>
              <li>Install privacy-focused browser extensions</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              If we ever decide to use cookies (which would be a significant change to our privacy approach), 
              we'll update this policy, clearly explain what cookies we use and why, and provide you with 
              choices about cookie preferences.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              Questions about our cookie policy or privacy practices? Contact us:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:jiricech2059@gmail.com?subject=COOKIE%20POLICY%20QUESTION">jiricech2059@gmail.com</a></p>
              <p><strong>Subject:</strong> Cookie Policy Question</p>
            </div>
          </section>

          <div className="legal-footer">
            <div className="cookie-free-guarantee">
              <h3>Cookie-Free Guarantee</h3>
              <p>
                ParkPin's website and app are completely cookie-free. We don't track, analyze, or monitor your 
                behavior. Your privacy matters more to us than analytics data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;