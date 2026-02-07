'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNav = () => setIsNavOpen(!isNavOpen)
  const closeNav = () => setIsNavOpen(false)

  const isActive = (path) => pathname === path

  return (
    <>
      <header className={`header-pill ${isScrolled ? 'scrolled' : ''}`}>
        <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}></div>

        <div className="pill-container">
          <Link href="/" className="pill-logo">CrossMap</Link>

          <nav className="pill-nav">
            <Link href="/" className={`pill-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link href="/tours" className={`pill-link ${isActive('/tours') ? 'active' : ''}`}>Tours</Link>
            <Link href="/hotels" className={`pill-link ${isActive('/hotels') ? 'active' : ''}`}>Hotels</Link>
            <Link href="/taxi" className={`pill-link ${isActive('/taxi') ? 'active' : ''}`}>Taxi</Link>
            <Link href="/contact" className={`pill-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
            <Link href="/about" className={`pill-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
          </nav>

          <div className="pill-actions">
            <Link href="/tours" className="pill-btn">Book Now</Link>
            <button className="pill-hamburger" onClick={toggleNav}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isNavOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <Link href="/" className="mobile-logo" onClick={closeNav}>CrossMap</Link>
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
