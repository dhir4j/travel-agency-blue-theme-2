'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export default function HotelsPage() {
  const [destination, setDestination] = useState('')
  const [destinationSuggestions, setDestinationSuggestions] = useState([])
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(1)
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Set default dates
  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    setCheckIn(today.toISOString().split('T')[0])
    setCheckOut(tomorrow.toISOString().split('T')[0])
  }, [])

  const searchDestinations = async (query) => {
    if (query.length < 2) return
    
    try {
      const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${encodeURIComponent(query)}`, {
        headers: {
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
          'x-rapidapi-key': '953c42d675msh29bbf826a0b8a2dp15d12bjsn973de23f3375'
        }
      })
      
      const data = await response.json()
      
      if (data.status && data.data) {
        // Filter for India destinations
        const indiaDestinations = data.data.filter(dest => 
          dest.cc1 === 'in' || dest.country === 'India'
        )
        setDestinationSuggestions(indiaDestinations)
      }
    } catch (error) {
      console.error('Error searching destinations:', error)
    }
  }

  const searchHotels = async () => {
    if (!selectedDestination || !checkIn || !checkOut) return
    
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${selectedDestination.dest_id}&search_type=${selectedDestination.dest_type}&adults=${adults}&children_age=${children > 0 ? '0,17' : ''}&room_qty=${rooms}&page_number=1&units=metric&temperature_unit=c&languagecode=en-us&currency_code=INR&location=IN`, {
        headers: {
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
          'x-rapidapi-key': '953c42d675msh29bbf826a0b8a2dp15d12bjsn973de23f3375'
        }
      })
      
      const data = await response.json()
      
      if (data.status && data.data?.hotels) {
        setHotels(data.data.hotels)
      } else {
        setError('No hotels found for this destination and dates.')
        setHotels([])
      }
    } catch (error) {
      console.error('Error searching hotels:', error)
      setError('Failed to search hotels. Please try again.')
      setHotels([])
    }
    
    setLoading(false)
  }

  const handleBookHotel = (hotel) => {
    const bookingData = {
      hotelName: hotel.property.name,
      destination: selectedDestination.label,
      checkIn: checkIn,
      checkOut: checkOut,
      adults: adults,
      children: children,
      rooms: rooms,
      price: Math.round(hotel.property.priceBreakdown?.grossPrice?.value || 0)
    }
    window.location.href = `/checkout?type=hotel&data=${encodeURIComponent(JSON.stringify(bookingData))}`
  }

  return (
    <>
      <Header />
      <main>
        <section className="tours-hero-modern">
          <div className="container">
            <h1 className="h1">Hotel Booking</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: '0.95' }}>
              Find and book the perfect hotel for your stay in India
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              {/* Search Form */}
              <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
                <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Search Hotels</h2>
                
                <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
                  <div style={{ position: 'relative' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Destination</label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => {
                        setDestination(e.target.value)
                        searchDestinations(e.target.value)
                      }}
                      placeholder="Enter destination in India"
                      style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                    />
                    {destinationSuggestions.length > 0 && (
                      <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', border: '1px solid #ddd', borderRadius: '8px', zIndex: 10, maxHeight: '200px', overflowY: 'auto' }}>
                        {destinationSuggestions.map((dest, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedDestination(dest)
                              setDestination(dest.label)
                              setDestinationSuggestions([])
                            }}
                            style={{ padding: '12px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
                          >
                            <div style={{ fontWeight: '600' }}>{dest.name}</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>{dest.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Check-in Date</label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Check-out Date</label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn}
                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Adults</label>
                      <select
                        value={adults}
                        onChange={(e) => setAdults(parseInt(e.target.value))}
                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                      >
                        {[1,2,3,4,5,6].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Children</label>
                      <select
                        value={children}
                        onChange={(e) => setChildren(parseInt(e.target.value))}
                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                      >
                        {[0,1,2,3,4].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Rooms</label>
                      <select
                        value={rooms}
                        onChange={(e) => setRooms(parseInt(e.target.value))}
                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                      >
                        {[1,2,3,4,5].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {error && (
                  <div style={{ background: '#fee', color: '#c33', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #fcc' }}>
                    {error}
                  </div>
                )}

                <button
                  onClick={searchHotels}
                  disabled={!selectedDestination || !checkIn || !checkOut || loading}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '15px' }}
                >
                  {loading ? 'Searching...' : 'Search Hotels'}
                </button>
              </div>

              {/* Hotels Results */}
              {hotels.length > 0 && (
                <div>
                  <h3 style={{ marginBottom: '30px' }}>Available Hotels ({hotels.length} found)</h3>
                  <div style={{ display: 'grid', gap: '20px' }}>
                    {hotels.map((hotel, index) => (
                      <div key={index} style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                        <div style={{ display: 'flex', gap: '20px' }}>
                          <div style={{ width: '200px', height: '150px', flexShrink: 0 }}>
                            <img 
                              src={hotel.property.photoUrls?.[0] || '/placeholder-hotel.jpg'} 
                              alt={hotel.property.name}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </div>
                          <div style={{ flex: 1, padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                              <div>
                                <h4 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>{hotel.property.name}</h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                  {hotel.property.propertyClass && (
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                      {[...Array(hotel.property.propertyClass)].map((_, i) => (
                                        <span key={i} style={{ color: '#ffa500' }}>⭐</span>
                                      ))}
                                    </div>
                                  )}
                                  {hotel.property.reviewScore && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                      <span style={{ background: 'var(--bright-navy-blue)', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>
                                        {hotel.property.reviewScore}
                                      </span>
                                      <span style={{ fontSize: '14px', color: '#666' }}>
                                        {hotel.property.reviewScoreWord} ({hotel.property.reviewCount} reviews)
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--bright-navy-blue)' }}>
                                  ₹{hotel.property.priceBreakdown?.grossPrice?.value ? Math.round(hotel.property.priceBreakdown.grossPrice.value).toLocaleString() : 'N/A'}
                                </div>
                                <div style={{ fontSize: '12px', color: '#666' }}>per night</div>
                              </div>
                            </div>
                            
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div style={{ fontSize: '14px', color: '#666' }}>
                                📍 {selectedDestination?.name}
                              </div>
                              <button 
                                className="btn btn-secondary"
                                style={{ padding: '8px 20px' }}
                                onClick={() => handleBookHotel(hotel)}
                              >
                                Book Now
                              </button>
                            </div>
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
