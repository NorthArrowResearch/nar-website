import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const tools = [
  {
    name: 'Riverscapes Data Exchange',
    image: '/img/products/data_exchange.png',
    href: 'https://data.riverscapes.net/',
    description:
      'Store, curate, share and discover geospatial data related to rivers with browser-based map visualization.',
  },
  {
    name: 'Cyber Castor',
    image: '/img/products/cybercastor.png',
    href: 'https://docs.riverscapes.net/products/cyber-castor',
    description:
      'Provision and manage millions of parallel model runs with robust cloud queuing and execution.',
  },
  {
    name: 'Riverscapes Reports',
    image: '/img/products/reports.png',
    href: 'https://phlux.riverscapes.net/',
    description:
      'Generate professional reporting for river health metrics across large watersheds and regions.',
  },
  {
    name: 'Cross Section Viewer',
    image: '/img/products/cross-section-viewer.png',
    href: 'https://xsviewer.northarrowresearch.com/',
    description:
      'Manage and visualize river transect data with profile, areal and longitudinal tools.',
  },
  {
    name: 'INSTAR',
    image: '/img/products/instar.png',
    href: 'http://instar.namc-usu.org/',
    description:
      'Cloud-based geospatial database and lab software for taxonomic macroinvertebrate workflows.',
  },
  {
    name: 'GCD',
    image: '/img/products/gcd.png',
    href: 'http://gcd.riverscapes.net/',
    description:
      'Quantify raster change while accounting for uncertainty using ArcGIS AddIn or standalone software.',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="North Arrow Research"
      description="Geospatial software for conservation.">
      <main>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroTopLinks}>
              <Link to="/people" className={styles.heroTopLink}>
                People
              </Link>
              <Link
                to="/contact-us"
                className={`${styles.heroTopLink} ${styles.heroTopLinkContact}`}>
                Contact Us
              </Link>
            </div>
            <div className={styles.heroGrid}>
              <div>
                <img
                  src="/img/nar-logo.svg"
                  alt="North Arrow Research logo"
                  className={styles.heroLogo}
                />
                <h1 className={styles.heroTitle}>North Arrow Research</h1>
                <p className={styles.heroSubtitle}>
                  Geospatial Software for conservation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.toolsSection}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} ${styles.productsTitle}`}>
              Our Products
            </h2>
            <div className={styles.toolsGrid}>
              {tools.map((tool) => (
                <article key={tool.name} className={styles.toolCard}>
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className={styles.toolImage}
                    loading="lazy"
                  />
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <Link href={tool.href} className={styles.learnMore}>
                    Learn more
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.clientsSection}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} ${styles.clientsTitle}`}>
              Our Clients
            </h2>
            <div className={styles.clientRibbons}>
              <img
                src="/img/clients/logos1.png"
                alt="Client logos ribbon 1"
                className={styles.clientRibbonImage}
                loading="lazy"
              />
              <img
                src="/img/clients/logos2.png"
                alt="Client logos ribbon 2"
                className={styles.clientRibbonImage}
                loading="lazy"
              />
              <img
                src="/img/clients/logos3.png"
                alt="Client logos ribbon 3"
                className={styles.clientRibbonImage}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
