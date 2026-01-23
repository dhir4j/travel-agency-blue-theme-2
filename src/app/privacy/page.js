import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export const metadata = {
  title: 'Privacy Policy - CrossMap Visa Consultants',
  description: 'Privacy Policy for CrossMap Visa Consultants - How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
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
              Privacy Policy
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
                  Introduction
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  CrossMap Visa Consultants ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Information We Collect
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginBottom: '15px'
                }}>
                  We collect information that you provide directly to us, including:
                </p>
                <ul style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  paddingLeft: '30px'
                }}>
                  <li>Personal identification information (Name, email address, phone number)</li>
                  <li>Passport and travel document details</li>
                  <li>Payment information for booking services</li>
                  <li>Travel preferences and requirements</li>
                  <li>Communication records with our team</li>
                </ul>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  How We Use Your Information
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginBottom: '15px'
                }}>
                  We use the information we collect to:
                </p>
                <ul style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  paddingLeft: '30px'
                }}>
                  <li>Process visa applications and tour bookings</li>
                  <li>Communicate with you about your bookings and inquiries</li>
                  <li>Provide customer support and respond to your requests</li>
                  <li>Send you updates, promotional materials, and newsletters (with your consent)</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal obligations and prevent fraud</li>
                </ul>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Information Sharing and Disclosure
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  paddingLeft: '30px'
                }}>
                  <li>Government authorities and embassies for visa processing</li>
                  <li>Tour operators and hotels for booking confirmations</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Service providers who assist in our operations (under confidentiality agreements)</li>
                </ul>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Data Security
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Your Rights
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginBottom: '15px'
                }}>
                  You have the right to:
                </p>
                <ul style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  paddingLeft: '30px'
                }}>
                  <li>Access and obtain a copy of your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Cookies
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  Our website uses cookies to enhance user experience and analyze website traffic. You can control cookie preferences through your browser settings.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: 'hsl(208, 97%, 12%)'
                }}>
                  Contact Us
                </h2>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)',
                  marginBottom: '15px'
                }}>
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <div style={{
                  background: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '10px',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'hsl(225, 8%, 42%)'
                }}>
                  <p><strong>Email:</strong> Crossmapvisaconsultant@gmail.com</p>
                  <p><strong>Phone:</strong> +91 7347347362</p>
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
