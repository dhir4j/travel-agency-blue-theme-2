'use client'

import { useState } from 'react'

export default function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubscribed(true)
    setEmail('')

    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false)
    }, 5000)
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo logo-text">
              <span className="logo-waynex-blue">CrossMap</span>
            </a>

            <p className="footer-text">Your passport to adventure awaits with CrossMap Visa Consultants LLP</p>
          </div>

          <div className="footer-contact">
            <h4 className="contact-title">Contact Us</h4>
            <p className="contact-text">Feel free to contact us!</p>

            <ul>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+919814439633" className="contact-link">+91 9814439633</a>
              </li>

              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:info@crossmaptravels.com" className="contact-link">info@crossmaptravels.com</a>
              </li>

              <li className="contact-item">
                <ion-icon name="location-outline"></ion-icon>
                <address>SCF-33, D Block Market, Ranjit Avenue, Amritsar</address>
              </li>
            </ul>
          </div>

          <div className="footer-form">
            <p className="form-text">Subscribe to our newsletter for more update & news!!</p>

            {isSubscribed ? (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '15px 20px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid #c3e6cb',
                animation: 'fadeIn 0.3s ease-in'
              }}>
                <ion-icon name="checkmark-circle-outline" style={{ fontSize: '24px', marginRight: '8px', verticalAlign: 'middle' }}></ion-icon>
                <span style={{ verticalAlign: 'middle', fontWeight: '600' }}>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-wrapper">
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-secondary">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2025 <a href="#" target="_blank">CrossMap Visa Consultants LLP</a>. All rights reserved
          </p>

          <ul className="footer-bottom-list">
            <li><a href="/privacy" className="footer-bottom-link">Privacy Policy</a></li>
            <li><a href="/terms" className="footer-bottom-link">Terms & Conditions</a></li>
            <li><a href="/refund" className="footer-bottom-link">Refund & Cancellation</a></li>
            <li><a href="/customer-care" className="footer-bottom-link">Customer Care</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
