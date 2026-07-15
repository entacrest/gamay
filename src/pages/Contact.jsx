import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEO from '../utils/SEO';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import useScrollReveal from '../hooks/useScrollReveal';
import { contactInfo } from '../data';

const FORMSPREE_ID = 'mpqvqadz';

function Reveal({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const contactDetails = [
  { icon: Phone,  label: 'Phone',         value: contactInfo.phone,  href: `tel:${contactInfo.phone}` },
  { icon: Mail,   label: 'Email',         value: contactInfo.email,  href: `mailto:${contactInfo.email}` },
  { icon: MapPin, label: 'Location',      value: 'Nigeria, Africa',  href: contactInfo.mapUrl },
  { icon: Clock,  label: 'Business Hours', value: 'Mon–Sat: 8am – 6pm', href: null },
];

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Gamay Group — reach us by phone, email, or our contact form for inquiries about real estate, multimedia, and facility services." />
      <PageBanner
        title="Let's Start a Conversation"
        subtitle="Reach out to us about any of our services. We respond within 24 hours."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <Reveal>
                <SectionTitle eyebrow="Contact Information" title="Get in Touch" />
                <div className="space-y-6 mb-10">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-50 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Icon size={17} className="text-primary-700" />
                      </div>
                      <div>
                        <div className="text-xs font-600 font-body uppercase tracking-wide text-gray-400 mb-0.5">{label}</div>
                        {href ? (
                          <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer" className="text-primary-800 hover:text-primary-600 transition-colors text-sm font-body">
                            {value}
                          </a>
                        ) : (
                          <span className="text-primary-800 text-sm font-body">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp */}
                <a href={`https://wa.me/${contactInfo.whatsapp.replace('+','')}?text=Hello%20Gamay%20Group`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 text-white font-body font-600 text-sm px-6 py-3.5 rounded-sm hover:bg-green-600 transition-colors">
                  <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white"><path d="M16.003 3.2A12.785 12.785 0 0 0 3.2 15.986c0 2.256.59 4.459 1.71 6.39L3.2 28.8l6.57-1.685a12.78 12.78 0 0 0 6.233 1.59h.006A12.785 12.785 0 0 0 28.8 15.92 12.785 12.785 0 0 0 16.003 3.2z"/></svg>
                  Chat on WhatsApp
                </a>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal delay={150}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100 h-96">
        <iframe
          title="Gamay Group Location"
          // src="https://maps.google.com/maps?q=Nigeria&output=embed&z=5"
          src="https://www.google.com/maps?q=6.601935,3.3371757&z=18&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
