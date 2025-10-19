import React from 'react';
import './LegalPages.css';

function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <div className="legal-badge">
            <span className="legal-icon">📋</span>
            <span>Terms of Service</span>
          </div>
          <h1>Terms of Service</h1>
          <p className="legal-subtitle">
            Last updated: September 19, 2025
          </p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Agreement to Terms</h2>
            <p>
              By downloading, installing, or using ParkPin ("the App"), you agree to these Terms of Service. 
              If you don't agree with these terms, please don't use ParkPin. These terms apply to all users 
              of the app worldwide.
            </p>
          </section>

          <section className="legal-section">
            <h2>Description of Service</h2>
            <p>
              ParkPin is a privacy-first parking assistant app for iOS devices that helps you:
            </p>
            <ul>
              <li>Save parking locations using your device's GPS</li>
              <li>Set parking timers with notifications</li>
              <li>Navigate back to your saved parking spots</li>
              <li>Customize the app with themes and preferences</li>
              <li>Export or delete your parking data</li>
            </ul>
            <p>
              All functionality operates locally on your device without requiring internet connectivity 
              or data transmission to external servers.
            </p>
          </section>

          <section className="legal-section">
            <h2>License and Usage</h2>
            <div className="legal-list">
              <div className="legal-item">
                <h3>Personal Use License</h3>
                <p>We grant you a personal, non-exclusive, non-transferable license to use ParkPin on your iOS devices for personal parking assistance.</p>
              </div>
              <div className="legal-item">
                <h3>Restrictions</h3>
                <p>You may not reverse engineer, modify, distribute, or create derivative works based on ParkPin without permission.</p>
              </div>
              <div className="legal-item">
                <h3>Commercial Use</h3>
                <p>ParkPin is for personal use only. Commercial use, resale, or redistribution is not permitted without explicit authorization.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>User Responsibilities</h2>
            <p>When using ParkPin, you agree to:</p>
            <ul>
              <li>Use the app only for lawful parking activities</li>
              <li>Comply with all local parking laws and regulations</li>
              <li>Verify parking restrictions and time limits independently</li>
              <li>Not rely solely on ParkPin for legal compliance</li>
              <li>Use your own judgment regarding parking safety and legality</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Disclaimers and Limitations</h2>
            <div className="legal-list">
              <div className="legal-item">
                <h3>Accuracy Disclaimer</h3>
                <p>While we strive for accuracy, ParkPin's GPS functionality depends on your device's location services. We don't guarantee precise location accuracy.</p>
              </div>
              <div className="legal-item">
                <h3>Legal Compliance</h3>
                <p>ParkPin is a convenience tool. You're responsible for following all parking laws, time limits, and regulations in your area.</p>
              </div>
              <div className="legal-item">
                <h3>Service Availability</h3>
                <p>ParkPin works offline, but some features may require iOS system services (GPS, notifications) to function properly.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Privacy and Data</h2>
            <p>
              ParkPin is built with privacy by design. All your parking data, preferences, and usage information 
              stays on your device. We don't collect, store, or have access to any personal information. 
              See our Privacy Policy for complete details.
            </p>
          </section>

          <section className="legal-section">
            <h2>Intellectual Property</h2>
            <p>
              ParkPin, including its design, code, graphics, and trademarks, is protected by intellectual property laws. 
              All rights are reserved. The ParkPin name and logo are trademarks and may not be used without permission.
            </p>
          </section>

          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ParkPin and its developers are not liable for any damages 
              resulting from app use, including but not limited to parking tickets, fines, towing, or other 
              consequences. Use ParkPin at your own risk and always verify parking regulations independently.
            </p>
          </section>

          <section className="legal-section">
            <h2>Updates and Changes</h2>
            <p>
              We may update ParkPin through the App Store to add features, fix bugs, or improve performance. 
              We may also update these Terms of Service. Continued use of the app after updates constitutes 
              acceptance of any changes.
            </p>
          </section>

          <section className="legal-section">
            <h2>Termination</h2>
            <p>
              You may stop using ParkPin at any time by deleting the app from your device. We may discontinue 
              ParkPin or remove it from the App Store at any time. Upon termination, all rights and licenses 
              granted to you will end.
            </p>
          </section>

          <section className="legal-section">
            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by applicable laws. Any disputes will be resolved in accordance 
              with local jurisdiction requirements. If any provision is found unenforceable, the rest of these 
              terms remain in effect.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Information</h2>
            <p>
              Questions about these Terms of Service? Contact us:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:jiricech2059@gmail.com?subject=TERMS%20QUESTION">jiricech2059@gmail.com</a></p>
              <p><strong>Subject:</strong> Terms Question</p>
            </div>
          </section>

          <div className="legal-footer">
            <div className="terms-summary">
              <h3>In Simple Terms</h3>
              <p>
                Use ParkPin responsibly for personal parking assistance. We respect your privacy completely. 
                Follow parking laws. We're not responsible for tickets or fines. Contact us with questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;