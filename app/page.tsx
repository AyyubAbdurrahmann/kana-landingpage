import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import HowItWorksSection from "../components/HowItWorksSection";
import Feature from "../components/Feature";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <HowItWorksSection/>
      <Feature/>
      <Benefits/>
      <Footer/>
    </div>
  );
}
