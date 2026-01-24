'use client'

export default function Blog() {
  const blogs = [
    {
      image: 'https://image.kesari.in/upload/SY/Andaman-beach2.jpeg',
      date: '26',
      month: 'Jan',
      time: '10:30 AM',
      title: 'Discover Paradise: Ultimate Andaman Island Guide',
      author: 'CrossMap Team',
      avatar: 'https://i.postimg.cc/ZKhQSfVw/author-avatar.png'
    },
    {
      image: 'https://image.kesari.in/upload/SY/RADHANAGAR-BEACH.webp',
      date: '20',
      month: 'Jan',
      time: '5:00 PM',
      title: 'Top 10 Must-Visit Beaches in Andaman & Nicobar',
      author: 'CrossMap Team',
      avatar: 'https://i.postimg.cc/ZKhQSfVw/author-avatar.png'
    },
    {
      image: 'https://d3r8gwkgo0io6y.cloudfront.net/upload/W6/ranthambhor-national-park.jpg',
      date: '15',
      month: 'Jan',
      time: '9:40 AM',
      title: 'Exploring Rajasthan: Heritage and Wildlife Tours',
      author: 'CrossMap Team',
      avatar: 'https://i.postimg.cc/ZKhQSfVw/author-avatar.png'
    }
  ]

  return (
    <section className="section blog">
      <div className="container">
        <p className="section-subtitle">From the Blog Post</p>
        <h2 className="h2 section-title">Latest News & Articles</h2>

        <ul className="blog-list">
          {blogs.map((blog, index) => (
            <li key={index}>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="/tours">
                    <img src={blog.image} width="740" height="518" alt={blog.title} className="img-cover" />
                  </a>

                  <span className="card-badge">
                    <ion-icon name="time-outline"></ion-icon>
                    <time dateTime={`10-${blog.date}`}>{blog.date} {blog.month}</time>
                  </span>
                </figure>

                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="author-wrapper">
                      <figure className="author-avatar">
                        <img src={blog.avatar} alt={blog.author} width="30" height="30" />
                      </figure>

                      <div>
                        <a href="#" className="author-name">{blog.author}</a>
                        <p className="author-title">Admin</p>
                      </div>
                    </div>

                    <time dateTime={blog.time} className="publish-time">{blog.time}</time>
                  </div>

                  <h3 className="card-title">
                    <a href="/tours">{blog.title}</a>
                  </h3>

                  <a href="/tours" className="btn-link">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
