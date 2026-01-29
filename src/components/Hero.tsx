import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import menuSpecial from '@/assets/menu-special.jpg';
import ornamentPattern from '@/assets/ornament-pattern.png';

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Traditional Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `url(${ornamentPattern})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: '400px'
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 text-gold text-sm font-medium">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Spesialis Coto Makassar Sejak 2010
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream leading-tight">
              Nikmati Kelezatan{' '}
              <span className="text-gradient-gold">Coto Makassar</span>{' '}
              Autentik
            </h1>

            {/* Description */}
            <p className="text-cream/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Rasakan cita rasa tradisional khas Makassar dengan bumbu rempah pilihan 
              yang diwariskan turun-temurun. Halal & Nikmat!
            </p>

            {/* Location Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-cream/70 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Jl. Warinoi V No. 2, Bunulrejo, Blimbing Kota Malang</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-maroon-dark font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/25"
              >
                <a href="https://wa.me/6282141584133" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Pesan via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-gold border-cream/30 text-cream hover:bg-cream/10 font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300"
              >
                <a href="#menu">
                  Lihat Menu
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-cream/10 mt-8">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-gold">14+</p>
                <p className="text-cream/60 text-sm">Tahun Pengalaman</p>
              </div>
              <div className="w-px h-12 bg-cream/20" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-gold">1000+</p>
                <p className="text-cream/60 text-sm">Pelanggan Puas</p>
              </div>
              <div className="w-px h-12 bg-cream/20" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-gold">100%</p>
                <p className="text-cream/60 text-sm">Halal</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-gold/30 animate-pulse" />
              <div className="absolute -inset-8 rounded-full border border-gold/10" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-maroon-dark/50">
                <img
                  src={menuSpecial}
                  alt="Coto Makassar MariQ"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gold text-maroon-dark rounded-2xl px-6 py-4 shadow-xl">
                <p className="text-2xl font-display font-bold">⭐ 4.9</p>
                <p className="text-sm font-medium">Rating Pelanggan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ornament */}
      <div className="absolute bottom-0 left-0 right-0">
        <img
          src={ornamentPattern}
          alt=""
          className="w-full h-16 object-cover opacity-40"
        />
      </div>
    </section>
  );
};

export default Hero;
