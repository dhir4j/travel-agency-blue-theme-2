'use client'

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <p className="section-subtitle">Explore Your Travel</p>
          <h1 className="h1 hero-title">Your Trusted Travel Partner</h1>
          <p className="hero-text">Crafting unforgettable experiences backed by reliability, transparency, and personalized care for every journey</p>

          <div className="btn-group">
            <a href="/tours" className="btn btn-primary">Book Your Journey</a>
            <a href="/contact" className="btn btn-secondary-outline">Get in Touch</a>
          </div>
        </div>

        <figure className="hero-banner">
          <img src="https://i.postimg.cc/s2xKpCNP/hero-banner.png" alt="Happy travelers exploring destinations" width="686" height="812" loading="lazy" className="w-100" />
        </figure>
      </div>
    </section>
  )
}
