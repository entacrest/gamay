import { useState } from 'react';
import SEO from '../utils/SEO';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';
import BlogCard from '../components/ui/BlogCard';
import useScrollReveal from '../hooks/useScrollReveal';
import { blogPosts } from '../data';

const categories = ['All', 'Real Estate Tips', 'Property Investment', 'Cleaning Tips', 'Branding & Marketing', 'Business Growth'];

export default function Blog() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? blogPosts : blogPosts.filter(p => p.category === active);
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      <SEO title="Blog" description="Insights, tips, and expert advice from Gamay Group on real estate investment, cleaning, branding, and business growth in Africa." />
      <PageBanner
        title="Insights & Resources"
        subtitle="Expert perspectives on real estate, branding, cleaning, and business growth across Africa."
        breadcrumbs={[{ label: 'Blog' }]}
      />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionTitle eyebrow="Blog" title="Latest Articles" />

            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`px-5 py-2 text-sm font-600 font-body rounded-sm transition-all border
                    ${active === cat ? 'bg-primary-700 text-white border-primary-700' : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-700'}`}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => <BlogCard key={post.id} post={post} index={i} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
