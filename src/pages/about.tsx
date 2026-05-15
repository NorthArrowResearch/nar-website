import type { ReactNode } from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import styled from '@emotion/styled'
// import { HeroLogo } from '../components/HeroNav'

// ─── Data ─────────────────────────────────────────────────────────────────────

const strengths: { title: string; description: ReactNode }[] = [
  {
    title: 'Geospatial Software Development',
    description: (
      <>
        <p>
          We build custom GIS software that scientists and resource managers actually use — ArcGIS Pro add-ins, QGIS
          plugins, and full-stack web mapping applications. Our <Link to="https://gcd.riverscapes.net">GCD</Link>{' '}
          software has been installed thousands of times worldwide and remains the standard tool for quantifying
          topographic and bathymetric change.
        </p>
        <br />
        <p>
          Our team has deep experience across the full geospatial stack: raster and vector processing, computational
          geometry, spatial statistics, and interactive cartography — from a researcher&apos;s laptop to
          continental-scale cloud deployments.
        </p>
      </>
    ),
  },
  {
    title: 'Cloud Architecture and Development',
    description: (
      <>
        <p>
          We design cloud computing systems that are right-sized for science — not over-engineered, not expensive to
          run, and not dependent on a dedicated ops team to stay healthy. Conservation organizations shouldn&apos;t need
          an IT department to operate world-class infrastructure.
        </p>
        <br />
        <p>
          Our <Link to="https://docs.riverscapes.net/products/cyber-castor">Cybercastor</Link> platform handles millions
          of parallel model runs cost-effectively. The{' '}
          <Link to="https://data.riverscapes.net/">Riverscapes Data Exchange</Link> is a petabyte-scale geospatial data
          warehouse serving users across North America, New Zealand, and beyond.
        </p>
      </>
    ),
  },
  {
    title: 'Databases and Data Management',
    description: (
      <>
        <p>
          Good science depends on well-organized data. We design geospatial databases built to last — optimized for
          performance, easy to query, and structured around your science rather than shaped by arbitrary software
          constraints. We work with PostgreSQL/PostGIS, DynamoDB, Athena, and purpose-built data models.
        </p>
        <br />
        <p>
          Our <Link to="https://instar.namc-usu.org/">INSTAR</Link> platform is a live example: a cloud laboratory
          database with a GraphQL API and R package, tracking macroinvertebrate taxonomic data across dozens of
          institutions using custom PostGIS recursive functions.
        </p>
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        <p>
          We believe publicly funded science should be openly accessible. Most of our work is released under open source
          licenses on GitHub — under the <Link to="https://github.com/riverscapes">Riverscapes</Link> and{' '}
          <Link to="https://github.com/northarrowresearch">North Arrow Research</Link> organizations — so the community
          can build on it, extend it, and trust it.
        </p>
        <br />
        <p>
          As part of the <Link to="https://riverscapes.net">Riverscapes Consortium</Link>, we are committed to the{' '}
          <Link to="https://www.go-fair.org/fair-principles/">FAIR principles</Link> of data management: Findable,
          Accessible, Interoperable, and Reusable. We also contribute actively to the QGIS community and the broader
          open-source geospatial ecosystem.
        </p>
      </>
    ),
  },
]

const differentiators: { title: string; subtitle: string; description: string }[] = [
  {
    title: 'You talk to the engineer building it.',
    subtitle: 'Hand-on. No middlemen.',
    description:
      'There are no sales staff or account managers at North Arrow Research. The person you meet in the first conversation is the person who designs and builds your solution. That means faster decisions, fewer misunderstandings, and software shaped by someone who cares about getting it right.',
  },
  {
    title: "We're invested in the same outcomes you are.",
    subtitle: 'Conservation only, by deliberate choice.',
    description:
      'We work exclusively in environmental conservation — not as a constraint, but as a commitment. We have turned away business from extractive industries because we want our work to leave the world better. When your mission matters to you, it matters to us too.',
  },
  {
    title: "Whatever the scale, we've shipped it.",
    subtitle: 'From field plugin to continental platform.',
    description:
      'Our portfolio spans single-researcher QGIS plugins to cloud platforms analyzing tens of millions of riverscapes across North America and New Zealand. We know how to right-size a solution for where you are today, and how to grow it when your ambitions expand.',
  },
]

// ─── Styled components ────────────────────────────────────────────────────────

const Page = styled.main`
  padding: 0 0 0;
`

