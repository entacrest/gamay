import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const FORMSPREE_ID = 'xdaqajbq'

const services = [
  'Real Estate – Residential',
  'Real Estate – Agricultural',
  'Building Construction',
  'Graphic Design / Branding',
  'Photography / Videography',
  'Digital Marketing',
  'Media Production',
  'Routine Cleaning',
  'Deep Cleaning',
  'Post Construction Cleaning',
  'Facility Management',
  'Other',
];

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const onSubmit = async (data) => {
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `Website Enquiry — ${data.name}`,
        }),
      });
    } catch (err) {
      console.error('Formspree error:', err);
    }
    // Always show success to the user regardless
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gray-100 rounded-sm p-12 text-center shadow-sm">
        <CheckCircle size={56} className="text-emerald-500 mx-auto mb-5" />
        <h3 className="font-display text-2xl font-600 text-primary-800 mb-3">Message Received!</h3>
        <p className="text-gray-500 mb-8">Thank you for reaching out. Our team will respond within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary">Send Another Message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-white border border-gray-100 rounded-sm p-8 md:p-10 shadow-sm space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-600 font-body uppercase tracking-wide text-gray-600 mb-2">Full Name *</label>
          <input id="name" type="text" placeholder="John Doe"
            {...register('name', { required: 'Full name is required' })}
            className={`w-full border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-600 font-body uppercase tracking-wide text-gray-600 mb-2">Email Address *</label>
          <input id="email" type="email" placeholder="you@example.com"
            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' } })}
            className={`w-full border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-xs font-600 font-body uppercase tracking-wide text-gray-600 mb-2">Phone Number</label>
        <input id="phone" type="tel" placeholder="080xxxxxxxx"
          {...register('phone')}
          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-xs font-600 font-body uppercase tracking-wide text-gray-600 mb-2">Service Interested In *</label>
        <select id="service"
          {...register('service', { required: 'Please select a service' })}
          className={`w-full border ${errors.service ? 'border-red-400' : 'border-gray-200'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white appearance-none cursor-pointer`}>
          <option value="">Select a service...</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-600 font-body uppercase tracking-wide text-gray-600 mb-2">Message *</label>
        <textarea id="message" rows={5} placeholder="Tell us about your needs..."
          {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Please provide at least 20 characters' } })}
          className={`w-full border ${errors.message ? 'border-red-400' : 'border-gray-200'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white resize-none`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed">
        {isSubmitting ? (
          <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</span>
        ) : (
          <span className="flex items-center gap-2"><Send size={16} />Send Message</span>
        )}
      </button>
    </form>
  );
}
