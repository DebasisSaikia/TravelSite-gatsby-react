import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GrMapLocation } from "react-icons/gr"
import { Button } from "./ButtonStyle"

const Places = ({ textHeading }) => {
  const data = useStaticQuery(graphql`
    query PlacesQuery {
      allPlacesJson {
        edges {
          node {
            alt
            name
            view
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function renderPlaces(data) {
    const placesArray = []
    data.allPlacesJson.edges.forEach((item, index) => {
      placesArray.push(
        <PlacesCard key={index}>
          <Image
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <PlacesInfo>
            <TextWrap>
              <GrMapLocation style={{ color: "#fff" }} />
              <Title>{item.node.name}</Title>
            </TextWrap>
            <Button
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
                border-radius: 5px;
              `}
              to="/destinations"
              primary="true"
            >
              {item.node.view}
            </Button>
          </PlacesInfo>
        </PlacesCard>
      )
    })
    return placesArray
  }

  return (
    <PlacesContainer>
      <Heading>{textHeading} </Heading>
      <Wrapper>{renderPlaces(data)}</Wrapper>
    </PlacesContainer>
  )
}

export default Places

const PlacesContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);
  background: #ece9e6;
  background: -webkit-linear-gradient(to right, #ffffff, #ece9e6);
  background: linear-gradient(to right, #ffffff, #ece9e6);
  color: #fff;
`

const Heading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 2rem;
  color: #000;
  font-weight: 600;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const PlacesCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 4px;
  transition: 0.2s ease;
`

const Image = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const PlacesInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
  color: #fff;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-left: 0.5rem;
`
