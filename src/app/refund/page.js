import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export const metadata = {
  title: 'Refund & Cancellation Policy - CrossMap Visa Consultants LLP',
  description: 'Learn about our refund and cancellation policies for tour packages and travel services.',
}

export default function RefundPage() {
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
              Refund & Cancellation Policy
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: '0.95' }}>
              Last updated: January 2026
            </p>
          </div>
        </section>

        <section style={{ padding: '60px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

              {/* Tour Packages */}
              <div style={{ marginBottom: '50px' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  marginBottom: '25px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Tour Packages
                </h2>

                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                    color: 'hsl(214, 57%, 51%)'
                  }}>
                    Cancellation Charges
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: 'hsl(225, 8%, 42%)',
                    marginBottom: '15px'
                  }}>
                    Cancellation charges are calculated from the date of tour departure:
                  </p>
                  <ul style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: 'hsl(225, 8%, 42%)',
                    paddingLeft: '30px'
                  }}>
                    <li><strong>45+ days before departure:</strong> 10% of total package cost</li>
                    <li><strong>30-44 days before departure:</strong> 25% of total package cost</li>
                    <li><strong>15-29 days before departure:</strong> 50% of total package cost</li>
                    <li><strong>7-14 days before departure:</strong> 75% of total package cost</li>
                    <li><strong>Less than 7 days:</strong> 100% of total package cost (no refund)</li>
                    <li><strong>No-show:</strong> 100% of total package cost (no refund)</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    marginBottom: '15px',
                    color: 'hsl(214, 57%, 51%)'
                  }}>
                    Modification of Bookings
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: 'hsl(225, 8%, 42%)'
                  }}>
                    Date changes and itinerary modifications are subject to availability and may incur additional charges. Modification requests must be made at least 15 days before departure.
                  </p>
                </div>
              </div>

              {/* Refund Process */}
              <div style={{ marginBottom: '50px' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  marginBottom: '25px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Refund Process
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginBottom: '15px'
                }}>
                  To request a refund:
                </p>
                <ol style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  paddingLeft: '30px',
                  marginBottom: '20px'
                }}>
                  <li>Submit a written cancellation request to info@crossmaptravels.com</li>
                  <li>Include your booking reference number and reason for cancellation</li>
                  <li>Refunds will be processed within 10-15 business days</li>
                  <li>Refunds will be credited to the original payment method</li>
                </ol>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  <strong>Note:</strong> Bank charges and payment gateway fees are non-refundable.
                </p>
              </div>

              {/* Special Circumstances */}
              <div style={{ marginBottom: '50px' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  marginBottom: '25px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Special Circumstances
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginBottom: '15px'
                }}>
                  In case of cancellation due to:
                </p>
                <ul style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  paddingLeft: '30px'
                }}>
                  <li><strong>Natural disasters or force majeure:</strong> Refund terms will be assessed on a case-by-case basis</li>
                  <li><strong>Medical emergencies:</strong> Supporting documentation required; partial refund may be offered</li>
                  <li><strong>Cancellation by CrossMap Visa Consultants LLP:</strong> Full refund of all paid amounts</li>
                </ul>
              </div>

              {/* Contact */}
              <div style={{
                background: '#f8f9fa',
                padding: '30px',
                borderRadius: '15px'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Questions About Cancellations?
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginBottom: '15px'
                }}>
                  Contact our customer care team for assistance:
                </p>
                <p style={{
                  fontSize: '1.05rem',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  <strong>Email:</strong> <a href="mailto:support@crossmaptravels.com" style={{ color: 'hsl(214, 57%, 51%)' }}>support@crossmaptravels.com</a><br />
                  <strong>Phone:</strong> <a href="tel:+919814439633" style={{ color: 'hsl(214, 57%, 51%)' }}>+91 9814439633</a>
                </p>
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
