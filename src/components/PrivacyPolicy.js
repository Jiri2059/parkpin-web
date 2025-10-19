import React from 'react';
import './LegalPages.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <div className="legal-badge">
            <span className="legal-icon">🛡️</span>
            <span>Privacy Policy</span>
          </div>
          <h1>Your Privacy is Our Priority</h1>
          <p className="legal-subtitle">
            Last updated: September 19, 2025
          </p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>
              At ParkPin, we believe privacy is a fundamental right. This Privacy Policy explains how we collect, 
              use, and protect your information when you use our iOS parking app. The short version: we don't 
              collect, store, or share your personal data. Everything stays on your device.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data We Don't Collect</h2>
            <div className="legal-list">
              <div className="legal-item">
                <h3>Location Data</h3>
                <p>Your parking locations are stored locally on your device only. We never see or access your GPS coordinates.</p>
              </div>
              <div className="legal-item">
                <h3>Personal Information</h3>
                <p>We don't collect names, email addresses, phone numbers, or any other personal identifiers.</p>
              </div>
              <div className="legal-item">
                <h3>Usage Analytics</h3>
                <p>We don't track how you use the app, which features you access, or when you use ParkPin.</p>
              </div>
              <div className="legal-item">
                <h3>Device Information</h3>
                <p>We don't collect device IDs, advertising identifiers, or any technical information about your phone.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>How ParkPin Works</h2>
            <p>
              ParkPin is designed with "privacy by design" principles. When you save a parking spot, the location 
              is stored in your device's local storage using iOS's built-in data protection. When you set a timer, 
              it uses your device's notification system. All data processing happens locally on your iPhone or iPad.
            </p>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>
              ParkPin doesn't integrate with any third-party analytics services, advertising networks, or data 
              collection platforms. We don't use crash reporting services or user behavior tracking tools. 
              The app works completely offline and independently.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Export and Deletion</h2>
            <p>
              Since all your data stays on your device, you have complete control over it:
            </p>
            <ul>
              <li>Export your parking history as a text file at any time</li>
              <li>Delete all data with one tap in the app's settings</li>
              <li>Uninstalling the app removes all ParkPin data from your device</li>
              <li>We have no data to delete from our servers because we don't store any</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Children's Privacy</h2>
            <p>
              ParkPin doesn't knowingly collect information from children under 13, because we don't collect 
              information from anyone. The app is safe for users of all ages as no personal data is transmitted 
              or stored outside the user's device.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              If we ever change our privacy practices (which would require a fundamental change to how ParkPin 
              works), we'll update this policy and notify users through the App Store update description. 
              We're committed to maintaining our privacy-first approach.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or ParkPin's privacy practices, contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:jiricech2059@gmail.com?subject=PRIVACY%20QUESTION">jiricech2059@gmail.com</a></p>
              <p><strong>Subject:</strong> Privacy Question</p>
            </div>
          </section>

          <div className="legal-footer">
            <div className="privacy-guarantee">
              <h3>Our Privacy Promise</h3>
              <p>
                ParkPin will always be privacy-first. We can't access your data because we simply don't collect it. 
                Your parking spots, timers, and preferences belong to you and stay with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;