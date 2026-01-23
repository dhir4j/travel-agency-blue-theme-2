'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, hsl(214, 57%, 51%) 0%, hsl(214, 72%, 33%) 100%)',
          padding: '120px 0 80px',
          color: 'white',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 className="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px', fontWeight: '700' }}>
              Get in Touch
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: '0.95' }}>
              Find us at our office or send us a message
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Contact Information */}
              <div>
                <h2 className="h2" style={{
                  color: 'hsl(208, 97%, 12%)',
                  marginBottom: '30px',
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: '600'
                }}>
                  Contact Information
                </h2>

                {/* Office Address */}
                <div style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  marginBottom: '25px'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'hsl(214, 57%, 51%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '24px',
                    color: 'white'
                  }}>
                    <ion-icon name="location-outline"></ion-icon>
                  </div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'hsl(208, 97%, 12%)'
                  }}>
                    Our Office
                  </h3>
                  <p style={{
                    color: 'hsl(225, 8%, 42%)',
                    lineHeight: '1.6'
                  }}>
                    SCF-33 First Floor, D Block Market<br />
                    Ranjit Avenue, Amritsar<br />
                    Punjab, India
                  </p>
                </div>

                {/* Email */}
                <div style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  marginBottom: '25px'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'hsl(214, 57%, 51%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '24px',
                    color: 'white'
                  }}>
                    <ion-icon name="mail-outline"></ion-icon>
                  </div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'hsl(208, 97%, 12%)'
                  }}>
                    Email Us
                  </h3>
                  <a href="mailto:Crossmapvisaconsultant@gmail.com" style={{
                    color: 'hsl(214, 57%, 51%)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    wordBreak: 'break-word'
                  }}>
                    Crossmapvisaconsultant@gmail.com
                  </a>
                  <div style={{ marginTop: '10px' }}>
                    <a href="mailto:info@crossmaptravels.com" style={{
                      color: 'hsl(214, 57%, 51%)',
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}>
                      info@crossmaptravels.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'hsl(214, 57%, 51%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '24px',
                    color: 'white'
                  }}>
                    <ion-icon name="call-outline"></ion-icon>
                  </div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'hsl(208, 97%, 12%)'
                  }}>
                    Call Us
                  </h3>
                  <a href="tel:+917347347362" style={{
                    color: 'hsl(214, 57%, 51%)',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    display: 'block'
                  }}>
                    +91 7347347362
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div style={{ gridColumn: 'span 1' }}>
                <h2 className="h2" style={{
                  color: 'hsl(208, 97%, 12%)',
                  marginBottom: '30px',
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: '600'
                }}>
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
                }}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '2px solid hsl(0, 0%, 88%)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s'
                      }}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '2px solid hsl(0, 0%, 88%)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s'
                      }}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '2px solid hsl(0, 0%, 88%)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s'
                      }}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '2px solid hsl(0, 0%, 88%)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s'
                      }}
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: 'hsl(208, 97%, 12%)'
                    }}>
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '2px solid hsl(0, 0%, 88%)',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        resize: 'vertical',
                        transition: 'border-color 0.3s'
                      }}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '1.1rem'
                  }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div style={{ marginTop: '60px', maxWidth: '1200px', margin: '60px auto 0' }}>
              <h2 className="h2" style={{
                color: 'hsl(208, 97%, 12%)',
                marginBottom: '30px',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                Find Us on Map
              </h2>
              <div style={{
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.7576!2d74.8662!3d31.6340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzAyLjQiTiA3NMKwNTEnNTguMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CrossMap Visa Consultants Location"
                ></iframe>
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
