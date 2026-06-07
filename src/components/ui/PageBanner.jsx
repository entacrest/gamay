import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageBanner({ title, subtitle, breadcrumbs = [], bgClass = '' }) {
  return (
    <section className={`relative bg-primary-800 pt-32 pb-20 overflow-hidden ${bgClass}`}>
      {/* Decorative */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />

      <div className="container-pad relative z-10">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6" aria-label="breadcrumb">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-gold-400 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-gold-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-600 text-white leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-blue-100 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
