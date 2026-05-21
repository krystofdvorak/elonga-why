import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Science from './components/Science'
import Comparison from './components/Comparison'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Benefits />
      <Science />
      <Comparison />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
