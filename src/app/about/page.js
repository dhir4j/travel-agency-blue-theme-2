import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export const metadata = {
  title: 'About Us - CrossMap Visa Consultants',
  description: 'Learn more about CrossMap Visa Consultants - Your trusted partner for visa services, tours, and travel solutions in India.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="about-hero" style={{
          background: 'linear-gradient(135deg, hsl(214, 57%, 51%) 0%, hsl(214, 72%, 33%) 100%)',
          padding: '120px 0 80px',
          color: 'white',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 className="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px', fontWeight: '700' }}>
              About CrossMap Visa Consultants
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: '0.95' }}>
              Your trusted partner for visa services, domestic tours, and travel solutions
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {/* Who We Are */}
              <div style={{ marginBottom: '60px' }}>
                <h2 className="h2" style={{
                  color: 'hsl(208, 97%, 12%)',
                  marginBottom: '30px',
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: '600'
                }}>
                  Who We Are
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginBottom: '20px'
                }}>
                  CrossMap Visa Consultants is your premier destination for comprehensive travel and visa services.
                  We specialize in making your travel dreams come true, whether you're planning a domestic tour across
                  India's beautiful landscapes or need expert assistance with visa applications.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  With our office located in the heart of Amritsar, Punjab, we bring you personalized service,
                  expert guidance, and hassle-free solutions for all your travel needs.
                </p>
              </div>

              {/* Our Services */}
              <div style={{ marginBottom: '60px' }}>
                <h2 className="h2" style={{
                  color: 'hsl(208, 97%, 12%)',
                  marginBottom: '30px',
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: '600'
                }}>
                  Our Services
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '30px',
                  marginTop: '30px'
                }}>
                  {/* Service Card 1 */}
                  <div style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'hsl(214, 57%, 51%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      fontSize: '30px',
                      color: 'white'
                    }}>
                      <ion-icon name="earth-outline"></ion-icon>
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Visa Consultancy
                    </h3>
                    <p style={{
                      color: 'hsl(225, 8%, 42%)',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}>
                      Expert visa assistance for 40+ countries with guaranteed processing and 100% refund on rejection.
                    </p>
                  </div>

                  {/* Service Card 2 */}
                  <div style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'hsl(214, 57%, 51%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      fontSize: '30px',
                      color: 'white'
                    }}>
                      <ion-icon name="map-outline"></ion-icon>
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Domestic Tours
                    </h3>
                    <p style={{
                      color: 'hsl(225, 8%, 42%)',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}>
                      Curated tour packages across India covering 174+ destinations in 13 states with expert guides.
                    </p>
                  </div>

                  {/* Service Card 3 */}
                  <div style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'hsl(214, 57%, 51%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      fontSize: '30px',
                      color: 'white'
                    }}>
                      <ion-icon name="car-outline"></ion-icon>
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Travel Services
                    </h3>
                    <p style={{
                      color: 'hsl(225, 8%, 42%)',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}>
                      Complete travel solutions including hotel bookings, taxi services, and travel planning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div style={{ marginBottom: '60px' }}>
                <h2 className="h2" style={{
                  color: 'hsl(208, 97%, 12%)',
                  marginBottom: '30px',
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: '600'
                }}>
                  Why Choose CrossMap?
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                  marginTop: '30px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <ion-icon name="checkmark-circle" style={{
                      fontSize: '28px',
                      color: 'hsl(214, 57%, 51%)',
                      flexShrink: '0',
                      marginTop: '2px'
                    }}></ion-icon>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '5px', color: 'hsl(208, 97%, 12%)' }}>
                        Expert Guidance
                      </h4>
                      <p style={{ color: 'hsl(225, 8%, 42%)', fontSize: '0.95rem' }}>
                        Professional visa consultants with years of experience
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <ion-icon name="checkmark-circle" style={{
                      fontSize: '28px',
                      color: 'hsl(214, 57%, 51%)',
                      flexShrink: '0',
                      marginTop: '2px'
                    }}></ion-icon>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '5px', color: 'hsl(208, 97%, 12%)' }}>
                        Hassle-Free Process
                      </h4>
                      <p style={{ color: 'hsl(225, 8%, 42%)', fontSize: '0.95rem' }}>
                        End-to-end support for all your travel needs
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <ion-icon name="checkmark-circle" style={{
                      fontSize: '28px',
                      color: 'hsl(214, 57%, 51%)',
                      flexShrink: '0',
                      marginTop: '2px'
                    }}></ion-icon>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '5px', color: 'hsl(208, 97%, 12%)' }}>
                        Trusted Service
                      </h4>
                      <p style={{ color: 'hsl(225, 8%, 42%)', fontSize: '0.95rem' }}>
                        Thousands of satisfied customers worldwide
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <ion-icon name="checkmark-circle" style={{
                      fontSize: '28px',
                      color: 'hsl(214, 57%, 51%)',
                      flexShrink: '0',
                      marginTop: '2px'
                    }}></ion-icon>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '5px', color: 'hsl(208, 97%, 12%)' }}>
                        Best Prices
                      </h4>
                      <p style={{ color: 'hsl(225, 8%, 42%)', fontSize: '0.95rem' }}>
                        Competitive pricing with no hidden charges
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div style={{
                background: 'linear-gradient(135deg, hsl(214, 57%, 51%) 0%, hsl(214, 72%, 33%) 100%)',
                padding: '50px',
                borderRadius: '20px',
                textAlign: 'center',
                color: 'white'
              }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: '600' }}>
                  Ready to Start Your Journey?
                </h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.95' }}>
                  Visit our office or get in touch with our expert team today
                </p>
                <a href="/contact" className="btn btn-secondary" style={{
                  display: 'inline-block',
                  padding: '15px 40px',
                  fontSize: '1rem'
                }}>
                  Contact Us
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
