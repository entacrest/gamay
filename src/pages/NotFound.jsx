import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../utils/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found" />
      <div className="min-h-screen bg-primary-900 flex items-center justify-center text-center px-4">
        <div>
          <div className="font-display text-[160px] font-700 text-primary-800 leading-none select-none">404</div>
          <h1 className="font-display text-4xl font-600 text-white mb-4 -mt-8">Page Not Found</h1>
          <p className="text-blue-200 text-lg mb-10 max-w-md mx-auto">The page you are looking for does not exist or has been moved.</p>
          <Link to="/" className="btn-gold">
            <Home size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
