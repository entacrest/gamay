import SEO from '../utils/SEO';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';
import PortfolioGrid from '../components/ui/PortfolioGrid';
import CTASection from '../components/ui/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';
import { portfolioItems } from '../data';

const categories = ['Real Estate', 'Branding', 'Design', 'Photography', 'Video', 'Marketing', 'Facility'];

export default function Portfolio() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <>
      <SEO title="Portfolio" description="Explore Gamay Group's portfolio across real estate, multimedia, and facility management projects delivered across Nigeria." />
      <PageBanner
        title="Our Work in Action"
        subtitle="A showcase of projects delivered across our three business divisions."
        breadcrumbs={[{ label: 'Portfolio' }]}
      />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionTitle eyebrow="Portfolio" title="Featured Projects" subtitle="Filtering by category to explore our work across divisions." />
            <PortfolioGrid items={portfolioItems} categories={categories} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
