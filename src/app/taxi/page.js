'use client'

import { useState } from 'react'
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
  const [loading, setLoading] = useState(false)

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
    if (!selectedPickup || !selectedDropoff) return
    
    setLoading(true)
    try {
      const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/taxi/searchTaxi?pick_up_place_id=${selectedPickup.googlePlaceId}&drop_off_place_id=${selectedDropoff.googlePlaceId}&currency_code=INR`, {
        headers: {
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
          'x-rapidapi-key': '953c42d675msh29bbf826a0b8a2dp15d12bjsn973de23f3375'
        }
      })
      
      const data = await response.json()
      
      if (data.status && data.data?.results) {
        setTaxiResults(data.data.results)
      }
    } catch (error) {
      console.error('Error searching taxis:', error)
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
              <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Book Your Taxi</h2>
                
                <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
                  <div style={{ position: 'relative' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Pickup Location</label>
                    <input
                      type="text"
                      value={pickupQuery}
                      onChange={(e) => {
                        setPickupQuery(e.target.value)
                        searchLocations(e.target.value, setPickupSuggestions)
                      }}
                      placeholder="Enter pickup location in India"
                      style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
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
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Drop-off Location</label>
                    <input
                      type="text"
                      value={dropoffQuery}
                      onChange={(e) => {
                        setDropoffQuery(e.target.value)
                        searchLocations(e.target.value, setDropoffSuggestions)
                      }}
                      placeholder="Enter drop-off location in India"
                      style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
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
                </div>

                <button
                  onClick={searchTaxis}
                  disabled={!selectedPickup || !selectedDropoff || loading}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '15px' }}
                >
                  {loading ? 'Searching...' : 'Search Taxis'}
                </button>
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
                              onClick={() => window.location.href = '/contact?inquiry=' + encodeURIComponent(`Taxi Booking Request:\nFrom: ${selectedPickup.name}\nTo: ${selectedDropoff.name}\nVehicle: ${taxi.category}\nPrice: ₹${Math.round(parseFloat(taxi.price.amount) * 83)}`)}
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
