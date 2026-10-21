import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../data';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppLink('Hello Cab Services Mohali, I want to book a cab in Mohali.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-8 right-4 sm:right-8 z-50 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 rounded-full shadow-2xl border border-emerald-400/40 transition-all duration-150 hover:scale-105 active:scale-95 group focus:outline-hidden focus:ring-4 focus:ring-emerald-400"
        aria-label="Chat on WhatsApp +91 9815505661"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-white text-white" />
        <span className="font-bold text-sm sm:text-base pr-1 tracking-tight">
          WhatsApp 24/7
        </span>
      </a>
    </aside>
  );
}
