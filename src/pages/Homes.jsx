import { Phone, Mail } from 'lucide-react';
import SEO from '../utils/SEO';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';
import PropertyCard from '../components/ui/PropertyCard';
import CTASection from '../components/ui/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';
import { properties, contactInfo } from '../data';

const homeServices = [
  { title: 'Residential Real Estate',    desc: 'Premium residential properties designed for comfortable, modern living.' },
  { title: 'Agricultural Real Estate',   desc: 'Fertile, verified agricultural lands for farming and investment.' },
  { title: 'Real Estate Brokerage',      desc: 'Professional brokerage connecting buyers and sellers seamlessly.' },
  { title: 'Building Construction',      desc: 'Design and construction of residential and commercial structures.' },
  { title: 'Residential Land Sales',     desc: 'Affordable residential plots across prime locations in Nigeria.' },
  { title: 'Agricultural Land Sales',    desc: 'Documented agricultural land parcels for food production and investment.' },
];

function Reveal({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Homes() {
  return (
    <>
      <SEO title="Homes & Properties" description="Gamay Homes & Properties — Creating Wealth Through Real Estate. Residential and agricultural land sales, brokerage and construction in Nigeria." />
      <PageBanner
        title="Creating Wealth Through Real Estate"
        subtitle="From residential plots to agricultural land — accessible, documented, and professionally managed."
        breadcrumbs={[{ label: 'Homes & Properties' }]}
      />

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <Reveal>
            <SectionTitle eyebrow="What We Do" title="Our Real Estate Services" subtitle="Comprehensive land and property solutions tailored for individuals, families, and investors." />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="p-8 border border-gray-100 rounded-sm card-hover group">
                  <div className="w-10 h-10 bg-primary-50 group-hover:bg-primary-700 rounded-sm flex items-center justify-center mb-5 transition-colors duration-300">
                    <span className="text-primary-700 group-hover:text-white text-lg transition-colors">◈</span>
                  </div>
                  <h3 className="font-display text-xl font-600 text-primary-800 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section className="section-pad bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-pad relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="block w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
              <h2 className="font-display text-4xl md:text-5xl font-600 text-white mb-8">How We Do It</h2>
              <p className="text-blue-100 text-xl leading-relaxed italic font-display">
                "We provide affordable and seamless methods that make the path to land ownership straightforward and accessible — from documentation to delivery."
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <Reveal>
            <SectionTitle eyebrow="Featured Properties" title="Explore Our Listings" subtitle="Verified, documented properties available across Nigeria." />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <PropertyCard property={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-16 bg-gold-500">
        <div className="container-pad">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl font-600 text-white mb-2">Ready to own land?</h3>
              <p className="text-white/80 font-body">Contact us today to start your real estate journey.</p>
            </div>
            <div className="flex gap-4">
              <a href={`tel:${contactInfo.phone}`} className="bg-white text-gold-600 font-body font-600 px-7 py-3.5 rounded-sm flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm uppercase tracking-wide">
                <Phone size={16} /> Call Now
              </a>
              <a href={`mailto:${contactInfo.email}`} className="border-2 border-white text-white font-body font-600 px-7 py-3.5 rounded-sm flex items-center gap-2 hover:bg-white/10 transition-colors text-sm uppercase tracking-wide">
                <Mail size={16} /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
