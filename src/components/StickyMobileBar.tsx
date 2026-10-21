import { Phone, MessageSquare } from 'lucide-react';
import { DISPLAY_PHONE, TEL_LINK, getWhatsAppLink } from '../data';

export default function StickyMobileBar() {
  return (
    <div
      id="mobile-sticky-cta"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-black/95 backdrop-blur-md border-t border-neutral-800 p-2.5 shadow-2xl flex items-center gap-2.5"
    >
      {/* Uber Primary Call Button on Mobile with Blink */}
      <a
        href={TEL_LINK}
        className="flex-1 flex items-center justify-center gap-2 bg-white active:bg-neutral-200 text-black font-extrabold py-3.5 px-3 rounded-xl text-base shadow-sm transition-all animate-call-blink-white"
        aria-label={`Call Now ${DISPLAY_PHONE}`}
      >
        <Phone className="w-5 h-5 fill-black text-black animate-phone-ring" />
        <span className="tracking-tight">Call: {DISPLAY_PHONE}</span>
      </a>

      {/* Uber WhatsApp Button on Mobile */}
      <a
        href={getWhatsAppLink('Hello Cab Services Mohali, I want to book a cab.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 bg-neutral-900 border border-neutral-700 active:bg-neutral-800 text-white font-bold py-3.5 px-4 rounded-xl text-base transition-all"
        aria-label="WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-emerald-500 text-emerald-500" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
