'use client'

'use client'

export default function TourSearch() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const destination = formData.get('destination')
    const people = formData.get('people')
    const checkin = formData.get('checkin')
    const checkout = formData.get('checkout')
    
    // Create inquiry message
    const message = `Tour Inquiry:
Destination: ${destination}
Number of People: ${people}
Check-in Date: ${checkin}
Check-out Date: ${checkout}
    
Please provide tour packages and pricing for the above requirements.`
    
    // Redirect to contact page with inquiry details
    const encodedMessage = encodeURIComponent(message)
    window.location.href = `/contact?inquiry=${encodedMessage}`
  }

  return (
    <section className="tour-search">
      <div className="container">
        <form onSubmit={handleSubmit} className="tour-search-form">
          <div className="input-wrapper">
            <label htmlFor="destination" className="input-label">Search Destination</label>
            <input type="text" name="destination" id="destination" required placeholder="Enter Destination" className="input-field" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="people" className="input-label">Number of People</label>
            <input type="number" name="people" id="people" required placeholder="Enter Number of People" className="input-field" min="1" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="checkin" className="input-label">Check-in Date</label>
            <input type="date" name="checkin" id="checkin" required className="input-field" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="checkout" className="input-label">Check-out Date</label>
            <input type="date" name="checkout" id="checkout" required className="input-field" />
          </div>

          <button type="submit" className="btn btn-secondary">Inquire Now</button>
        </form>
      </div>
    </section>
  )
}
