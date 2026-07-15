import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  CheckCircle, ArrowRight, Shield, Clock, Users,
  TrendingUp, Phone, Mail, MapPin, ChevronDown
} from 'lucide-react';
import SEO from '../utils/SEO';
import PageBanner from '../components/ui/PageBanner';
import useScrollReveal from '../hooks/useScrollReveal';
import paybitlego from '../assets/logo_2.png';

// ─── Replace this with your actual Formspree form ID ───────────────
// 1. Go to https://formspree.io and sign up for free
// 2. Create a new form, set the email to hellogamay@gmail.com
// 3. Copy the form ID (looks like "xpzgkwrb") and paste it below
const FORMSPREE_ID = 'mpqvqadz';

function Reveal({ children, delay = 0, className = '' }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const steps = [
  { num: '01', title: 'Express Interest',   desc: 'Select your preferred property and let us know you are ready to begin.' },
  { num: '02', title: 'Subscribe',           desc: 'Complete the official PayBit subscription form below.' },
  { num: '03', title: 'Start Your Plan',     desc: 'Make your first ₦20,000 payment directly to the official Gamay company account.' },
  { num: '04', title: 'Stay Informed',       desc: 'Receive your official documents and regular property updates via email as your record grows.' },
  { num: '05', title: 'Achieve Ownership',   desc: 'We monitor your progress every step of the way until the land is fully yours.' },
];

const benefits = [
  { icon: TrendingUp, title: 'True Affordability',        desc: 'Secure your land with installments starting from just ₦20,000 per month — no huge upfront costs.' },
  { icon: Shield,     title: 'Financial Security',        desc: 'All payments are made directly to the official Gamay company account for your full protection.' },
  { icon: Clock,      title: 'Peace of Mind',             desc: 'Extended payment plans built to fit your budget without financial strain.' },
  { icon: Users,      title: 'Professional Management',   desc: 'We track your progress, send reminders, and keep you updated until ownership is complete.' },
];

const whyChoose = [
  { stat: '50+',  label: 'Active Subscribers',       desc: 'Join a growing community already on their path to ownership.' },
  { stat: '100%', label: 'Transparent Transactions', desc: 'Every payment is documented with official receipts and subscription records.' },
  { stat: 'Verified', label: 'Marketer Network',     desc: 'Our estates are promoted by a structured network of verified real estate professionals.' },
];

const properties = [
  'Greenfield Estate Phase 1 — Epe, Lagos',
  'Harvest Fields Agricultural Park — Ogun State',
  'Sunrise Gardens — Ibadan, Oyo',
  'Farmstead Acres — Plateau State',
];

const plans = [
  { amount: '₦20,000', period: 'per month', label: 'Starter Plan',    desc: 'Ideal for salary earners and students beginning their ownership journey.' },
  { amount: '₦50,000', period: 'per month', label: 'Accelerated Plan', desc: 'Reach full ownership faster with a higher monthly contribution.' },
  { amount: '₦100,000', period: 'per month', label: 'Premium Plan',   desc: 'Complete ownership in the shortest time with our top-tier plan.' },
];

// ─── Subscription Form ────────────────────────────────────────────
function SubscriptionForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const onSubmit = async (data) => {
    setServerError('');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `PayBit Subscription — ${data.fullName}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      } else {
        setServerError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-sm border border-gray-100 p-12 text-center shadow-sm">
        <CheckCircle size={60} className="text-emerald-500 mx-auto mb-5" />
        <h3 className="font-display text-3xl font-semibold text-primary-800 mb-3">Subscription Received!</h3>
        <p className="text-gray-500 mb-2 max-w-md mx-auto">
          Thank you for subscribing to PayBit. Our team will reach out within 24 hours with your next steps and payment details.
        </p>
        <p className="text-sm text-gray-400 mb-8">Check your email for a confirmation message.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => setSubmitted(false)} className="btn-outline-dark">Submit Another</button>
          <a href={`tel:09027424136`} className="btn-primary"><Phone size={15} /> Call Us Now</a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-white rounded-sm border border-gray-100 p-8 md:p-10 shadow-sm space-y-6">
      <div className="mb-2">
        <h3 className="font-display text-2xl font-semibold text-primary-800">Official Subscription Form</h3>
        <p className="text-sm text-gray-400 mt-1">Fill in your details below. Our team will contact you within 24 hours.</p>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-sm">{serverError}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold font-body uppercase tracking-wide text-gray-600 mb-2">Full Name *</label>
          <input type="text" placeholder="John Doe"
            {...register('fullName', { required: 'Full name is required' })}
            className={`w-full border ${errors.fullName ? 'border-red-400' : 'border-gray-200'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white`}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold font-body uppercase tracking-wide text-gray-600 mb-2">Phone Number *</label>
          <input type="tel" placeholder="080xxxxxxxx"
            {...register('phone', { required: 'Phone number is required' })}
            className={`w-full border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold font-body uppercase tracking-wide text-gray-600 mb-2">Email Address *</label>
        <input type="email" placeholder="you@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' }
          })}
          className={`w-full border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Property */}
        <div>
          <label className="block text-xs font-semibold font-body uppercase tracking-wide text-gray-600 mb-2">Preferred Property *</label>
          <select {...register('property', { required: 'Please select a property' })}
            className={`w-full border ${errors.property ? 'border-red-400' : 'border-gray-200'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white appearance-none cursor-pointer`}>
            <option value="">Select property...</option>
            {properties.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          {errors.property && <p className="text-red-500 text-xs mt-1">{errors.property.message}</p>}
        </div>

        {/* Plan */}
        <div>
          <label className="block text-xs font-semibold font-body uppercase tracking-wide text-gray-600 mb-2">Preferred Plan *</label>
          <select {...register('plan', { required: 'Please select a plan' })}
            className={`w-full border ${errors.plan ? 'border-red-400' : 'border-gray-200'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white appearance-none cursor-pointer`}>
            <option value="">Select plan...</option>
            <option value="Starter — ₦20,000/month">Starter — ₦20,000/month</option>
            <option value="Accelerated — ₦50,000/month">Accelerated — ₦50,000/month</option>
            <option value="Premium — ₦100,000/month">Premium — ₦100,000/month</option>
          </select>
          {errors.plan && <p className="text-red-500 text-xs mt-1">{errors.plan.message}</p>}
        </div>
      </div>

      {/* Occupation */}
      <div>
        <label className="block text-xs font-semibold font-body uppercase tracking-wide text-gray-600 mb-2">Occupation / Employment Status</label>
        <input type="text" placeholder="e.g. Civil Servant, Business Owner, Student"
          {...register('occupation')}
          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold font-body uppercase tracking-wide text-gray-600 mb-2">Any Questions or Notes</label>
        <textarea rows={4} placeholder="Tell us anything you'd like us to know..."
          {...register('message')}
          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors bg-gray-50 focus:bg-white resize-none"
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input type="checkbox" id="consent"
          {...register('consent', { required: 'You must agree to proceed' })}
          className="mt-1 accent-primary-700 cursor-pointer"
        />
        <label htmlFor="consent" className="text-sm text-gray-500 cursor-pointer leading-relaxed">
          I agree that Gamay Properties may contact me regarding my PayBit subscription and that all payments will be made to the official Gamay company account. *
        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-xs -mt-4">{errors.consent.message}</p>}

      <button type="submit" disabled={isSubmitting}
        className="btn-gold w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed text-base py-4">
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Submit Subscription <ArrowRight size={17} />
          </span>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        Prefer to call? Reach us at{' '}
        <a href="tel:09027424136" className="text-primary-600 hover:underline font-semibold">09027424136</a>
      </p>
    </form>
  );
}

// ─── Main Page ────────────────────────────────────────────────────
export default function PayBit() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: 'What is PayBit?', a: 'PayBit is a property ownership program by Gamay Properties that replaces large upfront costs with affordable monthly installments starting from ₦20,000, making land ownership accessible to salary earners, students, and low-income families.' },
    { q: 'How do I make payments?', a: 'All payments are made directly to the official Gamay company account. You will receive payment details after submitting your subscription form and our team contacts you.' },
    { q: 'Is my money safe?', a: 'Yes. For your protection, all payments are made exclusively to the official Gamay company account. Every transaction is documented with official payment receipts and updated subscription records.' },
    { q: 'What happens if I miss a month?', a: 'We understand life happens. Contact our team as soon as possible and we will work with you to keep your subscription active. Regular updates and reminders are sent to help you stay on track.' },
    { q: 'When do I get my land documents?', a: 'You receive your official allocation documents upon subscription. Full title documents are processed upon completion of your payment plan.' },
    { q: 'Can I upgrade my plan?', a: 'Yes. You can upgrade from Starter to Accelerated or Premium at any time. Contact our team and we will adjust your plan accordingly.' },
  ];

  return (
    <>
      <SEO
        title="PayBit — Become a Land Owner from ₦20,000/month"
        description="PayBit by Gamay Properties — own land in Nigeria with affordable monthly installments starting from ₦20,000. No huge upfront costs. Subscribe today."
      />

      {/* ── Banner ── */}
      <PageBanner
        title="Become a Land Owner from ₦20,000/month"
        subtitle="PayBit removes the financial barrier to property ownership — replacing huge upfront costs with installments built for real people."
        breadcrumbs={[{ label: 'Homes & Properties', href: '/homes' }, { label: 'PayBit' }]}
      />

      {/* ── PayBit Logo + Intro ── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <img src={paybitlego} alt="PayBit by Gamay" className="w-72 max-w-full" />
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-800 mt-8 mb-5 leading-tight">
                Restoring Hope Through <span className="text-gold-500 italic">Affordability</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                For many salary earners, students, and low-income families, the dream of owning property feels out of reach due to staggering upfront costs.
              </p>
              <p className="text-gray-500 leading-relaxed">
                PayBit is our answer. A revolutionary property ownership program that replaces "huge upfront costs" with very affordable monthly installments — and long-term payment plans designed to fit your budget without financial strain.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 bg-gold-50 border border-gold-200 rounded-sm px-6 py-4">
                <span className="font-display text-3xl font-semibold text-gold-600">₦20,000</span>
                <span className="text-sm text-gray-500">/ month to start your<br />ownership journey</span>
              </div>
            </Reveal>

            {/* Floating stats */}
            <Reveal delay={150}>
              <div className="grid grid-cols-1 gap-6">
                {whyChoose.map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-sm p-6 flex items-start gap-5 card-hover">
                    <div className="text-center min-w-[80px]">
                      <div className="font-display text-3xl font-semibold text-primary-700">{item.stat}</div>
                    </div>
                    <div>
                      <div className="font-semibold font-body text-primary-800 mb-1">{item.label}</div>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Key Benefits ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <Reveal>
            <div className="text-center mb-14">
              <span className="block text-xs font-semibold font-body uppercase tracking-[0.25em] text-gold-500 mb-3">Key Benefits</span>
              <span className="block w-12 h-0.5 bg-gold-500 mx-auto mb-5" />
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-800">Why PayBit Works for You</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <div className="bg-white border border-gray-100 rounded-sm p-8 text-center card-hover group">
                  <div className="w-14 h-14 bg-gold-50 group-hover:bg-gold-500 rounded-sm flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                    <b.icon size={24} className="text-gold-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary-800 mb-3">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="section-pad bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="container-pad relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <span className="block text-xs font-semibold font-body uppercase tracking-[0.25em] text-gold-400 mb-3">Payment Plans</span>
              <span className="block w-12 h-0.5 bg-gold-500 mx-auto mb-5" />
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">Choose Your Plan</h2>
              <p className="text-blue-100 mt-4 max-w-xl mx-auto">All plans lead to the same destination — full land ownership. Choose the pace that suits your income.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <Reveal key={plan.label} delay={i * 100}>
                <div className={`rounded-sm p-8 text-center border transition-all duration-300 hover:-translate-y-2
                  ${i === 1 ? 'bg-gold-500 border-gold-400 shadow-2xl scale-105' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                  {i === 1 && <span className="block text-xs font-semibold font-body uppercase tracking-widest text-primary-800 bg-white/90 rounded-sm px-3 py-1 mb-4 inline-block">Most Popular</span>}
                  <div className={`font-display text-4xl font-semibold mb-1 ${i === 1 ? 'text-white' : 'text-gold-400'}`}>{plan.amount}</div>
                  <div className={`text-xs font-body mb-4 ${i === 1 ? 'text-white/80' : 'text-blue-200'}`}>{plan.period}</div>
                  <div className={`font-semibold font-body mb-3 ${i === 1 ? 'text-white' : 'text-white'}`}>{plan.label}</div>
                  <p className={`text-sm leading-relaxed ${i === 1 ? 'text-white/80' : 'text-blue-200'}`}>{plan.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5-Step Process ── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <Reveal>
            <div className="mb-14">
              <span className="block text-xs font-semibold font-body uppercase tracking-[0.25em] text-gold-500 mb-3">How It Works</span>
              <span className="block w-12 h-0.5 bg-gold-500 mb-5" />
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-800">Your 5-Step Path to Ownership</h2>
            </div>
          </Reveal>
          <div className="relative">
            {/* Vertical connector line */}
            <div className="hidden lg:block absolute left-[39px] top-10 bottom-10 w-0.5 bg-gray-100 z-0" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 80}>
                  <div className="flex items-start gap-8 relative z-10">
                    <div className="flex-shrink-0 w-20 h-20 bg-primary-700 rounded-sm flex flex-col items-center justify-center shadow-lg">
                      <span className="font-display text-2xl font-semibold text-gold-400 leading-none">{step.num}</span>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-display text-xl font-semibold text-primary-800 mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Subscription Form ── */}
      <section id="subscribe" className="section-pad bg-gray-50">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Left side info */}
            <div className="lg:col-span-2">
              <Reveal>
                <span className="block text-xs font-semibold font-body uppercase tracking-[0.25em] text-gold-500 mb-3">Get Started</span>
                <span className="block w-12 h-0.5 bg-gold-500 mb-5" />
                <h2 className="font-display text-4xl font-semibold text-primary-800 mb-5 leading-tight">
                  Start Your Ownership Journey Today
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Fill in the form and our team will reach out within 24 hours with payment details and next steps. Your first step toward land ownership is just one click away.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-primary-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold font-body uppercase tracking-wide text-gray-400 mb-0.5">Call / WhatsApp</div>
                      <a href="tel:09027424136" className="text-primary-800 hover:text-primary-600 transition-colors text-sm">09027424136</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-primary-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold font-body uppercase tracking-wide text-gray-400 mb-0.5">Email</div>
                      <a href="mailto:hellogamay@gmail.com" className="text-primary-800 hover:text-primary-600 transition-colors text-sm">hellogamay@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-primary-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold font-body uppercase tracking-wide text-gray-400 mb-0.5">Address</div>
                      <span className="text-primary-800 text-sm">7 Obasa Road, Off Oba Akran,<br />Ikeja, Lagos State, Nigeria</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal delay={150}>
                <SubscriptionForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad bg-white">
        <div className="container-pad max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="block text-xs font-semibold font-body uppercase tracking-[0.25em] text-gold-500 mb-3">FAQ</span>
              <span className="block w-12 h-0.5 bg-gold-500 mx-auto mb-5" />
              <h2 className="font-display text-4xl font-semibold text-primary-800">Frequently Asked Questions</h2>
            </div>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border border-gray-100 rounded-sm overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-display text-lg font-semibold text-primary-800 pr-4">{faq.q}</span>
                    <ChevronDown size={18} className={`text-gold-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-7 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-pad bg-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="container-pad relative z-10 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-5">
              If owning land could start from just ₦20,000 monthly,<br className="hidden md:block" /> would that be something you'd consider?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Contact us today and take your first step toward real property ownership.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#subscribe"
                className="bg-white text-gold-600 font-body font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-wide inline-flex items-center gap-2 hover:bg-gray-50 transition-colors">
                Subscribe Now <ArrowRight size={16} />
              </a>
              <a href="tel:09027424136"
                className="border-2 border-white text-white font-body font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-wide inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
                <Phone size={16} /> Call Us Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
