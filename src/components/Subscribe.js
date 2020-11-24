import React from "react"
import styled from "styled-components"
import SubBg from "../assets/images/poster.jpg"
import { Button } from "./ButtonStyle"

const Subscribe = () => {
  return (
    <SubscribeContainer>
      <Content>
        <h1>Exclusive offers available for Members</h1>
        <p>Sign up to get 15% off on every trip</p>
        <form action="#">
          <Wrap>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </label>
            <Button
              as="button"
              type="submit"
              primary="true"
              css={`
                height: 48px;
                border-radius: 10rem;
                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }
                @media screen and (max-width: 400px) {
                  width: 100%;
                  min-width: 250px;
                }
              `}
            >
              Sign Up
            </Button>
          </Wrap>
        </form>
      </Content>
    </SubscribeContainer>
  )
}

export default Subscribe

const SubscribeContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${SubBg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw-1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 2rem);
    padding: 0 1rem;
  }
  p {
    text-align: center;
    font-size: clamp(1rem, 2vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 10;
  }
`

const Wrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`
