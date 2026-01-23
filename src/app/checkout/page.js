'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

function CheckoutForm() {
  const searchParams = useSearchParams()
  const [bookingData, setBookingData] = useState(null)
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  const [utrNumber, setUtrNumber] = useState('')
  const [paymentStep, setPaymentStep] = useState('details') // details, payment, validating, success
  const [isValidating, setIsValidating] = useState(false)

  useEffect(() => {
    const type = searchParams.get('type')
    const data = searchParams.get('data')
    
    if (data) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(data))
        setBookingData({ type, ...parsedData })
      } catch (error) {
        console.error('Error parsing booking data:', error)
      }
    }
  }, [searchParams])

  const handleCustomerSubmit = (e) => {
    e.preventDefault()
    setPaymentStep('payment')
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    if (utrNumber.length === 12) {
      setIsValidating(true)
      setPaymentStep('validating')
      
      // Simulate validation process
      setTimeout(() => {
        setPaymentStep('success')
        setIsValidating(false)
      }, 3000)
    }
  }

  if (!bookingData) {
    return (
      <>
        <Header />
        <main style={{ padding: '100px 0', textAlign: 'center' }}>
          <div className="container">
            <h1>Invalid Booking Request</h1>
            <p>Please go back and try again.</p>
          </div>
        </main>
        <Footer />
        <GoTop />
      </>
    )
  }

  return (
    <>
      <Header />
      <main style={{ padding: '100px 0 50px', background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Booking Summary */}
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              <h2 style={{ marginBottom: '20px', color: 'var(--bright-navy-blue)' }}>Booking Summary</h2>
              
              {bookingData.type === 'taxi' ? (
                <div>
                  <h3 style={{ marginBottom: '15px' }}>Taxi Booking</h3>
                  <div style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
                    <div><strong>From:</strong> {bookingData.pickup}</div>
                    <div><strong>To:</strong> {bookingData.dropoff}</div>
                    <div><strong>Vehicle:</strong> {bookingData.vehicle}</div>
                    <div><strong>Date:</strong> {bookingData.date}</div>
                    <div><strong>Time:</strong> {bookingData.time}</div>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 style={{ marginBottom: '15px' }}>Tour Package</h3>
                  <div style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
                    <div><strong>Package:</strong> {bookingData.name}</div>
                    <div><strong>Duration:</strong> {bookingData.duration}</div>
                    <div><strong>Destinations:</strong> {bookingData.destinations}</div>
                  </div>
                </div>
              )}
              
              <div style={{ borderTop: '2px solid #eee', paddingTop: '15px', fontSize: '24px', fontWeight: 'bold', color: 'var(--bright-navy-blue)' }}>
                Total Amount: ₹{bookingData.price}
              </div>
            </div>

            {/* Customer Details Step */}
            {paymentStep === 'details' && (
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                <h2 style={{ marginBottom: '20px' }}>Customer Details</h2>
                <form onSubmit={handleCustomerSubmit}>
                  <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={customerData.name}
                      onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                      required
                      style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={customerData.email}
                      onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                      required
                      style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={customerData.phone}
                      onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                      required
                      style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                    />
                    <textarea
                      placeholder="Address"
                      value={customerData.address}
                      onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
                      required
                      rows="3"
                      style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>
                    Proceed to Payment
                  </button>
                </form>
              </div>
            )}

            {/* Payment Step */}
            {paymentStep === 'payment' && (
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                <h2 style={{ marginBottom: '20px' }}>UPI Payment</h2>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <p style={{ marginBottom: '20px', fontSize: '18px' }}>Scan QR Code to Pay ₹{bookingData.price}</p>
                  <img 
                    src="/qrcode.png" 
                    alt="UPI QR Code" 
                    style={{ width: '250px', height: '250px', border: '2px solid #ddd', borderRadius: '12px' }}
                  />
                  <p style={{ marginTop: '15px', color: '#666' }}>
                    Pay using any UPI app (GPay, PhonePe, Paytm, etc.)
                  </p>
                </div>
                
                <form onSubmit={handlePaymentSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                      Enter 12-digit UTR Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter UTR number from payment app"
                      value={utrNumber}
                      onChange={(e) => setUtrNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
                      required
                      maxLength="12"
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        border: '1px solid #ddd', 
                        borderRadius: '8px',
                        fontSize: '16px',
                        letterSpacing: '1px'
                      }}
                    />
                    <small style={{ color: '#666', marginTop: '5px', display: 'block' }}>
                      You can find the UTR number in your payment app after successful payment
                    </small>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={utrNumber.length !== 12}
                    style={{ 
                      width: '100%', 
                      padding: '15px',
                      opacity: utrNumber.length !== 12 ? 0.5 : 1
                    }}
                  >
                    Verify Payment
                  </button>
                </form>
              </div>
            )}

            {/* Validating Step */}
            {paymentStep === 'validating' && (
              <div style={{ background: 'white', padding: '50px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏳</div>
                <h2 style={{ marginBottom: '15px' }}>Validating Payment</h2>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                  Please wait while we verify your payment with the bank...
                </p>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  border: '3px solid #f3f3f3',
                  borderTop: '3px solid var(--bright-navy-blue)',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto'
                }}></div>
              </div>
            )}

            {/* Success Step */}
            {paymentStep === 'success' && (
              <div style={{ background: 'white', padding: '50px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px', color: '#28a745' }}>✅</div>
                <h2 style={{ marginBottom: '15px', color: '#28a745' }}>Payment Successful!</h2>
                <p style={{ marginBottom: '20px', fontSize: '18px' }}>
                  Your booking has been confirmed. You will receive a confirmation email shortly.
                </p>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
                  <p><strong>Booking ID:</strong> CMT{Date.now().toString().slice(-6)}</p>
                  <p><strong>UTR Number:</strong> {utrNumber}</p>
                  <p><strong>Amount Paid:</strong> ₹{bookingData.price}</p>
                </div>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                  <a href="/" className="btn btn-primary">Back to Home</a>
                  <a href="/contact" className="btn btn-secondary">Contact Support</a>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
      <Footer />
      <GoTop />
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutForm />
    </Suspense>
  )
}
