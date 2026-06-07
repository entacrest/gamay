import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const colorMap = {
  primary: { bg: 'bg-primary-50', icon: 'text-primary-700', border: 'border-primary-100', hover: 'group-hover:bg-primary-700', hoverText: 'group-hover:text-white', accent: 'bg-primary-700' },
  gold:    { bg: 'bg-gold-50',    icon: 'text-gold-600',    border: 'border-gold-100',    hover: 'group-hover:bg-gold-500',    hoverText: 'group-hover:text-white', accent: 'bg-gold-500' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-100', hover: 'group-hover:bg-emerald-600', hoverText: 'group-hover:text-white', accent: 'bg-emerald-600' },
};

export default function ServiceCard({ icon, title, description, href, color = 'primary', services }) {
  const IconComp = Icons[icon] || Icons.Box;
  const c = colorMap[color];

  return (
    <div className={`group bg-white border ${c.border} rounded-sm p-8 card-hover cursor-pointer`}>
      <div className={`w-14 h-14 ${c.bg} rounded-sm flex items-center justify-center mb-6 transition-all duration-300 ${c.hover}`}>
        <IconComp size={24} className={`${c.icon} transition-colors duration-300 ${c.hoverText}`} />
      </div>
      <h3 className="font-display text-2xl font-600 text-primary-800 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
      {services && (
        <ul className="space-y-1.5 mb-6">
          {services.slice(0, 4).map(s => (
            <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
              <span className={`w-1 h-1 rounded-full ${c.accent} flex-shrink-0`} />
              {s}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <Link to={href} className={`inline-flex items-center gap-2 text-sm font-600 font-body uppercase tracking-wide ${c.icon} hover:gap-3 transition-all`}>
          Learn More <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );
}
