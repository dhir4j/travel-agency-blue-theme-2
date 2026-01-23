import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export const metadata = {
  title: 'Customer Care - CrossMap Visa Consultants LLP',
  description: 'Get help and support from CrossMap Visa Consultants LLP customer care team.',
}

export default function CustomerCarePage() {
  return (
    <>
      <Header />
      <main>
        <section style={{
          background: 'linear-gradient(135deg, hsl(214, 57%, 51%) 0%, hsl(214, 72%, 33%) 100%)',
          padding: '100px 0 60px',
          color: 'white',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 className="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '15px', fontWeight: '700' }}>
              Customer Care
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: '0.95' }}>
              We&apos;re here to help you 24/7
            </p>
          </div>
        </section>

        <section style={{ padding: '60px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

              {/* Quick Contact Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '30px',
                marginBottom: '60px'
              }}>
                {/* Phone Support */}
                <div style={{
                  background: 'white',
                  padding: '35px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'hsl(214, 57%, 51%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '32px',
                    color: 'white'
                  }}>
                    <ion-icon name="call-outline"></ion-icon>
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                    color: 'hsl(208, 97%, 12%)'
                  }}>
                    Call Us
                  </h3>
                  <p style={{
                    color: 'hsl(225, 8%, 42%)',
                    marginBottom: '15px',
                    fontSize: '0.95rem'
                  }}>
                    Speak with our travel experts
                  </p>
                  <a href="tel:+919814439633" style={{
                    color: 'hsl(214, 57%, 51%)',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    display: 'block'
                  }}>
                    +91 9814439633
                  </a>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'hsl(225, 8%, 42%)',
                    marginTop: '10px'
                  }}>
                    Mon-Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>

                {/* Email Support */}
                <div style={{
                  background: 'white',
                  padding: '35px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'hsl(214, 57%, 51%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '32px',
                    color: 'white'
                  }}>
                    <ion-icon name="mail-outline"></ion-icon>
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                    color: 'hsl(208, 97%, 12%)'
                  }}>
                    Email Us
                  </h3>
                  <p style={{
                    color: 'hsl(225, 8%, 42%)',
                    marginBottom: '15px',
                    fontSize: '0.95rem'
                  }}>
                    Get support via email
                  </p>
                  <a href="mailto:support@crossmaptravels.com" style={{
                    color: 'hsl(214, 57%, 51%)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'block',
                    marginBottom: '5px'
                  }}>
                    support@crossmaptravels.com
                  </a>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'hsl(225, 8%, 42%)',
                    marginTop: '10px'
                  }}>
                    Response within 24 hours
                  </p>
                </div>

                {/* Visit Us */}
                <div style={{
                  background: 'white',
                  padding: '35px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'hsl(214, 57%, 51%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '32px',
                    color: 'white'
                  }}>
                    <ion-icon name="location-outline"></ion-icon>
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                    color: 'hsl(208, 97%, 12%)'
                  }}>
                    Visit Our Office
                  </h3>
                  <p style={{
                    color: 'hsl(225, 8%, 42%)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    SCF-33 First Floor<br />
                    D Block Market, Ranjit Avenue<br />
                    Amritsar, Punjab
                  </p>
                  <a href="/contact" style={{
                    display: 'inline-block',
                    marginTop: '15px',
                    color: 'hsl(214, 57%, 51%)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: '600'
                  }}>
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* FAQ Section */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  marginBottom: '30px',
                  color: 'hsl(208, 97%, 12%)',
                  textAlign: 'center'
                }}>
                  Frequently Asked Questions
                </h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                  {/* FAQ Item 1 */}
                  <div style={{
                    background: 'white',
                    padding: '25px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.05)'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      How do I book a tour package?
                    </h3>
                    <p style={{
                      color: 'hsl(225, 8%, 42%)',
                      lineHeight: '1.7'
                    }}>
                      You can book a tour package by browsing our tours page, selecting your preferred destination, and clicking &quot;Book Now&quot;. Our team will contact you within 24 hours to confirm your booking and payment details.
                    </p>
                  </div>

                  {/* FAQ Item 2 */}
                  <div style={{
                    background: 'white',
                    padding: '25px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.05)'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Can I modify my tour booking after confirmation?
                    </h3>
                    <p style={{
                      color: 'hsl(225, 8%, 42%)',
                      lineHeight: '1.7'
                    }}>
                      Yes, modifications are possible subject to availability. Changes must be requested at least 15 days before departure and may incur additional charges.
                    </p>
                  </div>

                  {/* FAQ Item 3 */}
                  <div style={{
                    background: 'white',
                    padding: '25px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.05)'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      What payment methods do you accept?
                    </h3>
                    <p style={{
                      color: 'hsl(225, 8%, 42%)',
                      lineHeight: '1.7'
                    }}>
                      We accept credit cards, debit cards, net banking, UPI, and bank transfers. Payment details will be provided during the booking process.
                    </p>
                  </div>

                  {/* FAQ Item 4 */}
                  <div style={{
                    background: 'white',
                    padding: '25px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.05)'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Are meals and accommodations included in tour packages?
                    </h3>
                    <p style={{
                      color: 'hsl(225, 8%, 42%)',
                      lineHeight: '1.7'
                    }}>
                      Most of our tour packages include accommodations and some meals. Exact inclusions vary by package. Please check the specific tour details or contact our team for complete information about what&apos;s included.
                    </p>
                  </div>

                  {/* FAQ Item 5 */}
                  <div style={{
                    background: 'white',
                    padding: '25px',
                    borderRadius: '10px',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.05)'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '10px',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Do you provide travel insurance?
                    </h3>
                    <p style={{
                      color: 'hsl(225, 8%, 42%)',
                      lineHeight: '1.7'
                    }}>
                      We can assist you in purchasing travel insurance through our partner providers. Travel insurance is highly recommended for all trips.
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Categories */}
              <div style={{
                background: 'linear-gradient(135deg, hsl(214, 57%, 51%) 0%, hsl(214, 72%, 33%) 100%)',
                padding: '50px',
                borderRadius: '20px',
                color: 'white',
                textAlign: 'center'
              }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  marginBottom: '30px'
                }}>
                  Need Specific Help?
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                  marginBottom: '30px'
                }}>
                  <div>
                    <ion-icon name="map-outline" style={{ fontSize: '40px', marginBottom: '10px' }}></ion-icon>
                    <h4 style={{ marginBottom: '5px', fontWeight: '600' }}>Tour Bookings</h4>
                    <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>Itinerary, modifications, cancellations</p>
                  </div>
                  <div>
                    <ion-icon name="car-outline" style={{ fontSize: '40px', marginBottom: '10px' }}></ion-icon>
                    <h4 style={{ marginBottom: '5px', fontWeight: '600' }}>Transportation</h4>
                    <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>Taxi services, pickups, transfers</p>
                  </div>
                  <div>
                    <ion-icon name="card-outline" style={{ fontSize: '40px', marginBottom: '10px' }}></ion-icon>
                    <h4 style={{ marginBottom: '5px', fontWeight: '600' }}>Payment Issues</h4>
                    <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>Refunds, payment confirmation</p>
                  </div>
                </div>
                <a href="/contact" className="btn btn-secondary" style={{
                  padding: '15px 40px',
                  fontSize: '1rem'
                }}>
                  Contact Customer Care
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GoTop />
    </>
  )
}
