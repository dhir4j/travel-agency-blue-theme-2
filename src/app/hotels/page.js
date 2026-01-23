import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export const metadata = {
  title: 'Hotel Booking Services - CrossMap',
  description: 'Find and book the best hotels for your stay with CrossMap Tours and Travels.',
}

export default function HotelsPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{
          background: 'linear-gradient(135deg, hsl(214, 57%, 51%) 0%, hsl(214, 72%, 33%) 100%)',
          padding: '120px 0 80px',
          color: 'white',
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <ion-icon name="bed-outline" style={{ fontSize: '80px', marginBottom: '30px' }}></ion-icon>
              <h1 className="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px', fontWeight: '700' }}>
                Hotel Booking Services
              </h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.95' }}>
                Coming Soon! We&apos;re working on bringing you the best hotel booking experience.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: '0.9' }}>
                For now, please contact us for hotel booking assistance.
              </p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-secondary" style={{
                  padding: '15px 35px',
                  fontSize: '1rem'
                }}>
                  Contact Us
                </a>
                <a href="tel:+917347347362" className="btn" style={{
                  padding: '15px 35px',
                  fontSize: '1rem',
                  background: 'white',
                  color: 'hsl(214, 57%, 51%)',
                  border: 'none'
                }}>
                  <ion-icon name="call-outline" style={{ marginRight: '8px' }}></ion-icon>
                  Call Now
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
