import './globals.css'

export const metadata = {
  title: 'CrossMap Tours and Travels - Domestic Tour Packages, Hotels & Taxi Services',
  description: 'CrossMap Tours and Travels - Explore India with our curated domestic tour packages across 13 states, hotel bookings, and reliable taxi services. Located in Amritsar, Punjab.',
  keywords: 'tour packages, domestic tours India, India travel, hotel booking, taxi services, Amritsar travel agency, CrossMap, tourism',
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
