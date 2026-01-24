'use client'

export default function About() {
  return (
    <section className="section about">
      <div className="container">
        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">Explore the world with us</h2>

          <p className="about-text">
            Whether you&apos;re chasing sunsets, savoring new cuisines, or diving into rich cultures, we make every moment unforgettable. From guided tours to comfortable hotels and reliable taxi services, we&apos;ve got your entire journey covered.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <div className="about-item-icon">
                <ion-icon name="compass"></ion-icon>
              </div>

              <div className="about-item-content">
                <h3 className="h3 about-item-title">Tour Packages</h3>
                <p className="about-item-text">Handpicked destinations with expertly crafted itineraries</p>
              </div>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <ion-icon name="bed"></ion-icon>
              </div>

              <div className="about-item-content">
                <h3 className="h3 about-item-title">Hotel Bookings</h3>
                <p className="about-item-text">Comfortable stays at top-rated hotels nationwide</p>
              </div>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <ion-icon name="car"></ion-icon>
              </div>

              <div className="about-item-content">
                <h3 className="h3 about-item-title">Taxi Services</h3>
                <p className="about-item-text">Reliable transportation for hassle-free travel</p>
              </div>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <ion-icon name="shield-checkmark"></ion-icon>
              </div>

              <div className="about-item-content">
                <h3 className="h3 about-item-title">Trusted Service</h3>
                <p className="about-item-text">Transparent pricing with personalized care and support</p>
              </div>
            </li>
          </ul>

          <a href="/tours" className="btn btn-primary">Booking Now</a>
        </div>

        <figure className="about-banner">
          <img src="https://i.postimg.cc/7hVWybqH/about-banner.png" alt="about banner" width="756" height="842" loading="lazy" className="w-100" />
        </figure>
      </div>
    </section>
  )
}
