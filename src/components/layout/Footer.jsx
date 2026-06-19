import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Share2, AtSign, MessageCircle, LinkIcon } from 'lucide-react';
import { contactInfo } from '../../data';
import logo from "../../assets/Gamay.jpeg";

const services = [
  { label: 'Homes & Properties', href: '/homes' },
  { label: 'Gamay Multimedia', href: '/multimedia' },
  { label: 'Facility Management', href: '/facility' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/about#team' },
  { label: 'Core Values', href: '/about#values' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-blue-100">
      {/* Main footer */}
      <div className="container-pad py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="The Gamay Group Logo"
                className="w-14 h-14 object-contain"
              />

              <div>
                <div className="font-display font-700 text-white text-xl leading-none"> The Gamay</div>
                <div className="font-body text-[10px] text-gold-400 uppercase tracking-[0.2em] font-600">Group</div>
              </div>
            </Link>
            <p className="text-sm text-blue-200 leading-relaxed mb-6 max-w-xs">
              Building sustainable value across Africa through integrated solutions in Real Estate, Multimedia, and Facility Management.
            </p>
            <div className="flex gap-3">
              {[Share2, AtSign, MessageCircle, LinkIcon].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social media"
                  className="w-9 h-9 bg-primary-800 hover:bg-gold-500 rounded-sm flex items-center justify-center transition-colors">
                  <Icon size={15} className="text-blue-200 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body font-600 text-xs uppercase tracking-widest text-gold-400 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.label}>
                  <Link to={s.href} className="text-sm text-blue-200 hover:text-gold-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-500/50 flex-shrink-0" />{s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-body font-600 text-xs uppercase tracking-widest text-gold-400 mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map(c => (
                <li key={c.label}>
                  <Link to={c.href} className="text-sm text-blue-200 hover:text-gold-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-500/50 flex-shrink-0" />{c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-600 text-xs uppercase tracking-widest text-gold-400 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="flex items-start gap-3 text-sm text-blue-200 hover:text-gold-400 transition-colors">
                  <Phone size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />{contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-3 text-sm text-blue-200 hover:text-gold-400 transition-colors break-all">
                  <Mail size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />{contactInfo.email}
                </a>
              </li>
              <li>
                <a href={contactInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-blue-200 hover:text-gold-400 transition-colors">
                  <MapPin size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />Nigeria, Africa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="container-pad py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-300">
          <span>© {new Date().getFullYear()} The Gamay Group. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
