import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialSlider({ testimonials }) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx(i => (i + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[idx];

  return (
    <div className="relative">
      <div className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
        <div className="bg-white border border-gray-100 rounded-sm p-10 md:p-14 max-w-3xl mx-auto text-center shadow-lg">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
            ))}
          </div>
          {/* Quote mark */}
          <span className="block font-display text-8xl text-primary-100 leading-none mb-2 -mt-4">"</span>
          <blockquote className="font-display text-xl md:text-2xl text-primary-800 italic leading-relaxed mb-8 -mt-6">
            {t.quote}
          </blockquote>
          <div>
            <div className="font-body font-600 text-primary-700">{t.name}</div>
            <div className="text-sm text-gray-400 mt-1">{t.role} · {t.company}</div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-gold-500 w-6' : 'bg-gray-300'}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => go(-1)} aria-label="Previous" className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow hover:border-primary-400 transition-colors hidden md:flex">
        <ChevronLeft size={18} className="text-primary-700" />
      </button>
      <button onClick={() => go(1)} aria-label="Next" className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow hover:border-primary-400 transition-colors hidden md:flex">
        <ChevronRight size={18} className="text-primary-700" />
      </button>
    </div>
  );
}
