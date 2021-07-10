import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CreatedForm = ({ children, Formtitle }) => {
  return (
    <Container>
      <div className="upperCard">
        <h1>{Formtitle}</h1>
        <Link to={`/details/${Formtitle}`} style={{ textDecoration: "none" }}>
          <h3>Requast Details</h3>
        </Link>
      </div>
      <div className="lowerCard">{children}</div>
    </Container>
  );
};

const Container = styled.div`
  margin: 3rem 2rem;
  width: 40rem;
  min-height: 5rem;
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 2px;
  background-clip: padding-box;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  line-height: 3rem;
  h1 {
    text-align: center;
    color: white;
    text-shadow: 1.5px 1.5px black;
  }
  h3 {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    margin: 0rem 0.5rem;
    color: #114167;
    :hover {
      text-decoration: underline;
    }
  }
  .upperCard {
    height: 80%;
    background-color: SteelBlue;
  }
  .lowerCard {
    padding: 0.5rem 0.5rem;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default CreatedForm;
