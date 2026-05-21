import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Smarter from './components/Smarter'
import Science from './components/Science'
import Awards from './components/Awards'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Philosophy />
      <Problem />
      <HowItWorks />
      <Benefits />
      <Smarter />
      <Science />
      <Awards />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
