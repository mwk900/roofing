import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import Diagnostic from '@/components/landing/Diagnostic';
import Services from '@/components/landing/Services';
import HowWeWork from '@/components/landing/HowWeWork';
import TrustBadges from '@/components/landing/TrustBadges';
import Reviews from '@/components/landing/Reviews';
import Pricing from '@/components/landing/Pricing';
import Coverage from '@/components/landing/Coverage';
import FAQ from '@/components/landing/FAQ';
import QuoteForm from '@/components/landing/QuoteForm';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Diagnostic />
        <Services />
        <HowWeWork />
        <TrustBadges />
        <Reviews />
        <Pricing />
        <Coverage />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
