import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { POPULAR_ROUTES, TEL_LINK, getWhatsAppLink } from '../data';

export default function PopularRoutesSection() {
  return (
    <section id="popular-routes" className="py-14 sm:py-18 bg-neutral-50 text-black border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 block mb-1">
              Intercity Rides
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Popular Routes
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md">
            One-way and round-trip highway cabs connecting Chandigarh and Mohali with northern cities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="bg-white hover:bg-neutral-100/60 border border-neutral-200 hover:border-black rounded-xl p-4 transition-all duration-150 flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-500 mb-2">
                  <span>Outstation Cab</span>
                  <span>{route.distanceApprox}</span>
                </div>

                <div className="flex items-center gap-2 text-black font-extrabold text-base mb-1">
                  <span>{route.origin}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                  <span className="text-black">{route.destination}</span>
                </div>

                <p className="text-xs text-neutral-500 mb-4">
                  Dedicated sanitized cab • Door-to-door
                </p>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-neutral-100">
                <a
                  href={TEL_LINK}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-black hover:bg-neutral-800 text-white font-bold py-2 px-2 rounded-lg text-xs transition-colors"
                  aria-label={`Call to book cab from ${route.origin} to ${route.destination}`}
                >
                  <Phone className="w-3 h-3 fill-white text-white" />
                  <span>Call to Book</span>
                </a>
                <a
                  href={getWhatsAppLink(`Hi Cab Services Mohali, I want to book a cab from ${route.origin} to ${route.destination}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-black rounded-lg text-xs transition-colors"
                  aria-label={`WhatsApp for ${route.origin} to ${route.destination}`}
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-black" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
