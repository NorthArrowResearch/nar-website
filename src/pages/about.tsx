import type { ReactNode } from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import styled from '@emotion/styled'
import { HeroTopLinks, HeroTopLink, HeroTopLinkContact, HeroLogo } from '../components/HeroNav'

const strengths: { title: string; description: ReactNode }[] = [
  {
    title: 'Geospatial Software Development',
    description: (
      <>
        <p>
          We specialize in creating custom GIS software solutions. We build standalone applications, web mapping
          solutions and plugins for both QGIS and ArcGIS Pro. Our <Link to="https://gcd.riverscapes.net">GCD</Link>{' '}
          product has been installed thousands of times all around the world.
        </p>
        <br />
        <p>
          We have deep experience with geospatial data processing and analysis using both desktop and cloud-based
          solutions. We lean heavily on open source GIS technologies such as GDAL and OGR that allow us to work with a
          wide variety of geospatial data formats and that easily transfer to the cloud.
        </p>
      </>
    ),
  },
  {
    title: 'Cloud Architecture and Development',
    description: (
      <>
        <p>
          We punch above our weight in the cloud. We have designed and implemented solutions for clients using Amazon
          Web Services. We are experts at building scalable, cost-effective solutions that leverage the power of the
          cloud.
        </p>
        <br />
        <p>
          Our <Link to="https://docs.riverscapes.net/products/cyber-castor">Cybercastor</Link> product is a cloud-based
          job orchestration system that can handle millions of parallel model runs. And our{' '}
          <Link to="https://data.riverscapes.net/">Riverscapes Data Exchange</Link> is a cloud-based data warehouse and
          web mapping interface for geospatial data. Both are capable of handling petabyte scale data and millions of
          users.
        </p>
      </>
    ),
  },
  {
    title: 'Databases and Data Management',
    description: (
      <>
        <p>
          We are deeply passionate about well-organized data. We have designed and implemented geospatial databases for
          clients using both relational and NoSQL database management systems. We are experts at designing data models
          that are optimized for performance and ease of use.
        </p>
        <br />
        <p>
          Our <Link to="https://instar.namc-usu.org/">INSTAR</Link> product is a geospatial database and laboratory
          software for tracking taxonomic identification of macro invertebrate organisms. The underlying Postgres
          database uses PostGIS and custom recursive functions to efficiently store and query complex taxonomic data.
        </p>
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        <p>
          We believe in the power of open source software. Most of our projects are open source and available on GitHub
          under either <Link to="https://github.com/riverscapes">Riverscapes</Link> or{' '}
          <Link to="https://github.com/northarrowresearch">North Arrow Research</Link> organizations.
        </p>
        <br />
        <p>
          As part of the <Link to="https://riverscapes.net">Riverscapes Consortium</Link>, we are committed to the{' '}
          <Link to="https://www.go-fair.org/fair-principles/">FAIR</Link> principles of data management and have
          released most of our products under open source licenses. We also contribute to existing open source projects
          and are committed to the QGIS community. We are proud to be part of the open source ecosystem and believe that
          it is essential for advancing geospatial science and conservation efforts.
        </p>
      </>
    ),
  },
]

const Page = styled.main`
  padding: 0 0 4.2rem;
`

const Hero = styled.section`
  position: relative;
  background-image: url('/img/nar-at-work.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -200px;
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

const StrengthsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const StrengthCard = styled.article`
  background: #fff;
  border-radius: 0.62rem;
  padding: 1.25rem 1.25rem 1.25rem 1.4rem;
  box-shadow: 0 10px 28px rgba(33, 29, 24, 0.06);

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    color: #3c363b;
  }

  p {
    margin: 0;
    color: #52514e;
  }
`

const Content = styled.div`
  a {
    color: #872175;
    &:hover {
      color: #872175;
    }
  }
`

export default function AboutPage(): ReactNode {
  return (
    <Layout title="About" description="Learn more about North Arrow Research — our mission, values, and team.">
      <Page>
        <Hero>
          <div className="container">
            <HeroContent>
              <HeroLogo src="/img/nar-logo.svg" alt="North Arrow Research logo" />
              <Title>About North Arrow Research</Title>
            </HeroContent>
          </div>
        </Hero>
        <Content className="container">
          <p>
            North Arrow Research was founded in 2012 by <Link to="/people">Philip Bailey</Link> with a clear and
            ambitious purpose: to help people solve complex geospatial challenges at scale.{' '}
            <Link to="/people">Matt Reimer</Link> joined shortly thereafter, bringing a wealth of experience in cloud
            architecture and professional software development expertise.
          </p>
          <p>
            Fourteen years on, the original vision still drives everything we do. We are energized by clients with bold
            ideas — whether they are ready to push their analysis across vast spatial extents or transform a promising
            concept into a powerful, professional platform. Big thinking inspires us, and turning it into reality is
            what we do best.
          </p>
          <p>
            We work exclusively in the environmental conservation realm. We are motivated by our efforts having a
            positive impact on the world and have worked hard to avoid the resource extraction industry. We are
            committed to leaving the world in a better place than we were fortunate enough to find it.
          </p>
          <h2>Core Strengths</h2>
          <StrengthsGrid>
            {strengths.map((s) => (
              <StrengthCard key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </StrengthCard>
            ))}
          </StrengthsGrid>
          <h2>Corporate Structure</h2>
          <p>
            North Arrow Research is a small company, incorporated in the province of British Columbia, Canada. We are
            debt-free and, as a 100% engineering company, have extremely low fixed costs. There are no sales staff. Our
            goal is to provide outstanding service and honest advice without spin.
          </p>
        </Content>
      </Page>
    </Layout>
  )
}
