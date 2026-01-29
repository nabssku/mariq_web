import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import cotoMakassar from '@/assets/coto-makassar.jpg';
import pallubasa from '@/assets/pallubasa.jpg';
import ketupat from '@/assets/ketupat.jpg';
import ornamentPattern from '@/assets/ornament-pattern.png';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  isPopular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Coto Makassar Daging',
    description: 'Sup daging sapi khas Makassar dengan bumbu rempah pilihan, disajikan dengan ketupat atau nasi',
    price: 'Rp 28.000',
    image: cotoMakassar,
    isPopular: true,
  },
  {
    id: 2,
    name: 'Ketupat',
    description: 'Ketupat tradisional yang dibuat fresh setiap hari, pelengkap sempurna untuk coto',
    price: 'Rp 5.000',
    image: ketupat,
  },
];

const ProductCards = () => {
  return (
    <section id="menu" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 section-pattern opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-medium text-sm tracking-wider uppercase mb-4">
            Menu Spesial Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 ornament-divider">
            <span className="px-8">Pilihan Menu Favorit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            Nikmati berbagai hidangan khas Makassar yang diolah dengan resep autentik 
            dan bahan-bahan berkualitas tinggi
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={item.id}
              className="group bg-card border-none shadow-lg card-hover overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-transparent to-transparent" />
                
                {/* Popular Badge */}
                {item.isPopular && (
                  <div className="absolute top-4 right-4 bg-gold text-maroon-dark text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Favorit
                  </div>
                )}

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 bg-maroon text-cream font-bold px-4 py-2 rounded-lg">
                  {item.price}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-maroon-light text-primary-foreground font-semibold rounded-lg transition-all duration-300"
                >
                  <a href="https://wa.me/6282127081744" target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Pesan Sekarang
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 rounded-full transition-all duration-300"
          >
            <a href="https://wa.me/6282127081744" target="_blank" rel="noopener noreferrer">
              Lihat Menu Lengkap
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom Ornament */}
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

export default ProductCards;
