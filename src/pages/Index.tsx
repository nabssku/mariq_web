import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCards from '@/components/ProductCards';
import GoogleMaps from '@/components/GoogleMaps';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCards />
      <GoogleMaps />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
