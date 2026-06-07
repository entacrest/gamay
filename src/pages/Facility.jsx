import * as Icons from 'lucide-react';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import SEO from '../utils/SEO';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';
import { facilityServices, industries, contactInfo } from '../data';

function Reveal({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const benefits = [
  'Trained and vetted cleaning professionals',
  'Eco-friendly cleaning products used',
  'Flexible scheduling — daily, weekly, or monthly',
  'Insured services for your peace of mind',
  'Transparent pricing with no hidden charges',
  'Consistent quality assured on every visit',
];

const products = ['All-Surface Disinfectant', 'Heavy-Duty Degreaser', 'Eco Floor Cleaner', 'Glass & Mirror Spray', 'Industrial Sanitiser', 'Odour Neutraliser'];

export default function Facility() {
  return (
    <>
      <SEO title="Facility Management & Environmental Services" description="Gamay Facility Management — Professional residential and commercial cleaning, facility management, and environmental solutions across Nigeria." />
      <PageBanner
        title="Professional Cleaning & Environmental Solutions"
        subtitle="Residential and commercial cleaning services delivered with precision and care."
        breadcrumbs={[{ label: 'Facility Management' }]}
      />

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <Reveal>
            <SectionTitle eyebrow="Residential Cleaning" title="Our Cleaning Services" subtitle="Every service designed to maintain hygiene, safety, and comfort in your space." />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityServices.map((s, i) => {
              const Icon = Icons[s.icon] || Icons.Box;
              return (
                <Reveal key={s.title} delay={(i % 3) * 80}>
                  <div className="p-8 border border-gray-100 rounded-sm card-hover group">
                    <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-600 rounded-sm flex items-center justify-center mb-6 transition-colors duration-300">
                      <Icon size={22} className="text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display text-xl font-600 text-primary-800 mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-pad bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="container-pad relative z-10">
          <Reveal>
            <SectionTitle eyebrow="Our Products" title="Professional Grade Cleaning Products" light />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <div className="bg-white/10 border border-white/20 rounded-sm p-5 text-center text-white font-body text-sm font-600 hover:bg-white/20 transition-colors">
                  {p}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <Reveal>
            <SectionTitle eyebrow="Industries Served" title="Who We Clean For" center />
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {industries.map((ind, i) => {
              const Icon = Icons[ind.icon] || Icons.Box;
              return (
                <Reveal key={ind.label} delay={i * 60}>
                  <div className="bg-white border border-gray-100 rounded-sm p-6 text-center card-hover group">
                    <div className="w-12 h-12 bg-emerald-50 group-hover:bg-emerald-600 rounded-sm flex items-center justify-center mx-auto mb-4 transition-colors">
                      <Icon size={20} className="text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-600 font-body text-primary-800">{ind.label}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <SectionTitle eyebrow="Why Choose Us" title="Benefits of Choosing Gamay Facility Services" />
              <ul className="space-y-4">
                {benefits.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="bg-gray-50 border border-gray-100 rounded-sm p-10">
                <h3 className="font-display text-2xl font-600 text-primary-800 mb-6">Request a Quote</h3>
                <div className="space-y-4">
                  <a href={`tel:${contactInfo.phone}`} className="btn-primary w-full justify-center">
                    <Phone size={16} /> Call {contactInfo.phone}
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="btn-outline-dark w-full justify-center">
                    <Mail size={16} /> Email Us
                  </a>
                </div>
                <p className="text-center text-xs text-gray-400 mt-4">We respond within 24 hours</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
