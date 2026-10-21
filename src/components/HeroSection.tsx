import { Phone, MessageSquare, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { DISPLAY_PHONE, TEL_LINK, getWhatsAppLink } from '../data';
import heroFleetImg from '../assets/images/fleet_swift_aura_ertiga_1789446895856.jpg';

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-white text-black pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Uber-Style Ride Request Card & Headlines */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* H1 - Required text */}
            <h1 
              style={{ fontSize: '29px', fontFamily: 'system-ui' }}
              className="font-black tracking-tight text-black leading-[1.12] mb-3"
            >
              Cab Services Mohali
            </h1>

            {/* Short Text - Required text */}
            <p className="text-base sm:text-lg text-neutral-600 font-normal mb-6 max-w-xl leading-relaxed">
              Book reliable cabs in Mohali for local travel, airport transfers and outstation trips at affordable fares.
            </p>

            {/* Prominent Phone Number Card */}
            <div className="w-full bg-neutral-50 rounded-2xl border border-neutral-200 p-5 sm:p-6 mb-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-amber-300 text-black font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-lg uppercase tracking-wider shadow-xs">
                  <span className="text-sm">⚡</span>
                  FAST &amp; EASY CAB BOOKING
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-white border border-neutral-300 px-3 py-1 rounded-full text-neutral-900 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  24/7 Live
                </span>
              </div>

              <div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-5 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">Direct Dispatch Phone</span>
                <a
                  href={TEL_LINK}
                  className="text-2xl sm:text-4xl font-black text-black hover:text-neutral-700 tracking-tight flex items-center gap-3 w-fit"
                  aria-label={`Call ${DISPLAY_PHONE}`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white animate-phone-ring" />
                  </div>
                  <span>{DISPLAY_PHONE}</span>
                </a>
              </div>

              {/* Primary CTA: Uber Large Call Now Button with Blink Effect */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  id="hero-primary-call-cta"
                  href={TEL_LINK}
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-black hover:bg-neutral-800 active:bg-neutral-900 text-white text-lg font-bold py-4 px-6 rounded-xl transition-all shadow-sm animate-call-blink"
                  aria-label={`Call Now – ${DISPLAY_PHONE}`}
                >
                  <span className="text-xl animate-phone-ring">📞</span>
                  <span className="tracking-tight">Call Now – {DISPLAY_PHONE}</span>
                </a>

                {/* Secondary CTA: WhatsApp Booking */}
                <a
                  id="hero-secondary-whatsapp-cta"
                  href={getWhatsAppLink('Hello Cab Services Mohali, I want to book a cab in Mohali.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300 text-base font-bold py-4 px-6 rounded-xl transition-colors"
                  aria-label="WhatsApp Booking"
                >
                  <MessageSquare className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

            </div>

            {/* Trust Badges with Highlighted Icons */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-neutral-200">
              <div className="flex items-center gap-2.5 bg-neutral-50 border border-neutral-200/90 px-3 py-2 rounded-xl shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-black flex items-center justify-center shrink-0 shadow-xs ring-2 ring-amber-300">
                  <ShieldCheck className="w-4.5 h-4.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight">
                  Safe &amp; Secure Rides
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-neutral-50 border border-neutral-200/90 px-3 py-2 rounded-xl shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-black flex items-center justify-center shrink-0 shadow-xs ring-2 ring-amber-300">
                  <Clock className="w-4.5 h-4.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight">
                  24/7 Support
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-neutral-50 border border-neutral-200/90 px-3 py-2 rounded-xl shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-black flex items-center justify-center shrink-0 shadow-xs ring-2 ring-amber-300">
                  <Sparkles className="w-4.5 h-4.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight">
                  Clean AC Cabs
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Uber Style Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-100 rounded-3xl p-3 border border-neutral-200 shadow-xs">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-neutral-200">
                <img
                  src={heroFleetImg}
                  alt="Swift, Aura & Ertiga Taxi Services Mohali"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Swift • Aura • Ertiga Fleet
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-black text-sm sm:text-base">Swift, Aura &amp; Ertiga Available</h4>
                  <p className="text-xs text-neutral-500">Local commute, airport drops &amp; outstation cabs</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                  ➔
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
