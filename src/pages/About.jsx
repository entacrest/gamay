import { User } from 'lucide-react';
import SEO from '../utils/SEO';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';
import { coreValues, teamMembers } from '../data';

function Reveal({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about Gamay Group — our story, vision, mission, values and the leadership team behind Africa's integrated solutions enterprise." />
      <PageBanner title="About Gamay Group" subtitle="A diversified enterprise dedicated to building sustainable value across Africa." breadcrumbs={[{ label: 'About' }]} />

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <SectionTitle eyebrow="Our Story" title="How It All Began" />
              <div className="prose prose-lg text-gray-500 space-y-5 leading-relaxed">
                <p>Gamay Group was founded with a clear conviction: that Africa's most pressing economic opportunities — land, creative commerce, and clean environments — needed a unified, professional, and purpose-driven response.</p>
                <p>Starting in the real estate sector, the group rapidly expanded its capabilities to encompass multimedia and creative services, and facility management and environmental services — each division addressing critical gaps in the Nigerian and broader African market.</p>
                <p>Today, Gamay Group operates as a holding entity anchoring three distinct but synergistic business units, unified by a single commitment to quality, integrity, and partnership that creates lasting value for clients, communities, and the continent.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-primary-800 rounded-sm p-10 h-full">
                <span className="block w-10 h-0.5 bg-gold-500 mb-5" />
                <h3 className="font-body text-xs font-600 uppercase tracking-widest text-gold-400 mb-4">Our Vision</h3>
                <p className="font-display text-2xl md:text-3xl font-500 text-white leading-snug italic">
                  "To lead in delivering core economic solutions across Africa, supporting development through innovation and excellence."
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="bg-gold-500 rounded-sm p-10 h-full">
                <span className="block w-10 h-0.5 bg-white mb-5" />
                <h3 className="font-body text-xs font-600 uppercase tracking-widest text-white/70 mb-4">Our Mission</h3>
                <p className="font-display text-2xl md:text-3xl font-500 text-white leading-snug italic">
                  "To plan, develop, and deliver integrated commercial solutions — creating sustainable value across Africa."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="section-pad bg-white">
        <div className="container-pad">
          <Reveal>
            <SectionTitle eyebrow="Core Values" title="The Principles That Guide Us" center />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="text-center p-8 border border-gray-100 rounded-sm card-hover group">
                  <div className="w-16 h-16 bg-primary-50 group-hover:bg-primary-700 rounded-sm flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <span className="text-primary-700 group-hover:text-white text-2xl transition-colors">◈</span>
                  </div>
                  <h3 className="font-display text-xl font-600 text-primary-800 mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-pad bg-gray-50">
        <div className="container-pad">
          <Reveal>
            <SectionTitle eyebrow="Our Leadership" title="Meet the Team" center />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <div className="bg-white border border-gray-100 rounded-sm overflow-hidden card-hover text-center group">
                  <div className="h-52 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:from-primary-700 group-hover:to-primary-900 transition-all duration-500">
                    <User size={48} className="text-primary-300 group-hover:text-white/30 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-600 text-primary-800 mb-1">{member.name}</h3>
                    <p className="text-sm text-gold-600 font-body">{member.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
