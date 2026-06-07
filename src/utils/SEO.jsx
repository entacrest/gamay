import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, url }) {
  const siteName = 'Gamay Group';
  const defaultDesc = 'Gamay Group — Integrated solutions in Real Estate, Multimedia, Facility Management and Environmental Services across Africa.';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDesc = description || defaultDesc;
  const ogImage = image || '/og-image.jpg';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={ogImage} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={url || 'https://gamaygroup.com'} />
    </Helmet>
  );
}
