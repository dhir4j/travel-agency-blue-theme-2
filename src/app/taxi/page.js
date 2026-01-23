'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export default function TaxiPage() {
  const [pickupQuery, setPickupQuery] = useState('')
  const [dropoffQuery, setDropoffQuery] = useState('')
  const [pickupSuggestions, setPickupSuggestions] = useState([])
  const [dropoffSuggestions, setDropoffSuggestions] = useState([])
  const [selectedPickup, setSelectedPickup] = useState(null)
  const [selectedDropoff, setSelectedDropoff] = useState(null)
  const [taxiResults, setTaxiResults] = useState([])
  const [pickupDate, setPickupDate] = useState('')
  const [pickupTime, setPickupTime] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Set default date and time on component mount
  useEffect(() => {
    const now = new Date()
    const today = now.toISOString().split('T')[0]
    const currentTime = now.toTimeString().split(' ')[0].substring(0, 5)
    setPickupDate(today)
    setPickupTime(currentTime)
  }, [])

  const searchLocations = async (query, setSuggestions) => {
    if (query.length < 2) return
    
    try {
      const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/taxi/searchLocation?query=${encodeURIComponent(query)}`, {
        headers: {
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
          'x-rapidapi-key': '953c42d675msh29bbf826a0b8a2dp15d12bjsn973de23f3375'
        }
      })
      
      const data = await response.json()
      
      if (data.status && data.data) {
        // Filter for India locations only
        const indiaLocations = data.data.filter(location => 
          location.countryCode === 'in' || location.country === 'India'
        )
        setSuggestions(indiaLocations)
      }
    } catch (error) {
      console.error('Error searching locations:', error)
    }
  }

  const searchTaxis = async () => {
    if (!selectedPickup || !selectedDropoff || !pickupDate || !pickupTime) return
    
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/taxi/searchTaxi?pick_up_place_id=${selectedPickup.googlePlaceId}&drop_off_place_id=${selectedDropoff.googlePlaceId}&pick_up_date=${pickupDate}&pick_up_time=${pickupTime}&currency_code=INR`, {
        headers: {
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
          'x-rapidapi-key': '953c42d675msh29bbf826a0b8a2dp15d12bjsn973de23f3375'
        }
      })
      
      const data = await response.json()
      
      if (data.status && data.data?.results) {
        setTaxiResults(data.data.results)
      } else {
        setError(data.data?.message || 'No taxis available for this route and time. Please try different locations or time.')
        setTaxiResults([])
      }
    } catch (error) {
      console.error('Error searching taxis:', error)
      setError('Failed to search taxis. Please try again.')
      setTaxiResults([])
    }
    setLoading(false)
  }

  return (
    <>
      <Header />
      <main>
        <section className="tours-hero-modern">
          <div className="container">
            <h1 className="h1">Taxi Services</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: '0.95' }}>
              Book reliable taxi services across India
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ background: 'white', padding: taxiResults.length > 0 ? '20px' : '40px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                {taxiResults.length === 0 && <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Book Your Taxi</h2>}
                
                <div style={{ 
                  display: 'grid', 
                  gap: taxiResults.length > 0 ? '15px' : '20px', 
                  gridTemplateColumns: '1fr',
                  marginBottom: taxiResults.length > 0 ? '20px' : '30px' 
                }}>
                  <div style={{ position: 'relative' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: taxiResults.length > 0 ? '14px' : '16px' }}>Pickup Location</label>
                    <input
                      type="text"
                      value={pickupQuery}
                      onChange={(e) => {
                        setPickupQuery(e.target.value)
                        searchLocations(e.target.value, setPickupSuggestions)
                      }}
                      placeholder="Enter pickup location in India"
                      style={{ width: '100%', padding: taxiResults.length > 0 ? '10px' : '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: taxiResults.length > 0 ? '14px' : '16px' }}
                    />
                    {pickupSuggestions.length > 0 && (
                      <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', border: '1px solid #ddd', borderRadius: '8px', zIndex: 10, maxHeight: '200px', overflowY: 'auto' }}>
                        {pickupSuggestions.map((location, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedPickup(location)
                              setPickupQuery(location.name)
                              setPickupSuggestions([])
                            }}
                            style={{ padding: '12px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
                          >
                            <div style={{ fontWeight: '600' }}>{location.name}</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>{location.city}, {location.country}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ position: 'relative' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: taxiResults.length > 0 ? '14px' : '16px' }}>Drop-off Location</label>
                    <input
                      type="text"
                      value={dropoffQuery}
                      onChange={(e) => {
                        setDropoffQuery(e.target.value)
                        searchLocations(e.target.value, setDropoffSuggestions)
                      }}
                      placeholder="Enter drop-off location in India"
                      style={{ width: '100%', padding: taxiResults.length > 0 ? '10px' : '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: taxiResults.length > 0 ? '14px' : '16px' }}
                    />
                    {dropoffSuggestions.length > 0 && (
                      <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', border: '1px solid #ddd', borderRadius: '8px', zIndex: 10, maxHeight: '200px', overflowY: 'auto' }}>
                        {dropoffSuggestions.map((location, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedDropoff(location)
                              setDropoffQuery(location.name)
                              setDropoffSuggestions([])
                            }}
                            style={{ padding: '12px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
                          >
                            <div style={{ fontWeight: '600' }}>{location.name}</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>{location.city}, {location.country}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: taxiResults.length > 0 ? '14px' : '16px' }}>Date</label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      style={{ width: '100%', padding: taxiResults.length > 0 ? '10px' : '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: taxiResults.length > 0 ? '14px' : '16px' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: taxiResults.length > 0 ? '14px' : '16px' }}>Time</label>
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      style={{ width: '100%', padding: taxiResults.length > 0 ? '10px' : '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: taxiResults.length > 0 ? '14px' : '16px' }}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'end' }}>
                    <button
                      onClick={searchTaxis}
                      disabled={!selectedPickup || !selectedDropoff || !pickupDate || !pickupTime || loading}
                      className="btn btn-primary"
                      style={{ width: '100%', padding: taxiResults.length > 0 ? '10px 20px' : '15px', fontSize: taxiResults.length > 0 ? '14px' : '16px' }}
                    >
                      {loading ? 'Searching...' : 'Search'}
                    </button>
                  </div>
                </div>

                {error && (
                  <div style={{ background: '#fee', color: '#c33', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #fcc' }}>
                    {error}
                  </div>
                )}
              </div>

              {taxiResults.length > 0 && (
                <div style={{ marginTop: '40px' }}>
                  <h3 style={{ marginBottom: '20px' }}>Available Taxis</h3>
                  <div style={{ display: 'grid', gap: '20px' }}>
                    {taxiResults.map((taxi, index) => (
                      <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                          <img src={taxi.imageUrl} alt={taxi.category} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                          <div style={{ flex: 1 }}>
                            <h4 style={{ margin: '0 0 8px 0' }}>{taxi.category}</h4>
                            <p style={{ margin: '0 0 8px 0', color: '#666' }}>{taxi.description}</p>
                            <div style={{ display: 'flex', gap: '20px', fontSize: '14px', color: '#666' }}>
                              <span>👥 {taxi.passengerCapacity} passengers</span>
                              <span>🧳 {taxi.bags} bags</span>
                              <span>⏱️ {taxi.duration} min</span>
                            </div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--bright-navy-blue)' }}>
                              ₹{Math.round(parseFloat(taxi.price.amount) * 83)}
                            </div>
                            <div style={{ fontSize: '14px', color: '#666' }}>
                              {taxi.supplierName}
                            </div>
                            <button 
                              className="btn btn-secondary"
                              style={{ marginTop: '10px', padding: '8px 16px' }}
                              onClick={() => {
                                const bookingData = {
                                  pickup: selectedPickup.name,
                                  dropoff: selectedDropoff.name,
                                  vehicle: taxi.category,
                                  price: Math.round(parseFloat(taxi.price.amount) * 83),
                                  date: pickupDate,
                                  time: pickupTime
                                }
                                window.location.href = `/checkout?type=taxi&data=${encodeURIComponent(JSON.stringify(bookingData))}`
                              }}
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GoTop />
    </>
  )
}
