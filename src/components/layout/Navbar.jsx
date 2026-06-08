import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { contactInfo } from '../../data';
import logo from "../../assets/gamay.jpeg";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services', href: '#',
    children: [
      { label: 'Homes & Properties', href: '/homes' },
      { label: 'Multimedia', href: '/multimedia' },
      { label: 'Facility Management', href: '/facility' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); setDropdown(false); }, [pathname]);

  const isHome = pathname === '/';

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary-900 text-blue-200 text-xs font-body">
        <div className="container-pad flex justify-between items-center py-2">
          <span>Integrated Solutions Across Africa</span>
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
            <Phone size={11} />{contactInfo.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}>
        <nav className="container-pad flex items-center justify-between h-18 py-4" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            {/* <div className="w-10 h-10 bg-primary-700 rounded-sm flex items-center justify-center">
              <span className="font-display font-700 text-white text-lg">G</span>
            </div> */}
            <img
              src={logo}
              alt="Gamay Group Logo"
              className="w-14 h-14 object-contain"
            />
            <div>
              <div className="font-display font-700 text-primary-800 text-xl leading-none">Gamay</div>
              <div className="font-body text-[10px] text-gold-500 uppercase tracking-[0.2em] font-600">Group</div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => link.children ? (
              <li key={link.label} className="relative" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-body font-600 text-gray-700 hover:text-primary-700 uppercase tracking-wide transition-colors">
                  {link.label} <ChevronDown size={13} className={`transition-transform ${dropdown ? 'rotate-180' : ''}`} />
                </button>
                {dropdown && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-sm min-w-56 py-2 z-50">
                    {link.children.map(c => (
                      <NavLink key={c.href} to={c.href}
                        className="block px-5 py-3 text-sm font-body text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors border-l-2 border-transparent hover:border-gold-500">
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <NavLink to={link.href}
                  className={({ isActive }) => `px-4 py-2 text-sm font-body font-600 uppercase tracking-wide transition-colors block
                    ${isActive ? 'text-primary-700' : 'text-gray-700 hover:text-primary-700'}`}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary text-xs py-3 px-6">Get in Touch</Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(o => !o)} className="lg:hidden p-2 text-primary-700" aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
            <div className="container-pad py-6 flex flex-col gap-1">
              {navLinks.map(link => link.children ? (
                <div key={link.label}>
                  <div className="text-xs font-600 font-body uppercase tracking-widest text-gold-500 pt-3 pb-2 px-2">{link.label}</div>
                  {link.children.map(c => (
                    <NavLink key={c.href} to={c.href}
                      className={({ isActive }) => `block px-4 py-2.5 text-sm font-body rounded-sm transition-colors ${isActive ? 'text-primary-700 bg-primary-50' : 'text-gray-700 hover:text-primary-700'}`}>
                      {c.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink key={link.label} to={link.href}
                  className={({ isActive }) => `block px-4 py-2.5 text-sm font-body font-600 uppercase tracking-wide rounded-sm transition-colors ${isActive ? 'text-primary-700 bg-primary-50' : 'text-gray-700 hover:text-primary-700'}`}>
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-primary mt-4 justify-center text-xs">Get in Touch</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
