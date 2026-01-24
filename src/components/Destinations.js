'use client'

export default function Destinations() {
  const destinations = [
    {
      image: "https://d3r8gwkgo0io6y.cloudfront.net/upload/SY/andaman-group-tour.webp",
      subtitle: "Port Blair",
      title: "Andaman",
      width: "w-50"
    },
    {
      image: "https://image.kesari.in/upload/SY/RADHANAGAR-BEACH.webp",
      subtitle: "Havelock Island",
      title: "Andaman",
      width: "w-50"
    },
    {
      image: "https://d3r8gwkgo0io6y.cloudfront.net/upload/SZ/SZ.jpg",
      subtitle: "Neil Island",
      title: "Andaman",
      width: ""
    },
    {
      image: "https://d3r8gwkgo0io6y.cloudfront.net/upload/W6/ranthambhor-national-park.jpg",
      subtitle: "Ranthambore",
      title: "Rajasthan",
      width: ""
    },
    {
      image: "https://image.kesari.in/upload/SY/Andaman-beach2.jpeg",
      subtitle: "Elephant Beach",
      title: "Andaman",
      width: ""
    }
  ]

  return (
    <section className="section destination">
      <div className="container">
        <p className="section-subtitle">Destinations</p>
        <h2 className="h2 section-title">Choose your Place</h2>

        <ul className="destination-list">
          {destinations.map((dest, index) => (
            <li key={index} className={dest.width}>
              <a href="/tours" className="destination-card">
                <figure className="card-banner">
                  <img
                    src={dest.image}
                    alt={`${dest.subtitle}, ${dest.title}`}
                    loading="lazy"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <p className="card-subtitle">{dest.subtitle}</p>
                  <h3 className="h3 card-title">{dest.title}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
