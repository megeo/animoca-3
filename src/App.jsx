import { Globe, Heart, MessageCircle } from 'lucide-react'
import AboutSection from './components/AboutSection'
import FeaturedVideoSection from './components/FeaturedVideoSection'
import ServicesSection from './components/ServicesSection'
import BeliefSection from './components/BeliefSection'
import Footer from './components/Footer'

const VIDEO_URL =
  '/openart-video_832ac92d_1775641660390.mp4'

export default function App() {
  return (
    <div className="bg-black text-white">

      {/* ─── Hero Section ─── */}
      <section className="min-h-screen overflow-hidden relative flex flex-col">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Navbar */}
        <nav className="relative z-20 px-6 md:px-16 py-6 flex items-center justify-between">
          <img src="/av-logo2-ai.png" alt="Animoca Ventures" className="h-20" />
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium">Home</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium">Portfolio</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium">About</a>
            </div>
            <span className="text-white text-sm font-medium cursor-pointer">Contact</span>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">
              Submit Deck
            </button>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-start justify-end px-6 md:px-16 pb-24 text-left">
          <h1
            className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We Are The<br />Web3 Builders' <em className="italic">VC.</em>
          </h1>

          <p className="text-white text-sm leading-relaxed mt-6 max-w-xl">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
          </p>

          <button className="liquid-glass rounded-full px-8 py-3 text-[#52C5E8] text-sm font-medium hover:bg-[#52C5E8]/10 transition-colors mt-6">
            Reach out to us
          </button>
        </div>

        {/* Social icons */}
        <div className="absolute z-10 bottom-24 right-6 md:right-16 flex gap-4">
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Heart size={20} />
          </button>
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <MessageCircle size={20} />
          </button>
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Globe size={20} />
          </button>
        </div>
      </section>

      <AboutSection />
      <FeaturedVideoSection />
      <ServicesSection />
      <BeliefSection />
      <Footer />
    </div>
  )
}
