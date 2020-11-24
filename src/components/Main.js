import React from "react"
import styled from "styled-components"
import { Button } from "./ButtonStyle"

const Main = () => {
  return (
    <MainContainer>
      <MainBg>
        <VideoBg
          src="https://storage.coverr.co/videos/jtzK9mg3WbXWHEH026zUD7zuvFvSu1OPb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjA1NTMyMzAxfQ.YnPx90s-906aVFA6ha3QYvx5dVTb8RbNQzxOCxZaDyg"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </MainBg>
      <MainContent>
        <MainItems>
          <MainH1>Travel like a Local</MainH1>
          <MainP>Discover your favorite places</MainP>
          <Button
            big="true"
            primary="true"
            round="true"
            css={`
              @media screen and (max-width: 480px) {
                padding: 14px 22px;
              }
            `}
          >
            Get Started
          </Button>
        </MainItems>
      </MainContent>
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const MainBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const MainContent = styled.div`
  z-index: 3;
  height: calc(100vh-80px);
  max-height: 100%;
  padding: 0rem calc((100vw-1300px) / 2);
`

const MainItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: 400;
`

const MainH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  font-weight: 800;

  @media (max-width: 768px) {
    text-align: center;
    font-size:2rem;
  }
`

const MainP = styled.p`
  font-size: clamp(1rem, 2vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
  
`
