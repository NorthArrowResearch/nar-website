import type { ReactNode } from 'react'
import Link from '@docusaurus/Link'
import Head from '@docusaurus/Head'
import Layout from '@theme/Layout'
import styled from '@emotion/styled'
import { HeroTopLinks, HeroTopLink, HeroTopLinkContact, HeroLogo } from '../components/HeroNav'

const tools = [
  {
    name: 'Riverscapes Data Exchange',
    image: '/img/products/data_exchange.png',
    href: 'https://data.riverscapes.net/',
    description:
      'Store, curate, share and discover geospatial data related to rivers. The exchange incorporates our WebViewer interactive web mapping interface for viewing data without the need for desktop GIS software. A minimal metadata standard is all that is required to make data compatible with the warehouse.',
  },
  {
    name: 'Cybercastor',
    image: '/img/products/cybercastor.png',
    href: 'https://docs.riverscapes.net/products/cyber-castor',
    description:
      'Provision and manage millions of parallel  model runs. Cybercastor handles job queuing, log file management and execution all cost-effectively and reliably performed in the cloud. Integrates with the Riverscapes Data Exchange to leverage existing data, or use APIs with external systems.',
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
    href: 'https://instar.namc-usu.org/',
    description:
      'Geospatial database and laboratory software for tracking taxonomic identification of macro invertebrate organisms. Cloud-based, INSTAR provides a secure GraphQL API and R Package for data retrieval and analysis.',
  },
  {
    name: 'GCD',
    image: '/img/products/gcd.png',
    href: 'https://gcd.riverscapes.net/',
    description:
      'The Geomorphic Change Detection (GCD) is an ArcGIS AddIn or standalone software for quantifying the difference between raster datasets while taking uncertainty into account. Originally designed for differences in Digital Elevation Models (DEM) the GCD can measure change between any two raster datasets.',
  },
]

const HeroSection = styled.section`
  background: url('/img/home-background.jpeg') center / cover no-repeat;
  border-bottom: 1px solid #d5d0c8;
  min-height: 56vh;
  position: relative;
  display: flex;
  align-items: center;
`

const HeroContainer = styled.div`
  position: static;
`

const HeroGrid = styled.div`
  padding: 9rem 0 4.5rem;
  max-width: 50rem;

  @media (max-width: 640px) {
    padding: 7rem 0 3.1rem;
  }
`

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(2.25rem, 6.2vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.45);
`

const HeroSubtitle = styled.p`
  margin: 1.2rem 0 0;
  font-size: clamp(1.02rem, 2.2vw, 1.48rem);
  color: #ffffff;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
`

const ToolsSection = styled.section`
  padding: 4rem 0;

  @media (max-width: 640px) {
    padding: 2.8rem 0;
  }
`

const SectionTitle = styled.h2`
  margin-bottom: 1.75rem;
  font-size: clamp(1.5rem, 2.6vw, 2.05rem);
  color: #872175;
  text-align: center;
`

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;

  @media (max-width: 996px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const ToolCard = styled.article`
  background: #ffffff;
  border-radius: 0.62rem;
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  box-shadow: 0 10px 28px rgba(33, 29, 24, 0.06);

  h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.3;
    color: #872175;
  }

  p {
    margin: 0;
    color: #585753;
    font-size: 0.95rem;
  }
`

const ToolImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  object-fit: cover;
  border: 1px solid #e8e3da;
  background: #f8f4ef;
`

const LearnMore = styled(Link)`
  margin-top: auto;
  font-weight: 600;
  color: #0f5f7f;

  &:hover {
    text-decoration: underline;
  }
`

const ClientsSection = styled.section`
  background: #ffffff;
  padding: 4rem 0;

  @media (max-width: 640px) {
    padding: 2.8rem 0;
  }
`

const ClientRibbons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
`

const ClientRibbonImage = styled.img`
  width: 100%;
  max-width: 65rem;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 0.62rem;
  background: #fff;
`

export default function Home(): ReactNode {
  return (
    <Layout
      title="North Arrow Research"
      description="North Arrow Research builds geospatial software for conservation, river science and natural resource management. Explore our products, team and client work."
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'North Arrow Research',
            url: 'https://northarrowresearch.com',
            logo: 'https://northarrowresearch.com/img/nar-logo.svg',
            description:
              'North Arrow Research builds geospatial software for conservation, river science and natural resource management.',
            email: 'info@northarrowresearch.com',
            foundingDate: '2012',
            sameAs: ['https://github.com/NorthArrowResearch'],
          })}
        </script>
      </Head>
      <main>
        <HeroSection>
          <HeroContainer className="container">
            {/* <HeroTopLinks as="nav" aria-label="Primary">
              <HeroTopLink to="/about">About</HeroTopLink>
              <HeroTopLink to="/people">People</HeroTopLink>
              <HeroTopLink to="https://shop.northarrowresearch.com">Shop</HeroTopLink>
              <HeroTopLinkContact to="/contact-us">Contact Us</HeroTopLinkContact>
            </HeroTopLinks> */}
            <HeroGrid>
              <div>
                <HeroLogo src="/img/nar-logo.svg" alt="North Arrow Research logo" />
                <HeroTitle>North Arrow Research</HeroTitle>
                <HeroSubtitle>Geospatial software for conservation</HeroSubtitle>
              </div>
            </HeroGrid>
          </HeroContainer>
        </HeroSection>

        <ToolsSection>
          <div className="container">
            <SectionTitle>Our Products</SectionTitle>
            <ToolsGrid>
              {tools.map((tool) => (
                <ToolCard key={tool.name}>
                  <ToolImage src={tool.image} alt={tool.name} loading="lazy" />
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <LearnMore href={tool.href} aria-label={`Learn more about ${tool.name}`}>
                    Learn more
                  </LearnMore>
                </ToolCard>
              ))}
            </ToolsGrid>
          </div>
        </ToolsSection>

        <ClientsSection>
          <div className="container">
            <SectionTitle>Our Clients</SectionTitle>
            <ClientRibbons>
              <ClientRibbonImage
                src="/img/clients/logos1.png"
                alt="Client logos including Bureau of Land Management, US Forest Service, and NOAA"
                loading="lazy"
              />
              <ClientRibbonImage
                src="/img/clients/logos2.png"
                alt="Client logos including Utah State University and US Fish and Wildlife Service"
                loading="lazy"
              />
              <ClientRibbonImage
                src="/img/clients/logos3.png"
                alt="Additional client and partner logos"
                loading="lazy"
              />
            </ClientRibbons>
          </div>
        </ClientsSection>
      </main>
    </Layout>
  )
}
