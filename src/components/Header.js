'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'active' : ''}`} data-header>
        <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}></div>

        <div className="header-main">
          <div className="container">
            <Link href="/" className="logo">
              <span className="logo-text">CrossMap</span>
            </Link>

            <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
              <ul className="navbar-list">
                <li><Link href="/" className="navbar-link" onClick={closeNav}>Home</Link></li>
                <li><Link href="/tours" className="navbar-link" onClick={closeNav}>Tours</Link></li>
                <li><Link href="/hotels" className="navbar-link" onClick={closeNav}>Hotels</Link></li>
                <li><Link href="/taxi" className="navbar-link" onClick={closeNav}>Taxi</Link></li>
                <li><Link href="/contact" className="navbar-link" onClick={closeNav}>Contact</Link></li>
                <li><Link href="/about" className="navbar-link" onClick={closeNav}>About Us</Link></li>
              </ul>
            </nav>

            <div className="header-actions">
              <a href="tel:+919814439633" className="phone-link">
                <ion-icon name="call"></ion-icon>
                <span>+91 9814439633</span>
              </a>
              <Link href="/tours" className="btn btn-primary">Book Now</Link>
              <button className="nav-toggle" aria-label="Toggle Menu" onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isNavOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <Link href="/" className="mobile-logo" onClick={closeNav}>
              <span>CrossMap</span>
            </Link>
            <button className="mobile-close" onClick={toggleNav}>
              <ion-icon name="close"></ion-icon>
            </button>
          </div>
          
          <nav className="mobile-nav">
            <Link href="/" className="mobile-link" onClick={closeNav}>
              <ion-icon name="home"></ion-icon>
              <span>Home</span>
            </Link>
            <Link href="/tours" className="mobile-link" onClick={closeNav}>
              <ion-icon name="map"></ion-icon>
              <span>Tours</span>
            </Link>
            <Link href="/hotels" className="mobile-link" onClick={closeNav}>
              <ion-icon name="bed"></ion-icon>
              <span>Hotels</span>
            </Link>
            <Link href="/taxi" className="mobile-link" onClick={closeNav}>
              <ion-icon name="car"></ion-icon>
              <span>Taxi</span>
            </Link>
            <Link href="/contact" className="mobile-link" onClick={closeNav}>
              <ion-icon name="mail"></ion-icon>
              <span>Contact</span>
            </Link>
            <Link href="/about" className="mobile-link" onClick={closeNav}>
              <ion-icon name="information-circle"></ion-icon>
              <span>About Us</span>
            </Link>
          </nav>

          <div className="mobile-footer">
            <a href="tel:+919814439633" className="mobile-phone">
              <ion-icon name="call"></ion-icon>
              <div>
                <span className="label">Call Us</span>
                <span className="number">+91 9814439633</span>
              </div>
            </a>
            <div className="mobile-social">
              <a href="#" aria-label="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#" aria-label="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
              <a href="#" aria-label="YouTube"><ion-icon name="logo-youtube"></ion-icon></a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
