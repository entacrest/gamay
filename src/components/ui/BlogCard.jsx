import { Calendar, User, ArrowRight } from 'lucide-react';

const gradients = [
  'from-primary-700 to-primary-900',
  'from-gold-500 to-gold-700',
  'from-emerald-600 to-emerald-900',
  'from-primary-600 to-emerald-800',
  'from-gray-600 to-primary-700',
  'from-gold-600 to-primary-800',
];

export default function BlogCard({ post, index = 0 }) {
  const { title, category, date, author, excerpt } = post;
  const grad = gradients[index % gradients.length];

  return (
    <article className="bg-white border border-gray-100 rounded-sm overflow-hidden card-hover group">
      <div className={`h-44 bg-gradient-to-br ${grad} relative`}>
        <span className="absolute bottom-4 left-4 bg-white/15 backdrop-blur-sm text-white text-xs font-600 font-body px-3 py-1 rounded-sm">
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-body">
          <span className="flex items-center gap-1.5"><Calendar size={11} />{date}</span>
          <span className="flex items-center gap-1.5"><User size={11} />{author}</span>
        </div>
        <h3 className="font-display text-lg font-600 text-primary-800 mb-3 group-hover:text-primary-600 transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{excerpt}</p>
        <button className="inline-flex items-center gap-2 text-xs font-600 font-body text-primary-700 hover:gap-3 transition-all uppercase tracking-wide">
          Read More <ArrowRight size={13} />
        </button>
      </div>
    </article>
  );
}
