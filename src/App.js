import './App.css';
import logo from './images/Logo-dark.png';
import parkPin1 from './images/ParkPin-home.png';
import parkPin2 from './images/ParkPin-settings.png';
import parkPin3 from './images/ParkPin-privacy.png';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/support') {
      const supportSection = document.getElementById('support-section');
      if (supportSection) {
        supportSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [location]);

  return null;
}

function MainContent() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="animated-background"></div>
        <div className="glass-container hero-container">
          <div className="hero-content-left">
            <div className="hero-glass">
              <h1 className="hero-title">Never lose your parking spot again.</h1>
              <p className="hero-subtitle">
                Save your location, set a timer, and get gentle reminders — privately, on your device.
              </p>
              <a href="https://apps.apple.com/cz/app/parkpin-find-my-car/id6752647500" className="app-store-button">
                <svg className="app-store-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on the App Store
              </a>
            </div>
          </div>
          <div className="hero-content-right">
            <div className="hero-logo-container">
              <img src={logo} alt="ParkPin App Logo" className="hero-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="features-fullwidth">
        <div className="features-container">
          <div className="features-hero">
            <div className="features-badge-premium">
              <span className="features-star-icon">✨</span>
              <span>Powerful Features</span>
            </div>
            <h2 className="features-title">Everything you need to park with confidence</h2>
            <p className="features-subtitle">
              Designed for real-world parking challenges. Simple, intuitive, and completely private.
            </p>
          </div>

          <div className="features-cards-grid">
            <div className="feature-card-pro">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="feature-card-text">
                <h3>Save your spot in a tap</h3>
                <p>Instantly save your parking location with GPS precision. Never wander around looking for your car again.</p>
              </div>
            </div>

            <div className="feature-card-pro">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div className="feature-card-text">
                <h3>Stay ahead of the clock</h3>
                <p>Set parking timers with smart notifications. Get gentle reminders before your time expires and avoid tickets.</p>
              </div>
            </div>

            <div className="feature-card-pro">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3 7v3c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                </svg>
              </div>
              <div className="feature-card-text">
                <h3>Privacy by default</h3>
                <p>Your data never leaves your device. Zero tracking, zero analytics, just pure privacy-first parking assistance.</p>
              </div>
            </div>

            <div className="feature-card-pro">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/>
                </svg>
              </div>
              <div className="feature-card-text">
                <h3>Beautiful personalization</h3>
                <p>Six stunning themes to match your style: Dark, Light, Midnight, Ocean, Sunset, and Forest.</p>
              </div>
            </div>

            <div className="feature-card-pro">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <div className="feature-card-text">
                <h3>Your data, your control</h3>
                <p>Export your parking history as text or clear everything instantly. Complete control over your data, always.</p>
              </div>
            </div>

            <div className="feature-card-pro">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="feature-card-text">
                <h3>Premium experience</h3>
                <p>Elegant animations, haptic feedback, and attention to detail that makes parking feel effortless.</p>
              </div>
            </div>
          </div>

          <div className="features-highlight-section">
            <div className="highlight-stats">
              <div className="highlight-stat">
                <h3>One Tap</h3>
                <p>Save parking spot</p>
              </div>
              <div className="highlight-stat">
                <h3>Zero Data</h3>
                <p>Leaves your device</p>
              </div>
              <div className="highlight-stat">
                <h3>Six Themes</h3>
                <p>Beautiful customization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy-section" className="privacy-fullwidth">
        <div className="privacy-container">
          <div className="privacy-hero">
            <div className="privacy-badge-premium">
              <span className="privacy-shield-icon">🛡️</span>
              <span>Privacy First</span>
            </div>
            <h2 className="privacy-title">Built for Privacy</h2>
            <p className="privacy-subtitle">
              Your data stays where it belongs — on your device. No tracking, no analytics, no compromises.
            </p>
          </div>
          
          <div className="privacy-cards-grid">
            <div className="privacy-card">
              <div className="privacy-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3 7v3c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                </svg>
              </div>
              <div className="privacy-card-text">
                <h3>Device-Only Storage</h3>
                <p>All your parking spots, timers, and preferences are stored locally. Nothing ever leaves your phone.</p>
              </div>
            </div>
            
            <div className="privacy-card">
              <div className="privacy-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
                </svg>
              </div>
              <div className="privacy-card-text">
                <h3>Zero Analytics</h3>
                <p>We don't track how you use the app, where you park, or anything else. Your habits stay private.</p>
              </div>
            </div>
            
            <div className="privacy-card">
              <div className="privacy-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <div className="privacy-card-text">
                <h3>Open Source Privacy</h3>
                <p>Read our privacy policy right in the app. No hidden terms, no legal jargon — just honest transparency.</p>
              </div>
            </div>
            
            <div className="privacy-card">
              <div className="privacy-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div className="privacy-card-text">
                <h3>Full Data Control</h3>
                <p>Export your data anytime or delete everything with one tap. It's your data, your choice, always.</p>
              </div>
            </div>
          </div>
          
          <div className="privacy-guarantee">
            <div className="guarantee-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 7v3c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-2 13l-4-4 1.41-1.41L10 12.17l6.59-6.59L18 7l-8 8z"/>
            </svg>
            </div>
            <h3>Our Privacy Guarantee</h3>
            <p>ParkPin is built with privacy by design. We can't access your data because we simply don't collect it.</p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support-section" className="support-fullwidth">
        <div className="support-container">
          <div className="support-hero">
            <div className="support-badge-premium">
              <span className="support-help-icon">🛟</span>
              <span>Need Help?</span>
            </div>
            <h2 className="support-title">We're here to help</h2>
            <p className="support-subtitle">
              Get quick answers to common questions or reach out for personalized support. 
              We're committed to making your ParkPin experience seamless.
            </p>
          </div>

          <div className="support-cards-grid">
            <div className="support-card">
              <div className="support-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.63-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.5V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
              </div>
              <div className="support-card-text">
                <h3>Email Support</h3>
                <p>Get help via email within 24 hours</p>
                <a href="mailto:jiricech2059@gmail.com?subject=SUPPORT%20REQUEST" className="support-link">jiricech2059@gmail.com</a>
              </div>
            </div>

            <div className="support-card">
              <div className="support-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="support-card-text">
                <h3>Feature Requests</h3>
                <p>Have an idea to make ParkPin better?</p>
                <a href="mailto:jiricech2059@gmail.com?subject=FEATURE%20REQUEST" className="support-link">jiricech2059@gmail.com</a>
              </div>
            </div>

            <div className="support-card">
              <div className="support-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
              </div>
              <div className="support-card-text">
                <h3>Report Bug</h3>
                <p>Found something not working as expected?</p>
                <a href="mailto:jiricech2059@gmail.com?subject=BUG%20REPORT" className="support-link">jiricech2059@gmail.com</a>
              </div>
            </div>

            <div className="support-card">
              <div className="support-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="support-card-text">
                <h3>FAQ & Tips</h3>
                <p>Quick answers to common questions</p>
                <a href="mailto:jiricech2059@gmail.com?subject=HELP%20REQUEST" className="support-link">jiricech2059@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="support-faq-section">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>How do I save a parking spot?</h4>
                <p>Simply tap the "Save My Car" button when you park. ParkPin will automatically record your location using your device's GPS.</p>
              </div>
              <div className="faq-item">
                <h4>Can I set parking timers?</h4>
                <p>Yes! After saving your spot, you can set a timer to remind you before your parking expires. Get notifications 15, 5, and 1 minute before.</p>
              </div>
              <div className="faq-item">
                <h4>Is my location data private?</h4>
                <p>Absolutely. All location data is stored locally on your device only. We never collect, store, or share your parking locations.</p>
              </div>
              <div className="faq-item">
                <h4>What if I can't find my car?</h4>
                <p>Tap on your parked vehicle to see your saved location on the map with directions. The app will guide you back to your parking spot.</p>
              </div>
            </div>
          </div>

          <div className="support-contact-section">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3>Still need help?</h3>
            <p>We're here to help you get the most out of ParkPin. Reach out anytime with questions, suggestions, or feedback.</p>
            <a href="mailto:jiricech2059@gmail.com?subject=GENERAL%20SUPPORT" className="main-support-button">
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots-section" className="screenshots-fullwidth">
        <div className="screenshots-container">
          <div className="screenshots-hero">
            <div className="screenshots-badge-premium">
              <span className="screenshots-design-icon">🎨</span>
              <span>Crafted with Care</span>
            </div>
            <h2 className="screenshots-title">Beautiful design meets powerful functionality</h2>
            <p className="screenshots-subtitle">
              Experience the perfect balance of elegant aesthetics and intuitive user experience. 
              Every pixel thoughtfully designed with attention to detail that makes parking effortless.
            </p>
          </div>

          <div className="screenshots-showcase">
            <div className="screenshot-card-pro">
              <div className="screenshot-image-container">
                <img src={parkPin1} alt="ParkPin Home Screen" className="screenshot-image-premium" />
                <div className="screenshot-overlay">
                  <div className="screenshot-highlight">Live Demo</div>
                </div>
              </div>
              <div className="screenshot-content">
                <div className="screenshot-badge">
                  <span className="badge-icon">🏠</span>
                  <span>Main Interface</span>
                </div>
                <h3>Intuitive Home Screen</h3>
                <p>Save your parking spot with a single tap. Clean, minimal interface that puts functionality first while maintaining visual elegance.</p>
                <div className="screenshot-features">
                  <div className="feature-point">
                    <span className="point-icon">✓</span>
                    <span>One-tap parking save</span>
                  </div>
                  <div className="feature-point">
                    <span className="point-icon">✓</span>
                    <span>Real-time timer display</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="screenshot-card-pro">
              <div className="screenshot-image-container">
                <img src={parkPin2} alt="ParkPin Settings Screen" className="screenshot-image-premium" />
                <div className="screenshot-overlay">
                  <div className="screenshot-highlight">Customizable</div>
                </div>
              </div>
              <div className="screenshot-content">
                <div className="screenshot-badge">
                  <span className="badge-icon">⚙️</span>
                  <span>Personalization</span>
                </div>
                <h3>Beautiful Customization</h3>
                <p>Six stunning themes to match your style. Personalize notifications, preferences, and visual elements to create your perfect parking companion.</p>
                <div className="screenshot-features">
                  <div className="feature-point">
                    <span className="point-icon">✓</span>
                    <span>Six premium themes</span>
                  </div>
                  <div className="feature-point">
                    <span className="point-icon">✓</span>
                    <span>Smart notifications</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="screenshot-card-pro">
              <div className="screenshot-image-container">
                <img src={parkPin3} alt="ParkPin Privacy Screen" className="screenshot-image-premium" />
                <div className="screenshot-overlay">
                  <div className="screenshot-highlight">Privacy First</div>
                </div>
              </div>
              <div className="screenshot-content">
                <div className="screenshot-badge">
                  <span className="badge-icon">🛡️</span>
                  <span>Transparency</span>
                </div>
                <h3>Trust & Transparency</h3>
                <p>Clear privacy policy built right into the app. No hidden terms, no legal jargon — just honest transparency about how we protect your data.</p>
                <div className="screenshot-features">
                  <div className="feature-point">
                    <span className="point-icon">✓</span>
                    <span>Built-in privacy policy</span>
                  </div>
                  <div className="feature-point">
                    <span className="point-icon">✓</span>
                    <span>Zero data collection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="screenshots-highlight-section">
            <div className="design-stats-grid">
              <div className="design-stat-card">
                <div className="design-stat-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="design-stat-text">
                  <h3>Premium Quality</h3>
                  <p>Interface Design</p>
                </div>
              </div>
              
              <div className="design-stat-card">
                <div className="design-stat-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/>
                  </svg>
                </div>
                <div className="design-stat-text">
                  <h3>Six Themes</h3>
                  <p>Beautiful Customization</p>
                </div>
              </div>
              
              <div className="design-stat-card">
                <div className="design-stat-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <div className="design-stat-text">
                  <h3>Pixel Perfect</h3>
                  <p>Attention to Detail</p>
                </div>
              </div>
            </div>
          </div>

          <div className="design-philosophy-section">
            <div className="philosophy-content">
              <h3>Designed for Real Life</h3>
              <p>
                Every element in ParkPin is thoughtfully crafted with one goal: making parking stress-free. 
                From the gentle haptic feedback to the elegant animations, we believe great design should be invisible — 
                it just works, beautifully.
              </p>
            </div>
            <div className="philosophy-features">
              <div className="philosophy-feature">
                <span className="philosophy-icon">🎯</span>
                <span>Intuitive Interface</span>
              </div>
              <div className="philosophy-feature">
                <span className="philosophy-icon">⚡</span>
                <span>Lightning Fast</span>
              </div>
              <div className="philosophy-feature">
                <span className="philosophy-icon">✨</span>
                <span>Delightful Animations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-section" className="final-cta-fullwidth">
        <div className="cta-container">
          <div className="cta-hero">
            <div className="cta-badge-premium">
              <span className="cta-star-icon">⭐</span>
              <span>Coming Soon</span>
            </div>
            <h2 className="cta-title">Make parking stress‑free</h2>
            <p className="cta-subtitle">
              Be among the first to experience parking made simple. 
              Get ready for the peace of mind that comes with ParkPin's privacy-first approach.
            </p>
          </div>

          <div className="cta-stats-grid">
            <div className="cta-stat-card">
              <div className="cta-stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3 7v3c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                </svg>
              </div>
              <div className="cta-stat-text">
                <h3>100%</h3>
                <p>Privacy guaranteed always</p>
              </div>
            </div>
            
            <div className="cta-stat-card">
              <div className="cta-stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="cta-stat-text">
                <h3>Free</h3>
                <p>No ads, no in-app purchases</p>
              </div>
            </div>
          </div>

          <div className="cta-download-hero">
            <div className="cta-app-showcase">
              <img src={logo} alt="ParkPin App Icon" className="cta-app-icon-large" />
            </div>
            
            <div className="cta-download-content">
              <h3>Ready to never lose your car again?</h3>
              <p>ParkPin will be available soon on the App Store. Get ready for stress-free parking.</p>
              
              <a href="https://apps.apple.com/cz/app/parkpin-find-my-car/id6752647500" className="cta-download-button-main">
                <div className="download-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="download-text">
                  <span className="download-action">Download on the</span>
                  <span className="download-store">App Store</span>
                </div>
              </a>
              
              <div className="download-details">
                <span className="free-label">✨ Free Download • No Ads</span>
                <span className="compatibility-label">Requires iOS 14.0 or later • iPhone & iPad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-fullwidth">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand-section">
              <div className="footer-logo">
                <img src={logo} alt="ParkPin Logo" className="footer-logo-image" />
                <div className="footer-brand-text">
                  <h3>ParkPin</h3>
                  <p>Privacy-first parking companion</p>
                </div>
              </div>
              <p className="footer-description">
                Never lose your parking spot again. Save locations, set timers, and get reminders — 
                all while keeping your data completely private and secure on your device.
              </p>
              <div className="footer-badges">
                <div className="footer-badge">
                  <span className="badge-icon">🛡️</span>
                  <span>100% Private</span>
                </div>
                <div className="footer-badge">
                  <span className="badge-icon">✨</span>
                  <span>Free Forever</span>
                </div>
              </div>
            </div>

            <div className="footer-links-section">
              <div className="footer-column">
                <h4>Product</h4>
                <div className="footer-links">
                  <a href="#features-section" onClick={(e) => scrollToSection(e, 'features-section')}>Features</a>
                  <a href="#privacy-section" onClick={(e) => scrollToSection(e, 'privacy-section')}>Privacy</a>
                  <a href="#screenshots-section" onClick={(e) => scrollToSection(e, 'screenshots-section')}>Screenshots</a>
                  <a href="#cta-section" onClick={(e) => scrollToSection(e, 'cta-section')}>Download</a>
                </div>
              </div>
              
              <div className="footer-column">
                <h4>Support</h4>
                <div className="footer-links">
                  <a href="/support">Help Center</a>
                  <a href="mailto:jiricech2059@gmail.com?subject=SUPPORT%20REQUEST">Contact Us</a>
                  <a href="mailto:jiricech2059@gmail.com?subject=BUG%20REPORT">Report Bug</a>
                  <a href="mailto:jiricech2059@gmail.com?subject=FEATURE%20REQUEST">Feature Request</a>
                </div>
              </div>
              
              <div className="footer-column">
                <h4>Legal</h4>
                <div className="footer-links">
                  <a href="/privacy-policy">Privacy Policy</a>
                  <a href="/terms-of-service">Terms of Service</a>
                  <a href="/cookie-policy">Cookie Policy</a>
                  <a href="#privacy-section" onClick={(e) => scrollToSection(e, 'privacy-section')}>Data Protection</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>&copy; 2025 ParkPin. All rights reserved.</p>
              <p>Made with privacy in mind for iOS users worldwide.</p>
            </div>
            <div className="footer-bottom-right">
              <div className="footer-download-mini">
                <span>Available on</span>
                <a href="https://apps.apple.com/cz/app/parkpin-find-my-car/id6752647500" className="footer-app-store-mini">
                  <svg className="mini-store-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/support" element={<MainContent />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