const Hero = styled.section`
  position: relative;
  background-image: url('/img/nar-at-work.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 56vh;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
    pointer-events: none;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 5.5rem 0 4.5rem;
  max-width: 52rem;

  @media (max-width: 560px) {
    padding: 3.8rem 0 3.1rem;
  }
`

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.6rem);
  margin-bottom: 0.35rem;
  color: #ffffff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.65);
`

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.2vw, 1.3rem);
  color: #f0ece6;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55);
  margin: 0.45rem 0 0;
  max-width: 44rem;
  line-height: 1.5;
`

const Content = styled.div`
  padding-bottom: 3rem;

  a {
    color: #872175;
    &:hover {
      color: #872175;
    }
  }
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 3rem;
  margin-bottom: 2rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`

const IntroP = styled.p`
  font-size: 1.08rem;
  line-height: 1.75;
  color: #3c363b;
  margin: 0;
`

const FactsStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  background: #f4f0ea;
  border-radius: 0.62rem;
  padding: 1.5rem 1.75rem;
  margin: 0 0 2.5rem;
  text-align: center;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Fact = styled.div`
  .number {
    font-size: 2rem;
    font-weight: 800;
    color: #872175;
    line-height: 1.1;
  }
  .label {
    font-size: 0.82rem;
    color: #52514e;
    margin-top: 0.25rem;
    line-height: 1.35;
  }
`

const RiverscapesCallout = styled.aside`
  background: linear-gradient(135deg, #f4f0ea 0%, #eef5f8 100%);
  border-left: 4px solid #0f5f7f;
  border-radius: 0 0.62rem 0.62rem 0;
  padding: 1.5rem 1.75rem;
  margin: 0 0 2.5rem;

  h2 {
    margin: 0 0 0.6rem;
    font-size: 1.2rem;
    color: #0f5f7f;
  }

  p {
    margin: 0 0 0.75rem;
    color: #3c363b;
    line-height: 1.7;
    font-size: 0.97rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: #0f5f7f;
    font-weight: 600;
    &:hover {
      color: #0f5f7f;
    }
  }
`

const SectionHeading = styled.h2`
  font-size: clamp(1.35rem, 2.4vw, 1.75rem);
  color: #3c363b;
  margin: 0 0 1rem;
`

const DifferentiatorsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const DifferentiatorCard = styled.article`
  background: #f8f4ef;
  border-radius: 0.62rem;
  padding: 1.5rem 1.5rem 1.5rem 1.6rem;
  border: 1px solid #e0d9d0;
  border-top: 3px solid #872175;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h3 {
    margin: 0;
    font-size: 1.05rem;
    color: #3c363b;
    line-height: 1.35;
  }

  .subtitle {
    font-size: 0.82rem;
    font-weight: 700;
    color: #872175;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  p {
    margin: 0.4rem 0 0;
    color: #52514e;
    font-size: 0.95rem;
    line-height: 1.65;
  }
`

const StrengthsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const StrengthCard = styled.article`
  background: #f8f4ef;
  border-radius: 0.62rem;
  padding: 1.25rem 1.25rem 1.25rem 1.4rem;
  border: 1px solid #e0d9d0;

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.15rem;
    color: #3c363b;
  }

  p {
    margin: 0;
    color: #52514e;
    font-size: 0.95rem;
    line-height: 1.65;
  }
`

const HowWeWork = styled.section`
  margin-bottom: 2.5rem;

  p {
    color: #3c363b;
    line-height: 1.75;
    margin-bottom: 0.75rem;
    font-size: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const CTABand = styled.section`
  background: linear-gradient(135deg, #1a0a18 0%, #2d1040 100%);
  border-radius: 0.75rem;
  padding: 3rem 2.5rem;
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    margin: 0 0 0.65rem;
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    color: #fff;
  }

  p {
    margin: 0 0 1.5rem;
    color: #d8cde0;
    font-size: 1.05rem;
    max-width: 38rem;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.65;
  }
`

const CTAButton = styled(Link)`
  display: inline-block;
  background: #872175;
  color: #fff !important;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 0.75rem 2rem;
  border-radius: 0.45rem;
  text-decoration: none !important;
  transition:
    background 0.15s ease,
    transform 0.1s ease;

  &:hover {
    background: #a02a8a;
    transform: translateY(-1px);
  }
