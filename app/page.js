import UtilBar from '@/components/UtilBar';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ValueProps from '@/components/ValueProps';
import EligibilityCalc from '@/components/EligibilityCalc';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Compare from '@/components/Compare';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <UtilBar />
      <Nav />
      <Hero />
      <TrustStrip />
      <ValueProps />
      <EligibilityCalc />
      <Process />
      <Pricing />
      <Compare />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
