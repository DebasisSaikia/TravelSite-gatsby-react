import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa"
// import { Link } from "react-router-dom"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="#">Our Offices</FooterLink>
              <FooterLink to="#">Testimonials</FooterLink>
              <FooterLink to="#">Careers</FooterLink>
              <FooterLink to="#">Funding</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Connect</FooterLinkTitle>
              <FooterLink to="#">Instagram</FooterLink>
              <FooterLink to="#">Twitter</FooterLink>
              <FooterLink to="#">LinkedIn</FooterLink>
              <FooterLink to="#">Pinterest</FooterLink>
              <FooterLink to="#">Github</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>

            <FooterLinkItems>
              <FooterLinkTitle>Contact </FooterLinkTitle>
              <FooterLink to="#">+91-6901360467</FooterLink>
              <FooterLink to="#">debasishsaikia136@gmail.com</FooterLink>
              <FooterLink to="#">Technology-ReactJs,</FooterLink>
              <FooterLink to="#">Styled components,</FooterLink>
              <FooterLink to="#">Gatsby JS,GraphQL</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">TraveList</SocialLogo>
            <WebsiteRights>@Debasis Saikia &copy;2020</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/debasis-saikia-6b8165bb/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/DebasisSaikia"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/def1b56da62146a"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Pinterest">
                <FaPinterest />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  background: #111;
`

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color:orange;
    transition: 0.3s ease-out;
  }
`

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const SocialLogo = styled(Link)`
  color: orange;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

const SocialIconLink = styled.a`
  color: orangered;
  font-size: 24px;
  cursor: pointer;
  &:hover{
    color:orange;
  }
`
