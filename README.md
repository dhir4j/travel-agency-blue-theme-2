# CrossMap Tours and Travels

A modern, responsive travel and tours website built with Next.js 14, featuring a beautiful UI design with smooth animations and interactive components.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth transitions
- **Interactive Components**: Dynamic navigation, scroll effects, and interactive elements
- **Tour Search**: Comprehensive tour search form with date pickers
- **Popular Destinations**: Showcase of top travel destinations
- **Tour Packages**: 174 curated domestic tour packages across 13 Indian states
  - Dynamic tour detail pages with full itineraries
  - Pricing, duration, and inclusion details
  - Image galleries for each destination
  - Online booking system
- **Hotel Booking**: Hotel booking services (coming soon)
- **Taxi Services**: Reliable taxi and cab services (coming soon)
- **Photo Gallery**: Beautiful image gallery from travelers
- **Newsletter Subscription**: Email subscription form in footer
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (React)
- **Styling**: CSS3 with CSS Variables
- **Icons**: Ionicons
- **Fonts**: Google Fonts (Poppins, Montserrat, Turret Road)

## Project Structure

```
CrossMap Travels/
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles
│   │   ├── layout.js             # Root layout
│   │   ├── page.js               # Home page
│   │   ├── tours/                # Tour pages
│   │   │   ├── page.js           # All tours listing
│   │   │   └── [code]/           # Dynamic tour detail pages
│   │   ├── about/                # About Us page
│   │   ├── contact/              # Contact page
│   │   ├── hotels/               # Hotels page (coming soon)
│   │   ├── taxi/                 # Taxi services page (coming soon)
│   │   ├── privacy/              # Privacy policy
│   │   ├── terms/                # Terms of service
│   │   ├── refund/               # Refund & cancellation policy
│   │   └── customer-care/        # Customer care & FAQs
│   └── components/
│       ├── Header.js             # Navigation header
│       ├── Hero.js               # Hero section
│       ├── TourSearch.js         # Tour search form
│       ├── Popular.js            # Popular destinations
│       ├── Package.js            # Tour packages
│       ├── Gallery.js            # Photo gallery
│       ├── CTA.js                # Call to action
│       ├── Footer.js             # Footer
│       └── GoTop.js              # Back to top button
├── data/
│   └── crossmap_tours_complete.json  # Tour data for 174 packages
├── public/                       # Static assets
├── package.json                  # Dependencies
├── next.config.js                # Next.js configuration
└── README.md                     # This file
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd "CrossMap Travels"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Key Components

### Header
- Sticky navigation with scroll effect
- Mobile-responsive menu
- Social media links
- Contact information

### Hero Section
- Full-width background image
- Call-to-action buttons
- Engaging tagline

### Tour Search
- Destination search
- Date pickers for check-in/out
- Number of travelers input
- Inquiry form submission

### Popular Destinations
- Grid layout of featured destinations
- Star ratings
- Clickable destination cards

### Tour Packages
- **Main Tours Page** (`/tours`): Browse 174 domestic tour packages
  - Filter by state (13 Indian states)
  - Search functionality
  - Pricing and duration display
  - Tour ratings
- **Individual Tour Pages** (`/tours/[code]`):
  - Full itinerary details
  - Image galleries
  - Inclusions and exclusions
  - Pricing breakdown
  - Online booking form
  - Dynamic routing for all tours

### Gallery
- Responsive image grid
- Hover effects
- Traveler-submitted photos

### Footer
- Brand information
- Contact details
- Newsletter subscription
- Social links
- Legal links

## Customization

### Updating Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
    --bright-navy-blue: hsl(214, 57%, 51%);
    --united-nations-blue: hsl(214, 56%, 58%);
    /* Add your custom colors */
}
```

### Updating Content

- **Destinations**: Edit the `destinations` array in `src/components/Popular.js`
- **Packages**: Edit the `packages` array in `src/components/Package.js`
- **Gallery Images**: Edit the `galleryImages` array in `src/components/Gallery.js`
- **Contact Info**: Update contact details in `src/components/Header.js` and `src/components/Footer.js`

### Adding Images

Place custom images in the `public/` directory and reference them using relative paths:

```jsx
<img src="/your-image.jpg" alt="Description" />
```

## Performance Optimization

- **Image Loading**: Uses lazy loading for images
- **Code Splitting**: Automatic code splitting with Next.js
- **CSS Optimization**: Optimized CSS with minimal redundancy
- **Client Components**: Only interactive components use 'use client' directive

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Backend integration for booking system
- User authentication and profiles
- Payment gateway integration
- Dynamic content management
- Multi-language support
- Advanced search filters
- Blog section
- Customer reviews and testimonials

## License

This project is created for CrossMap Tours and Travels.

## Contact

For questions or support regarding this website:
- General Inquiries: info@crossmaptravels.com
- Tour Bookings & Sales: sales@crossmaptravels.com
- Customer Support: support@crossmaptravels.com
- Phone: +91 7347347362
- Address: SCF-33 First Floor, D Block Market, Ranjit Avenue, Amritsar, Punjab, India

---

Built with ❤️ using Next.js
