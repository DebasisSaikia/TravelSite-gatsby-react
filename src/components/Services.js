import React from "react"
import styled from "styled-components"
import { AiOutlineGlobal } from "react-icons/ai"
import { IoMdAirplane } from "react-icons/io"
import { RiTimer2Fill } from "react-icons/ri"
import { BiMoney } from "react-icons/bi"

const ServiceData = [
  {
    icon: (
      <AiOutlineGlobal
        css={`
          color: #2980b9;
        `}
      />
    ),
    title: "Anywhere around the World",
    desc: "From South East Asia to Europe",
  },
  {
    icon: (
      <IoMdAirplane
        css={`
          color: #8e44ad;
        `}
      />
    ),
    title: "10K + happy travellers",
    desc: "Start your nomadic journey now",
  },
  {
    icon: (
      <RiTimer2Fill
        css={`
          color: #cd6133;
        `}
      />
    ),
    title: "24/7 active support team",
    desc: "Ask for any query regarding travel and budget",
  },
  {
    icon: (
      <BiMoney
        css={`
          color: #227093;
        `}
      />
    ),
    title: "Seasonal offers available",
    desc: "Plan your next trip with minimum budget",
  },
]

const Services = () => {
  return (
    <ServiceContainer>
      <Heading>What We Offer?</Heading>
      <Wrapper>
        {ServiceData.map((item, index) => {
          return (
            <ServiceBox key="index">
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </ServiceBox>
          )
        })}
      </Wrapper>
    </ServiceContainer>
  )
}

export default Services

const ServiceContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #111;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw-1300px) / 2);
`
const Heading = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const ServiceBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  transition: 0.3s;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const Title = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const Description = styled.p`
  @media (max-width: 768px) {
    text-align: center;
  }
`
