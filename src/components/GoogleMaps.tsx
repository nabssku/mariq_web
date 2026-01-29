import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ornamentPattern from '@/assets/ornament-pattern.png';

const GoogleMaps = () => {
  // Coordinates for Jl. Warinoi V No. 2, Bunulrejo, Blimbing Kota Malang
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5036961!2d112.6469!3d-7.9576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62825a9f42d1f%3A0x7f6d41f0c6e8b0a!2sJl.%20Warinoi%20V%20No.2%2C%20Bunulrejo%2C%20Kec.%20Blimbing%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1699000000000!5m2!1sid!2sid";

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Warinoi V No. 2, Bunulrejo, Blimbing Kota Malang',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Setiap Hari: 07.00 - 15.00 WIB',
    },
    {
      icon: Phone,
      title: 'Telepon / WhatsApp',
      content: '082127081744 / 082245766262',
    },
  ];

  return (
    <section id="lokasi" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute inset-0 section-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-medium text-sm tracking-wider uppercase mb-4">
            Temukan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 ornament-divider">
            <span className="px-8">Lokasi Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            Kunjungi outlet kami untuk menikmati kelezatan Coto Makassar langsung di tempat
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="absolute inset-0 border-4 border-gold/30 rounded-2xl pointer-events-none z-10" />
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi MariQ Coto Makassar"
              className="w-full"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            {/* Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-lg border border-border/50 card-hover"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-1">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-maroon-light text-primary-foreground font-semibold py-6 rounded-xl text-lg transition-all duration-300 shadow-lg"
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jl.+Warinoi+V+No.2,+Bunulrejo,+Blimbing+Kota+Malang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Buka di Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Ornament */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <img
          src={ornamentPattern}
          alt=""
          className="w-full h-12 object-cover"
        />
      </div>
    </section>
  );
};

export default GoogleMaps;
