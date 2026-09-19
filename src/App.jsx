import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import StoreBenefits from './sections/StoreBenefits';
import PlatformFee from './sections/PlatformFee';
import StoreFeatures from './sections/StoreFeatures';
import StoreShowcase from './sections/StoreShowcase';
import RiderShowcase from './sections/RiderShowcase';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <StoreBenefits />
        <PlatformFee />
        {/*<StoreFeatures />*/}
        <StoreShowcase />
        <RiderShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}