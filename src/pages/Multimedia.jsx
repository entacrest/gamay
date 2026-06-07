import * as Icons from 'lucide-react';
import { Phone, Mail } from 'lucide-react';
import SEO from '../utils/SEO';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';
import PortfolioGrid from '../components/ui/PortfolioGrid';
import useScrollReveal from '../hooks/useScrollReveal';
import { multimediaServices, portfolioItems, contactInfo } from '../data';

function Reveal({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const multimediaPortfolio = portfolioItems.filter(p => p.division === 'Multimedia');
const categories = ['Design', 'Photography', 'Branding', 'Video', 'Marketing'];

export default function Multimedia() {
  return (
    <>
      <SEO title="Gamay Multimedia" description="Gamay Multimedia — Full-service creative agency for branding, photography, videography, digital marketing, and media production." />
      <PageBanner
        title="Building Businesses Through Creative Experiences"
        subtitle="Full-spectrum creative services for brands that want to stand out and grow."
        breadcrumbs={[{ label: 'Gamay Multimedia' }]}
      />

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <Reveal>
            <SectionTitle eyebrow="Our Services" title="What We Offer" subtitle="From concept to execution — every creative need under one roof." />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {multimediaServices.map((s, i) => {
              const Icon = Icons[s.icon] || Icons.Box;
              return (
                <Reveal key={s.title} delay={(i % 3) * 80}>
                  <div className="p-7 border border-gray-100 rounded-sm card-hover group flex gap-5">
                    <div className="w-12 h-12 bg-gold-50 group-hover:bg-gold-500 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon size={20} className="text-gold-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-600 text-primary-800 mb-1.5">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <Reveal>
            <SectionTitle eyebrow="Portfolio Showcase" title="Our Work Speaks" subtitle="A selection of creative projects delivered for clients across various industries." />
          </Reveal>
          <Reveal delay={150}>
            <PortfolioGrid items={multimediaPortfolio.length > 0 ? multimediaPortfolio : portfolioItems} categories={categories} />
          </Reveal>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-gold-500">
        <div className="container-pad">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl font-600 text-white mb-2">Ready to elevate your brand?</h3>
              <p className="text-white/80 font-body">Let our creative team bring your vision to life.</p>
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
