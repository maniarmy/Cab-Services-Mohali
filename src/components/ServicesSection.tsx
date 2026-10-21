import { MapPin, Plane, Navigation, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { CAB_SERVICES, TEL_LINK, getWhatsAppLink } from '../data';

export default function ServicesSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'airport':
        return <Plane className="w-6 h-6 text-white" />;
      case 'outstation':
        return <Navigation className="w-6 h-6 text-white" />;
      default:
        return <MapPin className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-18 bg-white text-black border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Mohali Local &amp; Outstation Taxi Booking in Mohali
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAB_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-white border border-neutral-300 text-neutral-800 px-2.5 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-black mb-2 group-hover:underline flex items-center gap-1.5">
                  <span>{service.title}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 flex items-center gap-2">
                <a
                  href={TEL_LINK}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-bold py-2.5 px-3 rounded-lg text-sm transition-colors"
                  aria-label={`Call to book ${service.title}`}
                >
                  <Phone className="w-4 h-4 fill-white text-white" />
                  <span>Call to Book</span>
                </a>
                <a
                  href={getWhatsAppLink(`Hi Cab Services Mohali, I need ${service.title} in Mohali.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 bg-neutral-200 hover:bg-neutral-300 text-black rounded-lg transition-colors"
                  aria-label={`WhatsApp enquiry for ${service.title}`}
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
