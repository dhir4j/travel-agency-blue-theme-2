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

        <div className="header-bottom">
          <div className="container">
            <Link href="/" className="logo">
              <span className="logo-text">CrossMap</span>
            </Link>

            <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
              <button className="nav-close-btn" aria-label="Close Menu" onClick={toggleNav}>
                <ion-icon name="close-outline"></ion-icon>
              </button>

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
              <Link href="/tours" className="btn btn-primary">Book Now</Link>
              <button className="nav-open-btn" aria-label="Open Menu" onClick={toggleNav}>
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
