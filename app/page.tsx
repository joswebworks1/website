import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBanner from "./components/TrustBanner";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBanner />
        <Services />
        <CaseStudies />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
