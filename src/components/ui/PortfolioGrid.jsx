import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const filtered =
    active === 'All'
      ? items
      : items.filter(i => i.category === active || i.division === active);

  return (
    <div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        {['All', ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-sm font-600 font-body uppercase tracking-wide rounded-sm transition-all border
              ${active === cat
                ? 'bg-primary-700 text-white border-primary-700'
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-700'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            onClick={() => {
              setSelectedItem(item);
              setCurrentImage(0);
            }}
            className="group relative overflow-hidden rounded-sm cursor-pointer bg-white border border-gray-100"
          >
            <div className={`h-60 bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-500 group-hover:scale-105`} />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary-900/90 via-primary-900/60 to-transparent">
              <span className="block text-xs font-600 font-body text-gold-400 uppercase tracking-widest mb-1">
                {item.category}
              </span>
              <h3 className="font-display text-lg text-white font-600">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">

          <div className="relative w-full max-w-4xl bg-white rounded-sm overflow-hidden">

            {/* Close */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-sm"
            >
              <X size={18} />
            </button>

            {/* MEDIA (IMAGE OR VIDEO) */}
            <div className="relative h-[400px] bg-gray-100 flex items-center justify-center">

              {/* ✅ YouTube support */}
              {selectedItem.youtube ? (
                <iframe
                  className="w-full h-full"
                  src={selectedItem.youtube}
                  title={selectedItem.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={
                    selectedItem.images && selectedItem.images.length > 0
                      ? selectedItem.images[currentImage]
                      : selectedItem.img   // ✅ FIXED (was image before)
                  }
                  className="w-full h-full object-cover"
                  alt={selectedItem.title}
                />
              )}

            </div>

            {/* Controls (images only) */}
            {!selectedItem.youtube && (
              <div className="flex items-center justify-between p-4 bg-white">

                <button
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === 0
                        ? (selectedItem.images?.length || 1) - 1
                        : prev - 1
                    )
                  }
                  className="p-2 bg-gray-100 rounded-sm"
                >
                  <ChevronLeft />
                </button>

                <div className="text-sm text-gray-500">
                  {currentImage + 1} / {selectedItem.images?.length || 1}
                </div>

                <button
                  onClick={() =>
                    setCurrentImage((prev) =>
                      selectedItem.images && selectedItem.images.length > 0
                        ? prev === selectedItem.images.length - 1
                          ? 0
                          : prev + 1
                        : 0
                    )
                  }
                  className="p-2 bg-gray-100 rounded-sm"
                >
                  <ChevronRight />
                </button>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}