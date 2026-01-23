'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const inquiry = searchParams.get('inquiry')
    if (inquiry) {
      setFormData(prev => ({
        ...prev,
        message: decodeURIComponent(inquiry),
        subject: inquiry.includes('Taxi Booking') ? 'Taxi Booking Request' : inquiry.includes('Hotel Booking') ? 'Hotel Booking Request' : 'Tour Inquiry'
      }))
    }
  }, [searchParams])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact Form Submission')
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from CrossMap Visa Consultants LLP website contact form
      `)
      
      // Open email client
      window.location.href = `mailto:info@crossmaptravels.com?subject=${subject}&body=${body}`
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="tours-hero-modern">
          <div className="container">
            <h1 className="h1">Get in Touch</h1>
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
                  <a href="mailto:info@crossmaptravels.com" style={{
                    color: 'hsl(214, 57%, 51%)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    wordBreak: 'break-word'
                  }}>
                    info@crossmaptravels.com
                  </a>
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
                  <a href="tel:+919814439633" style={{
                    color: 'hsl(214, 57%, 51%)',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    display: 'block'
                  }}>
                    +91 9814439633
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

                  {submitStatus === 'success' && (
                    <div style={{
                      background: '#d4edda',
                      color: '#155724',
                      padding: '15px',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      border: '1px solid #c3e6cb'
                    }}>
                      Thank you! Your message has been sent. We&apos;ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div style={{
                      background: '#f8d7da',
                      color: '#721c24',
                      padding: '15px',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      border: '1px solid #f5c6cb'
                    }}>
                      There was an error sending your message. Please try again or contact us directly.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '15px',
                      fontSize: '1.1rem',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
                  title="CrossMap Visa Consultants LLP Location"
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

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  )
}
