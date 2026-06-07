import { MapPin, Tag, ArrowRight } from 'lucide-react';

const statusColor = {
  Available: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Limited:   'bg-gold-50 text-gold-700 border-gold-200',
  Sold:      'bg-gray-100 text-gray-500 border-gray-200',
};

// Gradient placeholders per index
const gradients = [
  'from-primary-700 to-primary-900',
  'from-emerald-600 to-emerald-900',
  'from-gold-500 to-gold-800',
  'from-primary-600 to-emerald-800',
  'from-gray-700 to-primary-800',
  'from-emerald-700 to-primary-700',
];

export default function PropertyCard({ property, index = 0 }) {
  const { name, location, category, price, status } = property;
  const grad = gradients[index % gradients.length];

  return (
    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden card-hover group">
      {/* Image placeholder */}
      <div className={`h-52 bg-gradient-to-br ${grad} relative flex items-end p-4`}>
        <span className={`absolute top-4 right-4 text-xs font-600 font-body px-3 py-1 rounded-sm border ${statusColor[status] || statusColor.Available}`}>
          {status}
        </span>
        <span className="text-white text-2xl font-display font-600">{price}</span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Tag size={12} className="text-gold-500" />
          <span className="text-xs font-600 font-body text-gold-500 uppercase tracking-wide">{category}</span>
        </div>
        <h3 className="font-display text-xl font-600 text-primary-800 mb-2 group-hover:text-primary-600 transition-colors">{name}</h3>
        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-5">
          <MapPin size={13} className="text-primary-400" />
          <span>{location}</span>
        </div>
        <button className="inline-flex items-center gap-2 text-sm font-600 font-body text-primary-700 hover:gap-3 transition-all uppercase tracking-wide">
          View Details <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
