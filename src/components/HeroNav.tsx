import styled from '@emotion/styled'
import Link from '@docusaurus/Link'

export const HeroTopLinks = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  display: flex;
  gap: 1rem;
  z-index: 2;

  @media (max-width: 640px) {
    gap: 0.8rem;
  }
`

export const HeroTopLink = styled(Link)`
  color: #872175;
  font-size: 1.18rem;
  font-weight: 700;
  text-decoration: none;
  text-shadow: 0 1px 10px rgba(255, 255, 255, 0.8);

  &:hover {
    color: #872175;
    text-decoration: underline;
  }

  @media (max-width: 640px) {
    font-size: 1.04rem;
  }
`

export const HeroTopLinkContact = styled(HeroTopLink)`
  padding-right: 20px;
`

export const HeroLogo = styled.img`
  width: 200px;
  max-width: 72vw;
  height: auto;
  display: block;
  margin: 0 0 1.15rem;
`
