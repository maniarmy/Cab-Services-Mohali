import { Users, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { CAR_OPTIONS, TEL_LINK, getWhatsAppLink } from '../data';

export default function CarOptionsSection() {
  return (
    <section id="car-options" className="py-14 sm:py-18 bg-white text-black border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 block mb-1">
            Select Your Ride
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Book Airport, Local &amp; Outstation Taxi Services in Mohali
          </h2>
        </div>

        {/* Uber Ride Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAR_OPTIONS.map((car) => (
            <div
              key={car.id}
              className="bg-white hover:bg-neutral-50/80 border-2 border-neutral-200 hover:border-black rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between group shadow-xs"
            >
              <div>
                {/* Vehicle Thumbnail with Uber-Style Backdrop */}
                <div className="relative aspect-16/10 bg-neutral-100 overflow-hidden flex items-center justify-center p-3 border-b border-neutral-200">
                  <img
                    src={car.imageSrc}
                    alt={`${car.name} cab service in Mohali`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 rounded-lg"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Uber Seating Pill */}
                  <div className="absolute top-2.5 right-2.5 bg-black text-white text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{car.seats}</span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-0.5">
                    {car.category}
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3">
                    {car.name}
                  </h3>

                  <ul className="space-y-1.5 mb-2">
                    {car.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Uber Style Action Buttons */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
                  <a
                    href={TEL_LINK}
                    className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-bold py-3 px-3 rounded-xl text-sm transition-colors"
                    aria-label={`Call to book ${car.name}`}
                  >
                    <Phone className="w-4 h-4 fill-white text-white" />
                    <span>Book {car.name}</span>
                  </a>
                  
                  <a
                    href={getWhatsAppLink(`Hi Cab Services Mohali, I want to book a ${car.name} in Mohali.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-black font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors"
                    aria-label={`WhatsApp for ${car.name}`}
                  >
                    <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
