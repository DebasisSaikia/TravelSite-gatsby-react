import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#f39c12" : "#0778F1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #111;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width:100px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  border-radius:5px;

  & :hover{
      background: ${({ primary }) => (primary ? "#0778F1" : "#F26A2E")}; 
      transform:translateY(-2px);
  }
`
