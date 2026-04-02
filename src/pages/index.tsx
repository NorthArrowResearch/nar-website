import type { ReactNode } from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'

import styles from './index.module.css'

const tools = [
  {
    name: 'Riverscapes Data Exchange',
    image: '/img/products/data_exchange.png',
    href: 'https://data.riverscapes.net/',
    description:
      'Store, curate, share and discover geospatial data related to rivers. The exchange incorporates our WebViewer interactive web mapping interface for viewing data without the need for desktop GIS software. A minimal metadata standard is all that is required to make data compatible with the warehouse.',
  },
  {
    name: 'Cyber Castor',
    image: '/img/products/cybercastor.png',
    href: 'https://docs.riverscapes.net/products/cyber-castor',
    description:
      'Provision and manage millions of parallel  model runs. Cyber Castor handles job queuing, log file management and execution all cost-effectively and reliably performed in the cloud. Integrates with the Riverscapes Data Exchange to leverage existing data, or use APIs with external systems.',
  },
  {
    name: 'Riverscapes Reports',
    image: '/img/products/reports.png',
    href: 'https://reports.riverscapes.net/',
    description:
      'Petabyte scale reporting of river health for tens of millions of riverscapes across North America and New Zealand. Draw or upload areas of interest to generate professional, curated reports with graphics and tables summarizing hundreds of available river metrics.',
  },
  {
    name: 'Cross Section Viewer',
    image: '/img/products/cross-section-viewer.png',
    href: 'https://xsviewer.northarrowresearch.com/',
    description:
      'Manage and visualize river transect data using a simple data model that accommodates most types of survey data. Interactive tools include areal, profile and longitudinal plots as well as several geomorphic calculations that would typically take a user a considerable amount of time to produce.',
  },
  {
    name: 'INSTAR',
    image: '/img/products/instar.png',
    href: 'http://instar.namc-usu.org/',
    description:
      'Geospatial database and laboratory software for tracking taxonomic identification of macro invertebrate organisms. Cloud-based, INSTAR provides a secure GraphQL API and R Package for data retrieval and analysis.',
  },
  {
    name: 'GCD',
    image: '/img/products/gcd.png',
    href: 'http://gcd.riverscapes.net/',
    description:
      'The Geomorphic Change Detection (GCD) is an ArcGIS AddIn or standalone software for quantifying the difference between raster datasets while taking uncertainty into account. Originally designed for differences in Digital Elevation Models (DEM) the GCD can measure change between any two raster datasets.',
  },
]

export default function Home(): ReactNode {
  return (
    <Layout title="North Arrow Research" description="Geospatial software for conservation.">
      <main>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroTopLinks}>
              <Link to="/people" className={styles.heroTopLink}>
                People
              </Link>
              <Link to="/contact-us" className={`${styles.heroTopLink} ${styles.heroTopLinkContact}`}>
                Contact Us
              </Link>
            </div>
            <div className={styles.heroGrid}>
              <div>
                <img src="/img/nar-logo.svg" alt="North Arrow Research logo" className={styles.heroLogo} />
                <h1 className={styles.heroTitle}>North Arrow Research</h1>
                <p className={styles.heroSubtitle}>Geospatial Software for conservation</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.toolsSection}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} ${styles.productsTitle}`}>Our Products</h2>
            <div className={styles.toolsGrid}>
              {tools.map((tool) => (
                <article key={tool.name} className={styles.toolCard}>
                  <img src={tool.image} alt={tool.name} className={styles.toolImage} loading="lazy" />
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
            <h2 className={`${styles.sectionTitle} ${styles.clientsTitle}`}>Our Clients</h2>
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
  )
}
