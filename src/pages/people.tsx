import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './people.module.css';

const team = [
  {
    name: 'Philip Bailey',
    role: 'Founder',
    photo: '/img/people/PhilipBailey.jpg',
    bio: 'Philip is passionate about solving complex spatial problems and has spent over 27 years building research GIS applications and decision support systems.\n\nHe is adjunct professor in the Department of Watershed Sciences at Utah State University and has a PhD in GIS and remote sensing from the Department of Geography at the University of Southampton, UK. His joint bachelors was in Geography and Topographic Science from the Swansea University, Wales.',
  },
  {
    name: 'Matthew Reimer',
    role: 'System Architect',
    photo: '/img/people/MattReimer.jpeg',
    bio: 'Matt is responsible for scaling our solutions to run in the cloud. He is the lead architect on all our projects both on the desktop and also using Amazon Web Services.\n\nMatt joined North Arrow Research in 2014, bringing a diverse background with a degree in physics and over a decade of experience in software and web development.',
  },
  {
    name: 'Kelly Whitehead',
    role: 'Geospatial Developer',
    photo: '/img/people/KellyWhitehead.png',
    bio: 'Kelly leads geospatial algorithm development and has over a decade of experience creating custom geospatial software.\n\nKelly was the lead developer on the CHaMP Topographic Toolbar, an ArcGIS AddIn for processing high resolution surveys. He now leads our efforts geospatial algorithm development using open source GIS software.',
  },
  {
    name: 'Lorin Gaertner',
    role: 'Data Architect',
    photo: '/img/people/LorinGaertner-200.jpg',
    bio: 'Lorin designs and implements solutions that improve data organization, maintenance, and delivery for clients.\n\nAt North Arrow Research he oversees the organization, maintenance, and delivery of client data. He designs, develops, and implements solutions to provide clients with better access to the data they need.',
  }
];

export default function PeoplePage(): ReactNode {
  return (
    <Layout title="People">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroTopLinks}>
              <Link to="/" className={styles.heroTopLink}>
                Home
              </Link>
              <Link to="/people" className={styles.heroTopLink}>
                People
              </Link>
              <Link to="/contact-us" className={`${styles.heroTopLink} ${styles.heroTopLinkContact}`}>
                Contact Us
              </Link>
            </div>
            <div className={styles.heroContent}>
              <img
                src="/img/nar-logo.svg"
                alt="North Arrow Research logo"
                className={styles.heroLogo}
              />
              <h1 className={styles.title}>A unique blend of scientific and technical expertise</h1>
            </div>
          </div>
        </section>
        <div className="container">
          <section className={styles.grid}>
            {team.map((person) => (
              <article key={person.name} className={styles.card}>
                <img src={person.photo} alt={person.name} className={styles.photo} />
                <div>
                  <h2>{person.name}</h2>
                  <p className={styles.role}>{person.role}</p>
                  <p className={styles.bio}>{person.bio}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
