import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ornamentPattern from '@/assets/ornament-pattern.png';

const CTA = () => {
  return (
    <section id="tentang" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${ornamentPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 text-gold text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Bersertifikat Halal
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Sudah Lapar?{' '}
            <span className="text-gradient-gold">Pesan Sekarang!</span>
          </h2>

          {/* Description */}
          <p className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Jangan biarkan perut kosong! Hubungi kami sekarang untuk memesan 
            Coto Makassar lezat yang siap diantar ke lokasi Anda atau dinikmati langsung di tempat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-maroon-dark font-bold px-10 py-7 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-gold/30"
            >
              <a href="https://wa.me/6282127081744" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-2" />
                Pesan via WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cream/30 bg-cream/10 text-cream hover:bg-cream hover:text-maroon-dark font-bold px-10 py-7 rounded-full text-lg transition-all duration-300"
            >
              <a href="tel:082127081744">
                <Phone className="w-6 h-6 mr-2" />
                Telepon Langsung
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-cream/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-cream/70">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-lg">🏪</span>
              </div>
              <span className="text-sm">Makan di Tempat</span>
            </div>
            <div className="flex items-center gap-2 text-cream/70">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-lg">🛵</span>
              </div>
              <span className="text-sm">Delivery Tersedia</span>
            </div>
            <div className="flex items-center gap-2 text-cream/70">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-lg">📦</span>
              </div>
              <span className="text-sm">Take Away</span>
            </div>
            <div className="flex items-center gap-2 text-cream/70">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-lg">🎉</span>
              </div>
              <span className="text-sm">Catering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--secondary))"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTA;
