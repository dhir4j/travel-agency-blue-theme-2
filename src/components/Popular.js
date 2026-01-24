'use client'

export default function Popular() {
  const tours = [
    {
      image: 'https://d3r8gwkgo0io6y.cloudfront.net/upload/SY/andaman-group-tour.webp',
      location: 'Port Blair, Andaman',
      title: 'Andaman With Swaraj Dweep',
      price: 'From ₹29,000.00',
      duration: '4N/5D',
      rating: 5,
      code: 'SY'
    },
    {
      image: 'https://d3r8gwkgo0io6y.cloudfront.net/upload/SZ/SZ.jpg',
      location: 'Havelock & Neil Island',
      title: 'Andaman With Swaraj & Shaheed Dweep',
      price: 'From ₹42,000.00',
      duration: '6N/7D',
      rating: 5,
      code: 'SZ'
    },
    {
      image: 'https://d3r8gwkgo0io6y.cloudfront.net/upload/W6/ranthambhor-national-park.jpg',
      location: 'Udaipur, Rajasthan',
      title: 'Rajasthan Heritage Tour',
      price: 'From ₹20,000.00',
      duration: '3N/4D',
      rating: 4,
      code: 'W6'
    }
  ]

  return (
    <section className="section popular">
      <div className="container">
        <p className="section-subtitle">Featured Tours</p>
        <h2 className="h2 section-title">Most Popular Tours</h2>

        <ul className="popular-list">
          {tours.map((tour, index) => (
            <li key={index}>
              <div className="popular-card">
                <figure className="card-banner">
                  <a href={`/tours/${tour.code}`}>
                    <img src={tour.image} alt={tour.location} width="740" height="518" loading="lazy" className="img-cover" />
                  </a>

                  <span className="card-badge">
                    <ion-icon name="time-outline"></ion-icon>
                    <time>{tour.duration}</time>
                  </span>
                </figure>

                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="card-price">{tour.price}</div>

                    <div className="card-rating">
                      {[...Array(5)].map((_, i) => (
                        <ion-icon key={i} name={i < tour.rating ? "star" : "star-outline"}></ion-icon>
                      ))}
                      <data value={tour.rating}>({tour.rating})</data>
                    </div>
                  </div>

                  <h3 className="card-title">
                    <a href={`/tours/${tour.code}`}>{tour.title}</a>
                  </h3>

                  <address className="card-location">{tour.location}</address>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
