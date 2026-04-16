import type { ReactNode } from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import styled from '@emotion/styled'
import { HeroTopLinks, HeroTopLink, HeroTopLinkContact, HeroLogo } from '../components/HeroNav'

const Page = styled.main`
  padding: 0 0 4.2rem;
`

const Hero = styled.section`
  position: relative;
  background-image: url('/img/background2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -500px;
  aspect-ratio: 2500 / 1667;
  width: 100%;
  max-height: 560px;
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

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.25rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.section`
  background: #fff;
  border: 1px solid #e0dace;
  border-radius: 0.62rem;
  padding: 1.1rem;
`

const Sidebar = styled.aside`
  background: #fff;
  border: 1px solid #e0dace;
  border-radius: 0.62rem;
  padding: 1.1rem;
`

const Form = styled.form`
  display: grid;
  gap: 0.8rem;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const FieldLabel = styled.span`
  display: block;
  margin-bottom: 0.35rem;
  color: #4b4945;
  font-weight: 600;
`

const Input = styled.input`
  width: 100%;
  border: 1px solid #d8d2c8;
  border-radius: 0.42rem;
  padding: 0.62rem 0.72rem;
  font: inherit;
  background: #fbf9f5;
`

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #d8d2c8;
  border-radius: 0.42rem;
  padding: 0.62rem 0.72rem;
  font: inherit;
  background: #fbf9f5;
  min-height: 140px;
  resize: vertical;
`

const Button = styled.button`
  border: 0;
  border-radius: 0.42rem;
  background: #0f5f7f;
  color: #fff;
  font-weight: 600;
  padding: 0.7rem 1rem;
  width: fit-content;
  cursor: pointer;
`

const Links = styled.nav`
  display: grid;
  gap: 0.55rem;

  a {
    color: #0f5f7f;
  }
`

export default function ContactPage(): ReactNode {
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with North Arrow Research. We build geospatial software for conservation and natural resource management."
    >
      <Page>
        <Hero>
          <div className="container">
            <HeroTopLinks as="nav" aria-label="Primary">
              <HeroTopLink to="/">Home</HeroTopLink>
              <HeroTopLink to="/people">People</HeroTopLink>
              <HeroTopLink to="https://shop.northarrowresearch.com">Shop</HeroTopLink>
              <HeroTopLinkContact to="/contact-us">Contact Us</HeroTopLinkContact>
            </HeroTopLinks>
            <HeroContent>
              <HeroLogo src="/img/nar-logo.svg" alt="North Arrow Research logo" />
              <Title>Contact Us</Title>
            </HeroContent>
          </div>
        </Hero>
        <div className="container">
          <LayoutGrid>
            <Card>
              <Form action="https://formspree.io/f/mwvwnzrb" method="POST">
                <FormRow>
                  <label>
                    <FieldLabel>First Name (required)</FieldLabel>
                    <Input name="firstName" required />
                  </label>
                  <label>
                    <FieldLabel>Last Name (required)</FieldLabel>
                    <Input name="lastName" required />
                  </label>
                </FormRow>
                <label>
                  <FieldLabel>Email (required)</FieldLabel>
                  <Input type="email" name="email" required />
                </label>
                <label>
                  <FieldLabel>Message (required)</FieldLabel>
                  <Textarea name="message" required />
                </label>
                <Button type="submit">Send</Button>
              </Form>
            </Card>

            <Sidebar>
              <h2>North Arrow Research</h2>
              <p>
                <a href="mailto:info@northarrowresearch.com">info@northarrowresearch.com</a>
              </p>
              <Links>
                <Link to="/people">People</Link>
                <Link to="/">Home</Link>
              </Links>
            </Sidebar>
          </LayoutGrid>
        </div>
      </Page>
    </Layout>
  )
}
