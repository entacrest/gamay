import { useState } from 'react';

const gradients = [
  'from-primary-700 to-primary-900',
  'from-gold-500 to-gold-800',
  'from-emerald-600 to-primary-800',
  'from-gray-600 to-primary-700',
  'from-gold-600 to-emerald-800',
  'from-primary-600 to-gold-700',
  'from-emerald-500 to-primary-700',
  'from-primary-800 to-gold-600',
  'from-gold-500 to-primary-700',
];

export default function PortfolioGrid({ items, categories }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? items : items.filter(i => i.category === active || i.division === active);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        {['All', ...categories].map(cat => (
          <button key={cat} onClick={() => setActive(cat)}
            className={`px-5 py-2 text-sm font-600 font-body uppercase tracking-wide rounded-sm transition-all border
              ${active === cat ? 'bg-primary-700 text-white border-primary-700' : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-700'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <div key={item.id} className="group relative overflow-hidden rounded-sm cursor-pointer bg-white border border-gray-100">
            <div className={`h-60 bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-500 group-hover:scale-105`} />
            <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/70 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6">
                <span className="block text-xs font-600 font-body text-gold-400 uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="font-display text-xl text-white font-600">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
