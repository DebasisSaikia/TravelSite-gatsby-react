import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { IoMdCompass } from "react-icons/io"
import { FaFortAwesomeAlt } from "react-icons/fa"

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { in: ["port1", "port2"] } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ReviewsContainer>
      <Headline></Headline>
      <Description>1000+ Happy Travellers</Description>
      <ContentWrapper>
        <FirstColumn>
          <Review>
            <IoMdCompass
              css={`
                color: #2980b9;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Debasis Saikia</h3>
            <p>
              Travel made easy.Best service and I appreciate their way of
              talking and attending service calls and dealing with problems and
              reaching out to customers quickly.
            </p>
          </Review>
          <Review>
            <FaFortAwesomeAlt
              css={`
                color: orange;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>John Legend</h3>
            <p>
              Best experience during my whole trip.No extra charge and
              everything is included with a minimum cost. Thank you for giving
              such a wonderful trip.
            </p>
          </Review>
        </FirstColumn>
        <SecondColumn>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </SecondColumn>
      </ContentWrapper>
    </ReviewsContainer>
  )
}

export default Reviews

const ReviewsContainer = styled.div`
  width: 100%;
  background: #111;
  color: #fff;
  /* background: #e44d26;
  background: -webkit-linear-gradient(to left, #f16529, #e44d26);
  background: linear-gradient(to left, #f16529, #e44d26); */
  /* background: #f2994a;
  background: -webkit-linear-gradient(to left, #f2c94c, #f2994a);
  background: linear-gradient(to left, #f2c94c, #f2994a); */

  padding: 5rem calc((100vw-1300px) / 2);
  height: 100%;
`
const Headline = styled.p`
  color: #fff;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
  margin-top: 1rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 3rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
  color: #f39c12;
  padding-top:1rem;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Review = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.7rem;
    font-style: italic;
  }
  p {
    color: #ecf0f1;
    font-weight: bold;
  }
`
const FirstColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const SecondColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;
  margin-bottom: 2rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 5px;
  height: 100%;
`
