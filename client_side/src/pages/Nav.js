import React from "react";
import styled from "styled-components";
import logo from "../img/2.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Container>
      <InnerDiv>
        <img src={logo} alt="logo" />
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h5>Home</h5>
          </Link>
          <Link to="/adminpanal" style={{ textDecoration: "none" }}>
            <h5>AdminPanal</h5>
          </Link>
        </div>
      </InnerDiv>
    </Container>
  );
};

const Container = styled.div`
  min-height: 4rem;
  background-color: rgb(17, 65, 103);
`;

const InnerDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  img {
    width: 20rem;
    height: 3rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    h5 {
      color: white;
      margin: 0rem 2rem;
      font-size: 1.1vw;
      font-weight: 800;
      &:hover {
        text-decoration: underline;
        font-size: 1.2rem;
      }
    }
  }
`;

export default Nav;
