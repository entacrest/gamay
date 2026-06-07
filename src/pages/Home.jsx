import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, TrendingUp, Globe2, Award } from 'lucide-react';
import SEO from '../utils/SEO';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import CTASection from '../components/ui/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';
import { businessUnits, coreValues, testimonials } from '../data';

function RevealSection({ children, className = '', delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const stats = [
  { icon: TrendingUp, value: '500+', label: 'Projects Delivered' },
  { icon: Globe2,     value: '12+',  label: 'States in Nigeria'  },
  { icon: Award,      value: '8+',   label: 'Years of Excellence' },
];

export default function Home() {
  return (
    <>
      <SEO title="Building Sustainable Value Across Africa" description="Gamay Group — Integrated solutions in Real Estate, Multimedia, Facility Management and Environmental Services across Africa." />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-primary-800 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-primary-700/70" />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-transparent" />
        {/* Circles */}
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] border border-white/5 rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="container-pad relative z-10 pt-20 pb-12">
          <div className="max-w-4xl">
            <span className="inline-block font-body text-xs font-600 uppercase tracking-[0.3em] text-gold-400 mb-8 animate-fade-in">
              Gamay Group — Africa's Integrated Solutions Partner
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-600 text-white leading-[0.95] mb-8 animate-fade-up">
              Building Sustainable
              <span className="block text-gold-400 italic">Value Across Africa</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Integrated solutions in Real Estate, Multimedia, Facility Management and Environmental Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '350ms' }}>
              <Link to="/homes" className="btn-gold">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-20 max-w-lg animate-fade-up" style={{ animationDelay: '500ms' }}>
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="border-l border-white/10 pl-6 first:border-l-0 first:pl-0">
                <div className="font-display text-3xl font-600 text-gold-400 mb-1">{value}</div>
                <div className="text-xs text-blue-200 font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <a href="#about" aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 hover:text-gold-400 transition-colors">
          <span className="text-xs font-body uppercase tracking-widest">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </section>

      {/* ── About Snapshot ── */}
      <section id="about" className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <SectionTitle
                eyebrow="Who We Are"
                title="Africa's Integrated Value Creator"
                subtitle="Gamay Group is a multi-disciplinary enterprise delivering excellence across real estate, creative services, and environmental solutions."
              />
              <div className="space-y-6">
                <div className="border-l-4 border-gold-500 pl-6">
                  <h3 className="font-display text-lg font-600 text-primary-800 mb-2">Our Vision</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">To lead in delivering core economic solutions across Africa, supporting development through innovation and excellence.</p>
                </div>
                <div className="border-l-4 border-primary-400 pl-6">
                  <h3 className="font-display text-lg font-600 text-primary-800 mb-2">Our Mission</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">To plan, develop, and deliver integrated commercial solutions across real estate, agro-services, food, logistics, and media — creating sustainable value across Africa.</p>
                </div>
              </div>
              <Link to="/about" className="btn-outline-dark mt-8 inline-flex">
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </RevealSection>

            <RevealSection delay={150}>
              {/* Decorative visual block */}
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-primary-700 to-primary-900 rounded-sm" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500 rounded-sm flex items-center justify-center p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="font-display text-4xl font-600 text-white">8+</div>
                    <div className="text-xs font-body text-white/80 mt-1">Years Building Africa</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold-500 rounded-sm" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── Business Units ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <RevealSection>
            <SectionTitle eyebrow="Our Business Units" title="Three Pillars of Excellence" center
              subtitle="Diversified, integrated, and purpose-driven divisions built to serve Africa's growing economy." />
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessUnits.map((unit, i) => (
              <RevealSection key={unit.id} delay={i * 120}>
                <ServiceCard
                  icon={unit.icon}
                  title={unit.name}
                  description={unit.description}
                  href={unit.slug}
                  color={unit.color}
                  services={unit.services}
                />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-pad bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-60" />
        <div className="container-pad relative z-10">
          <RevealSection>
            <SectionTitle eyebrow="Why Choose Gamay" title="Built on Four Pillars" light center
              subtitle="Our work is guided by values that put clients first and results first." />
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <RevealSection key={v.title} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gold-500/20 rounded-sm flex items-center justify-center mx-auto mb-5">
                    <span className="text-gold-400 text-2xl">◈</span>
                  </div>
                  <h3 className="font-display text-xl font-600 text-white mb-3">{v.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <RevealSection>
            <SectionTitle eyebrow="Client Testimonials" title="What Our Clients Say" center />
          </RevealSection>
          <RevealSection delay={150}>
            <TestimonialSlider testimonials={testimonials} />
          </RevealSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
