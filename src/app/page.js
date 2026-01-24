import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Destinations from '@/components/Destinations'
import Popular from '@/components/Popular'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <article>
          <Hero />
          <Destinations />
          <Popular />
          <About />
          <Blog />
        </article>
      </main>

      <Footer />
      <GoTop />
    </>
  )
}
