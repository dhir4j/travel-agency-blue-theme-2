import './globals.css'

export const metadata = {
  title: 'CrossMap Visa Consultants - Tours, Visa Services, Hotels & Taxi',
  description: 'CrossMap Visa Consultants - Expert visa services for 40+ countries, domestic tour packages across India, hotel bookings, and taxi services. Located in Amritsar, Punjab.',
  keywords: 'visa consultants, tour packages, domestic tours India, visa services, hotel booking, taxi services, Amritsar travel agency, CrossMap',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://i.postimg.cc/LXkGGm9H/favicon.png" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet"/>
      </head>
      <body id="top">
        {children}
        <script async type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script async noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  )
}
