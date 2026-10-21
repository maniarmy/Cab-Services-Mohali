import { Phone, MessageSquare } from 'lucide-react';
import { DISPLAY_PHONE, TEL_LINK, getWhatsAppLink } from '../data';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-black text-white border-b border-neutral-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
        {/* Uber Style Brand Identity */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="text-xl sm:text-2xl font-black tracking-tighter text-white">
            Cab Services <span className="font-light text-neutral-400">Mohali</span>
          </div>
          <span className="hidden sm:inline-block text-xs font-semibold bg-neutral-800 text-neutral-200 px-2.5 py-1 rounded-full border border-neutral-700">
            Mohali • Chandigarh
          </span>
        </a>

        {/* Uber Navigation Style Active Tab */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#hero" className="text-white border-b-2 border-white pb-1 font-bold">
            Ride
          </a>
          <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
            Services
          </a>
          <a href="#popular-routes" className="text-neutral-400 hover:text-white transition-colors">
            Routes
          </a>
          <a href="#car-options" className="text-neutral-400 hover:text-white transition-colors">
            Vehicles
          </a>
        </div>

        {/* Immediate Call Button in Uber Pill Style */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="header-call-btn"
            href={TEL_LINK}
            className="flex items-center gap-2 bg-white hover:bg-neutral-100 text-black font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base transition-colors shadow-xs animate-call-blink-white"
            aria-label="Call Cab Services Mohali"
          >
            <Phone className="w-4 h-4 fill-black text-black animate-phone-ring" />
            <span className="hidden xs:inline">Call:</span>
            <span className="tracking-tight">{DISPLAY_PHONE}</span>
          </a>

          <a
            id="header-whatsapp-btn"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium border border-neutral-700 px-4 py-2 rounded-full text-sm transition-colors"
            aria-label="WhatsApp Cab Services Mohali"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
