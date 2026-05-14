import type { ReactNode } from 'react'
import Head from '@docusaurus/Head'
import Layout from '@theme/Layout'
import styled from '@emotion/styled'
import { HeroLogo } from '../components/HeroNav'

const team = [
  {
    name: 'Philip Bailey',
    role: 'Founder',
    photo: '/img/people/PhilipBailey.jpg',
    bio: 'Philip is passionate about solving complex spatial problems and has spent over 27 years building GIS applications and decision support systems.\n\nHe is adjunct professor in the Department of Watershed Sciences at Utah State University and has a PhD in GIS and remote sensing from the Department of Geography at the University of Southampton, UK. His joint bachelors was in Geography and Topographic Science from Swansea University, Wales.',
    git: 'https://github.com/philipbaileynar',
    linkedin: 'https://www.linkedin.com/in/philip-bailey-5b759564/',
  },
  {
    name: 'Matt Reimer',
    role: 'System Architect',
    photo: '/img/people/MattReimer.jpeg',
    bio: "Matt architects the systems that connect scientists to their data; designing everything from QGIS desktop plugins for field analysis to the cloud-native Riverscapes Data Exchange platform and Cybercastor automation engine that makes geospatial datasets work at scale, discoverable and then shareable worldwide.\n\nHe joined North Arrow Research in 2014, bringing a physics degree and over a decade of software development experience. That foundation gives him a rare ability to reason from first principles - whether he's building low-level geospatial algorithms or high-throughput cloud infrastructure on Amazon Web Services.",
    git: 'https://github.com/mattreimer',
    linkedin: 'https://www.linkedin.com/in/raychaser/',
  },
  {
    name: 'Kelly Whitehead',
    role: 'Geospatial Developer',
    photo: '/img/people/KellyWhitehead.png',
    bio: 'Kelly leads geospatial algorithm development and has over 15 years of experience creating custom geospatial software.\n\nKelly was the lead developer on the CHaMP Topographic Toolbar, an ArcGIS AddIn for processing high resolution surveys. He now leads our efforts geospatial algorithm development using open source GIS software.',
    git: 'https://github.com/KellyMWhitehead',
    linkedin: 'https://www.linkedin.com/in/kellymwhitehead/',
  },
  {
    name: 'Lorin Gaertner',
    role: 'Data Architect',
    photo: '/img/people/LorinGaertner-200.jpg',
    bio: 'Lorin designs and implements solutions that improve data organization, maintenance, and delivery for clients.\n\nAt North Arrow Research he oversees the organization, maintenance, and delivery of client data. He designs, develops, and implements solutions to provide clients with better access to the data they need.',
    git: 'https://github.com/weblorin',
    linkedin: 'https://www.linkedin.com/in/loringaertner/',
  },
]

const Page = styled.main`
  padding: 0 0 4.2rem;
`

const Hero = styled.section`
  position: relative;
  background-image: url('/img/background2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -300px;
  min-height: 56vh;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const HeroContent = styled.div`
  padding: 5.5rem 0 4.5rem;
  max-width: 50rem;

  @media (max-width: 560px) {
    padding: 3.8rem 0 3.1rem;
  }
`

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.6rem);
  margin-bottom: 0.5rem;
  color: #ffffff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.65);
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  background: #fff;
  border-radius: 0.62rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 1rem;

  h2 {
    margin: 0;
    font-size: 1.55rem;
    color: #872175;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const PhotoCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

const Photo = styled.img`
  width: 108px;
  height: 108px;
  border-radius: 0.45rem;
  object-fit: cover;
  border: 1px solid #e5dfd4;

  @media (max-width: 560px) {
    width: 100%;
    height: 220px;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 0.4rem;

  a img {
    width: 18px;
    height: 18px;
  }
`

const Role = styled.p`
  margin: 0.1rem 0 0.5rem;
  color: #0f5f7f;
  font-weight: 600;
`

const Bio = styled.p`
  margin: 0;
  color: #52514e;
  white-space: pre-line;
`

export default function PeoplePage(): ReactNode {
  return (
    <Layout
      title="People"
      description="Meet the North Arrow Research team - geospatial software experts in conservation, river science, GIS and cloud architecture."
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(
            team.map((person) => ({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: person.name,
              jobTitle: person.role,
              worksFor: {
                '@type': 'Organization',
                name: 'North Arrow Research',
              },
              image: `https://northarrowresearch.com${person.photo}`,
            }))
          )}
        </script>
      </Head>
      <Page>
        <Hero>
          <div className="container">
            {/* <HeroTopLinks as="nav" aria-label="Primary">
              <HeroTopLink to="/">Home</HeroTopLink>
              <HeroTopLink to="/people">People</HeroTopLink>
              <HeroTopLink to="https://shop.northarrowresearch.com">Shop</HeroTopLink>
              <HeroTopLinkContact to="/contact-us">Contact Us</HeroTopLinkContact>
            </HeroTopLinks> */}
            <HeroContent>
              <HeroLogo src="/img/nar-logo.svg" alt="North Arrow Research logo" />
              <Title>A unique blend of scientific and technical expertise</Title>
            </HeroContent>
          </div>
        </Hero>
        <div className="container">
          <Grid>
            {team.map((person) => (
              <Card key={person.name}>
                <PhotoCol>
                  <Photo src={person.photo} alt={person.name} />
                  <SocialLinks>
                    {person.git && (
                      <a
                        href={person.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} GitHub`}
                      >
                        <img src="/img/github.svg" alt="GitHub" width={50} height={50} />
                      </a>
                    )}
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} LinkedIn`}
                      >
                        <img src="/img/linkedin.svg" alt="LinkedIn" width={50} height={50} />
                      </a>
                    )}
                  </SocialLinks>
                </PhotoCol>
                <div>
                  <h2>{person.name}</h2>
                  <Role>{person.role}</Role>
                  <Bio>{person.bio}</Bio>
                </div>
              </Card>
            ))}
          </Grid>
        </div>
      </Page>
    </Layout>
  )
}
