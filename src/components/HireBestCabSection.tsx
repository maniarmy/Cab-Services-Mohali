import { ShieldCheck, Car, Clock, MapPin, Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { TEL_LINK, getWhatsAppLink } from '../data';

export default function HireBestCabSection() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Card Container mimicking reference banner layout */}
        <div className="bg-neutral-50 rounded-3xl border border-neutral-200/90 p-5 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Rounded Passenger Taxi Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-square lg:aspect-[4/4.2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-neutral-200 border border-neutral-200">
                <img
                  src="/assets/aistudio/passenger_cab_mohali.png"
                  alt="Customer boarding Cab Services Mohali Taxi"
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xs">
                  Mohali &amp; Tricity Taxi
                </div>
              </div>
            </div>

            {/* Right Column: Heading, Subtitle, Exact User Paragraph, 4 Badges, Book Now CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-black text-black tracking-tight leading-[1.18] mb-2">
                Hire the Best Cab Services in Mohali
              </h2>

              {/* Subheading */}
              <h3 className="text-base sm:text-lg font-bold text-neutral-800 mb-3.5">
                Safe, Comfortable &amp; Reliable Rides
              </h3>

              {/* User's Exact Paragraph */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                Looking for reliable Cab Services Mohali? We provide convenient taxi booking for local travel across Mohali, Chandigarh and Zirakpur, along with airport transfers and outstation journeys. Whether you need to hire local taxi services for daily travel or plan a one-way trip or round trip, we offer comfortable rides to suit your travel needs. Book your taxi easily with Cab Services Mohali and enjoy convenient pickup, professional service and affordable travel options.
              </p>

              {/* 4 Feature Badges with Black Circle Icons matching website styling */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-1 py-4 my-2 border-y border-neutral-200">
                {/* 1. Safe & Trusted Drivers */}
                <div className="flex flex-col items-center text-center px-1 sm:px-2">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-2 shadow-xs shrink-0">
                    <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">
                    Safe &amp; Trusted Drivers
                  </span>
                </div>

                {/* 2. Clean & Well-Maintained Vehicles */}
                <div className="flex flex-col items-center text-center px-1 sm:px-2 sm:border-l sm:border-neutral-200">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-2 shadow-xs shrink-0">
                    <Car className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">
                    Clean &amp; Well-Maintained Vehicles
                  </span>
                </div>

                {/* 3. 24/7 Support */}
                <div className="flex flex-col items-center text-center px-1 sm:px-2 sm:border-l sm:border-neutral-200">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-2 shadow-xs shrink-0 relative">
                    <Clock className="w-6 h-6 stroke-[2.2]" />
                    <span className="absolute text-[8px] font-black bottom-1 right-1 bg-white text-black px-0.5 rounded-xs leading-none">
                      24/7
                    </span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">
                    24/7 Support
                  </span>
                </div>

                {/* 4. Local & Outstation Rides */}
                <div className="flex flex-col items-center text-center px-1 sm:px-2 sm:border-l sm:border-neutral-200">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-2 shadow-xs shrink-0">
                    <MapPin className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">
                    Local &amp; Outstation Rides
                  </span>
                </div>
              </div>

              {/* Action Buttons: Black Book Now matching website theme + WhatsApp Enquiry */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center justify-center gap-3 bg-black hover:bg-neutral-800 active:bg-neutral-900 text-white font-black text-base sm:text-lg px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 group animate-call-blink"
                  aria-label="Book Now - Direct Call"
                >
                  <Phone className="w-5 h-5 fill-white text-white animate-phone-ring" />
                  <span>Book Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={getWhatsAppLink('Hello Cab Services Mohali, I want to book a taxi.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-sm sm:text-base px-6 py-3.5 rounded-full border border-neutral-300 shadow-2xs transition-colors"
                  aria-label="WhatsApp Booking Enquiry"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  <span>WhatsApp Query</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
