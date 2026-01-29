import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6282127081744"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp group"
      aria-label="Chat via WhatsApp"
    >
      <div className="relative">
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center w-16 h-16 bg-whatsapp hover:bg-whatsapp-hover rounded-full shadow-lg shadow-whatsapp/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
          <MessageCircle className="w-7 h-7 text-primary-foreground fill-current" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-foreground text-background text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Chat dengan kami!
            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-foreground" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
