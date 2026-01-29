import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import logoBanner from '@/assets/logo-banner.jpeg';
import ornamentPattern from '@/assets/ornament-pattern.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/@mariq.cotomakassar',
      color: 'hover:text-pink-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/@mariq cotomakassar',
      color: 'hover:text-blue-500',
    },
  ];

  const quickLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Menu', href: '#menu' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  return (
    <footer id="kontak" className="bg-maroon-dark relative overflow-hidden">
      {/* Top Ornament */}
      <div className="absolute top-0 left-0 right-0 opacity-30">
        <img
          src={ornamentPattern}
          alt=""
          className="w-full h-12 object-cover"
        />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img
              src={logoBanner}
              alt="MariQ Coto Makassar"
              className="h-16 rounded-lg mb-6"
            />
            <p className="text-cream/70 mb-6 max-w-md">
              MariQ Coto Makassar menyajikan hidangan khas Makassar dengan cita rasa autentik 
              yang telah dipercaya sejak 2010. Bersertifikat Halal dan menggunakan bahan-bahan 
              berkualitas tinggi.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream transition-all duration-300 ${social.color} hover:bg-cream/20`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              {/* TikTok */}
              <a
                href="https://tiktok.com/@mariq.cotomakassar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream transition-all duration-300 hover:text-white hover:bg-cream/20"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-gold text-lg mb-6">Menu Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-gold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">
                  Jl. Warinoi V No. 2, Bunulrejo, Blimbing Kota Malang
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="text-cream/70 text-sm">
                  <a href="tel:6282141584133" className="hover:text-gold transition-colors">
                    6282141584133
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:mariqcotomakassar@gmail.com"
                  className="text-cream/70 text-sm hover:text-gold transition-colors"
                >
                  mariqcotomakassar@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  Setiap Hari: 07.00 - 15.00 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm text-center md:text-left">
              © {currentYear} MariQ Coto Makassar. Semua Hak Dilindungi.
            </p>
            <div className="flex items-center gap-2 text-cream/50 text-sm">
              <span>Dibuat dengan</span>
              <span className="text-destructive">❤️</span>
              <span>di Malang</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