`

// ─── Page component ───────────────────────────────────────────────────────────

export default function AboutPage(): ReactNode {
  return (
    <Layout
      title="About"
      description="North Arrow Research builds geospatial software for river science and environmental conservation. Learn about our mission, values, and why conservation organizations trust us."
    >
      <Page>
        {/* ── Hero ── */}
        <Hero>
          <div className="container">
            <HeroContent>
              {/* <HeroLogo src="/img/nar-logo.svg" alt="North Arrow Research logo" /> */}
              <Title style={{ marginTop: 200 }}>River science, engineered.</Title>
              <HeroSubtitle>
                We build the geospatial software and data infrastructure that turns environmental science into tools
                agencies, researchers, and practitioners can actually use — at any scale.
              </HeroSubtitle>
            </HeroContent>
          </div>
        </Hero>

        <Content className="container">
          {/* ── Opening ── */}
          <Intro>
            <IntroP>
              The science for protecting rivers, restoring watersheds, and managing aquatic ecosystems has never been
              more sophisticated. The challenge is building the tools and infrastructure to put that science to work —
              reliably, at scale, and in the hands of the people who need it most. That is what North Arrow Research has
              spent over fourteen years doing.
            </IntroP>
            <IntroP>
              We partner with federal agencies, universities, and conservation organizations to build geospatial
              software that scientists trust, data platforms that grow from pilot to continental scale, and open tools
              that advance the whole field. We work exclusively in environmental conservation — not as a marketing
              position, but because it is the work that matters to us.
            </IntroP>
          </Intro>

          {/* ── Facts ── */}
          <FactsStrip>
            <Fact>
              <div className="number">14+</div>
              <div className="label">years of conservation software</div>
            </Fact>
            <Fact>
              <div className="number">20M+</div>
              <div className="label">riverscapes analyzed on our platforms</div>
            </Fact>
            <Fact>
              <div className="number">1000s</div>
              <div className="label">GCD installs worldwide</div>
            </Fact>
            <Fact>
              <div className="number">100%</div>
              <div className="label">conservation clients — always</div>
            </Fact>
          </FactsStrip>

          {/* ── Riverscapes Consortium ── */}
          <RiverscapesCallout>
            <h2>The engineering arm of the Riverscapes Consortium</h2>
            <p>
              Most software consultancies learn your domain on your dime. We already know it. North Arrow Research
              serves as the engineering arm of the <Link to="https://riverscapes.net">Riverscapes Consortium</Link> — a
              global collaboration of river scientists, practitioners, and resource managers working to improve river
              health. The Consortium spans leading research groups at Utah State University, federal agencies across the
              United States, and practitioners in New Zealand, Canada, and Europe.
            </p>
            <p>
              That means our engineers have spent years embedded in river science — co-developing models, attending
              field campaigns, and working directly alongside the researchers who advance it. When your project touches
              watershed analysis, restoration planning, fish passage, or river monitoring, you are not educating us from
              scratch. You are tapping into a network of domain knowledge that took a decade to build.
            </p>
          </RiverscapesCallout>

          {/* ── Core Strengths ── */}
          <SectionHeading>What We Build</SectionHeading>
          <StrengthsGrid>
            {strengths.map((s) => (
              <StrengthCard key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </StrengthCard>
            ))}
          </StrengthsGrid>

          {/* ── Why Work With Us ── */}
          <SectionHeading>Why Work With Us</SectionHeading>
          <DifferentiatorsGrid>
            {differentiators.map((d) => (
              <DifferentiatorCard key={d.title}>
                <span className="subtitle">{d.subtitle}</span>
                <h3>{d.title}</h3>
                <p>{d.description}</p>
              </DifferentiatorCard>
            ))}
          </DifferentiatorsGrid>

          {/* ── How We Work ── */}
          <SectionHeading>How We Work</SectionHeading>
          <HowWeWork>
            <p>
              North Arrow Research is a small, debt-free company incorporated in British Columbia, Canada. We work with
              clients across the United States and internationally — including federal and state agencies, universities,
              and NGOs in Canada, New Zealand, Scotland, France, and Vietnam.
            </p>
            <p>
              There are no investors to answer to and no growth targets to hit. We are a 100% engineering company with
              extremely low overhead, which means the rate you pay goes toward work, not management layers. Projects are
              staffed by the same senior engineers you meet in the proposal conversation. We charge fairly, we&apos;ll
              tell you honestly when we think you&apos;re heading in the wrong direction, and we measure success by
              whether your project achieves what it set out to do.
            </p>
            <p>
              If you want to understand who you would actually be working with, visit our{' '}
              <Link to="/people">People</Link> page.
            </p>
          </HowWeWork>

          {/* ── CTA ── */}
          <CTABand>
            <h2>Have a project in mind?</h2>
            <p>
              Whether you are ready to scope a solution or just beginning to think through your options, we would love
              to hear what you are working on.
            </p>
            <CTAButton to="/contact-us">Get in touch →</CTAButton>
          </CTABand>
        </Content>
      </Page>
    </Layout>
  )
}
