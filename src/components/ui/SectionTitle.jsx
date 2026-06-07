export default function SectionTitle({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className={`font-body text-xs font-600 uppercase tracking-[0.25em] ${light ? 'text-gold-300' : 'text-gold-500'} block mb-3`}>
          {eyebrow}
        </span>
      )}
      {!center && <span className={`block w-12 h-0.5 mb-5 ${light ? 'bg-gold-400' : 'bg-gold-500'}`} />}
      {center && <span className={`block w-12 h-0.5 mb-5 mx-auto ${light ? 'bg-gold-400' : 'bg-gold-500'}`} />}
      <h2 className={`font-display text-4xl md:text-5xl font-600 leading-tight ${light ? 'text-white' : 'text-primary-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
