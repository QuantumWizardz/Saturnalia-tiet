import {HeroSection} from '../components/homepage/hero-section'
import {Footer} from '../components/homepage/Footer'
import ThaparInstituteFooter from '../components/homepage/ThaparInstituteFooter'
import Navbar from '../components/homepage/Navbar'


function App() {
  return (
    <div
      className="w-full h-screen">
      <Navbar />
      <HeroSection />
      {/* <ThaparInstituteFooter /> */}
      <Footer />
    </div>
  )
}

export default App
