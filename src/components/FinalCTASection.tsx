import { Phone, MessageSquare, Clock, MapPin, Check } from 'lucide-react';
import { DISPLAY_PHONE, TEL_LINK, getWhatsAppLink } from '../data';

export default function FinalCTASection() {
  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-24 md:pb-16 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Uber Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-neutral-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
          <Clock className="w-4 h-4 text-emerald-400" />
          <span>24/7 On-Demand Cab Service in Mohali</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          Ready to ride? Book your cab now.
        </h2>

        <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Book reliable cab services in Mohali, Chandigarh and Zirakpur for local travel, airport transfers and outstation trips. Choose one-way or round-trip rides with easy phone and WhatsApp booking.
        </p>

        {/* Uber Style Booking Command Center Card */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 max-w-xl mx-auto mb-10 shadow-2xl">
          <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider mb-2">
            Direct 24/7 Booking Hotline
          </div>
          
          <a
            href={TEL_LINK}
            className="text-3xl sm:text-5xl font-black text-white hover:text-neutral-300 transition-colors inline-flex items-center justify-center gap-3 mb-8 tracking-tight"
            aria-label={`Call ${DISPLAY_PHONE}`}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-black flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 fill-black text-black" />
            </div>
            <span>{DISPLAY_PHONE}</span>
          </a>

          {/* Large Call & WhatsApp Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              id="final-call-now-btn"
              href={TEL_LINK}
              className="flex-1 inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-200 text-black text-lg sm:text-xl font-bold py-4 px-6 rounded-xl transition-all shadow-sm animate-call-blink-white"
              aria-label={`Call Now – ${DISPLAY_PHONE}`}
            >
              <span className="text-2xl animate-phone-ring">📞</span>
              <span>Call Now</span>
            </a>

            <a
              id="final-whatsapp-btn"
              href={getWhatsAppLink('Hello Cab Services Mohali, I want to book a cab right now.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-base sm:text-lg font-semibold py-4 px-6 rounded-xl transition-colors"
              aria-label="WhatsApp Booking"
            >
              <MessageSquare className="w-5 h-5 fill-emerald-500 text-emerald-500" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>

        {/* Uber Bullet Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-400 font-medium mb-12">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-white" />
            Local Mohali Rides
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-white" />
            Chandigarh Airport Drops
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-white" />
            Outstation One-Way &amp; Round-Trip
          </span>
        </div>

        {/* Minimal Uber Footer Bar */}
        <div className="pt-8 border-t border-neutral-900 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-bold text-neutral-300">
            <span>Cab Services Mohali</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Mohali, Punjab
            </span>
          </div>
          <p>
            Call 24/7: <a href={TEL_LINK} className="text-white underline font-semibold hover:text-neutral-300">{DISPLAY_PHONE}</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
