import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import { contactInfo } from '../../data';

export default function CTASection({
  title = "Let's Build Something Valuable Together",
  subtitle = 'Partner with Gamay Group for integrated solutions that drive real, sustainable growth.',
  primaryLabel = 'Call Now',
  secondaryLabel = 'Get a Quote',
}) {
  return (
    <section className="section-pad bg-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl" />

      <div className="container-pad relative z-10 text-center">
        <span className="block w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
        <h2 className="font-display text-4xl md:text-6xl font-600 text-white leading-tight max-w-3xl mx-auto mb-6">
          {title}
        </h2>
        <p className="text-blue-100 text-lg max-w-xl mx-auto mb-12">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${contactInfo.phone}`} className="btn-gold">
            <Phone size={16} />{primaryLabel}
          </a>
          <Link to="/contact" className="btn-outline">
            <MessageSquare size={16} />{secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
