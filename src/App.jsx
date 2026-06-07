import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';

const Home       = lazy(() => import('./pages/Home'));
const About      = lazy(() => import('./pages/About'));
const Homes      = lazy(() => import('./pages/Homes'));
const Multimedia = lazy(() => import('./pages/Multimedia'));
const Facility   = lazy(() => import('./pages/Facility'));
const Portfolio  = lazy(() => import('./pages/Portfolio'));
const Blog       = lazy(() => import('./pages/Blog'));
const Contact    = lazy(() => import('./pages/Contact'));
const NotFound   = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 bg-primary-700 rounded-sm flex items-center justify-center animate-pulse">
          <span className="font-display font-700 text-white text-lg">G</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about"      element={<About />} />
              <Route path="homes"      element={<Homes />} />
              <Route path="multimedia" element={<Multimedia />} />
              <Route path="facility"   element={<Facility />} />
              <Route path="portfolio"  element={<Portfolio />} />
              <Route path="blog"       element={<Blog />} />
              <Route path="contact"    element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
