import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export const metadata = {
  title: 'Terms of Service - CrossMap Visa Consultants LLP',
  description: 'Terms and conditions for using CrossMap Visa Consultants LLP services.',
}

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: '0.95' }}>
              Last updated: January 2026
            </p>
          </div>
        </section>

        <section style={{ padding: '60px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Agreement to Terms
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  By accessing and using the services of CrossMap Visa Consultants LLP, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Services Provided
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginBottom: '15px'
                }}>
                  CrossMap Visa Consultants LLP provides:
                </p>
                <ul style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  paddingLeft: '30px'
                }}>
                  <li>Domestic tour packages across India</li>
                  <li>Hotel booking assistance</li>
                  <li>Taxi and transportation services</li>
                  <li>Travel planning and advisory services</li>
                </ul>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Booking and Payment Terms
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  <strong>Payment:</strong> Full or partial payment may be required at the time of booking. Payment terms will be communicated during the booking process.
                </p>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginTop: '15px'
                }}>
                  <strong>Confirmation:</strong> Bookings are confirmed only upon receipt of payment and written confirmation from CrossMap Visa Consultants LLP.
                </p>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginTop: '15px'
                }}>
                  <strong>Price Changes:</strong> Prices are subject to change without notice. Once a booking is confirmed and paid for, the price will not change.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Tour Packages
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  <strong>Itinerary Changes:</strong> We reserve the right to modify tour itineraries due to unforeseen circumstances, including weather, political situations, or operational requirements.
                </p>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginTop: '15px'
                }}>
                  <strong>Participant Conduct:</strong> Participants are expected to conduct themselves appropriately during tours. We reserve the right to remove any participant whose behavior is deemed disruptive.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Liability Limitations
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  CrossMap Visa Consultants LLP acts as an intermediary between clients and service providers (hotels, airlines, tour operators). We are not liable for:
                </p>
                <ul style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  paddingLeft: '30px',
                  marginTop: '15px'
                }}>
                  <li>Delays, cancellations, or changes by airlines, hotels, or tour operators</li>
                  <li>Loss, damage, or theft of personal property</li>
                  <li>Personal injury or illness during travel</li>
                  <li>Force majeure events beyond our control</li>
                </ul>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Intellectual Property
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  All content on our website, including text, graphics, logos, and images, is the property of CrossMap Visa Consultants LLP and protected by copyright laws.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Changes to Terms
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Contact Information
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginBottom: '15px'
                }}>
                  For questions about these Terms of Service, please contact us:
                </p>
                <div style={{
                  background: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '10px',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  <p><strong>Email:</strong> info@crossmaptravels.com</p>
                  <p><strong>Phone:</strong> +91 9814439633</p>
                  <p><strong>Address:</strong> SCF-33 First Floor, D Block Market, Ranjit Avenue, Amritsar, Punjab</p>
                </div>
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
