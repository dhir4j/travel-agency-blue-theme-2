export default function Popular() {
  const destinations = [
    {
      image: 'https://d3r8gwkgo0io6y.cloudfront.net/upload/SY/andaman-group-tour.webp',
      location: 'Andaman Islands',
      title: 'Andaman With Swaraj Dweep',
      description: 'Experience pristine beaches, crystal clear waters, and adventure activities in the beautiful Andaman Islands',
      price: '₹29,000',
      duration: '4N/5D',
      code: 'SY'
    },
    {
      image: 'https://d3r8gwkgo0io6y.cloudfront.net/upload/S0/vivekananda-rock-memorial.jpg',
      location: 'Kerala',
      title: 'Munnar Alleppey Chota Break',
      description: 'Discover the backwaters of Kerala, tea gardens of Munnar, and the cultural heritage of Kochi',
      price: '₹19,990',
      duration: '4N/5D',
      code: 'S0'
    },
    {
      image: 'https://d3r8gwkgo0io6y.cloudfront.net/upload/W6/ranthambhor-national-park.jpg',
      location: 'Rajasthan',
      title: 'Udaipur Kumbhalgarh',
      description: 'Explore the royal palaces of Udaipur and the magnificent Kumbhalgarh Fort in the heart of Rajasthan',
      price: '₹20,000',
      duration: '3N/4D',
      code: 'W6'
    }
  ]

  const reviews = [
    "Amazing experience with CrossMap Tours! The Andaman trip was perfectly organized and the beaches were breathtaking. Highly recommend!",
    "Kerala backwaters tour exceeded our expectations. The houseboats, tea gardens, and local cuisine made it unforgettable. Great service!",
    "Rajasthan tour was magical! The palaces, forts, and cultural experiences were incredible. Professional guides and smooth arrangements."
  ]

  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Explore India</p>

        <h2 className="h2 section-title">Popular Destinations</h2>

        <p className="section-text">
          Discover the incredible diversity of India with our carefully curated domestic tour packages. From pristine beaches to majestic mountains, experience the best of Indian culture and heritage.
        </p>

        <ul className="popular-list">
          {destinations.map((dest, index) => (
            <li key={index}>
              <div className="popular-card">
                <figure className="card-img">
                  <img src={dest.image} alt={dest.title} loading="lazy" />
                </figure>

                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle"><a href={`/tours/${dest.code}`}>{dest.location}</a></p>
                  <h3 className="h3 card-title"><a href={`/tours/${dest.code}`}>{dest.title}</a></h3>
                  <p className="card-text">{dest.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--bright-navy-blue)' }}>{dest.price}</span>
                    <span style={{ fontSize: '14px', color: 'var(--sonic-silver)' }}>{dest.duration}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <a href="/tours" className="btn btn-primary">More Destinations</a>
      </div>
    </section>
  )
}
