import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CreatedForm = ({ children,Formtitle }) => {
  return (
    <Container>
      <h3>{Formtitle}</h3>
      <Link to={`/${Formtitle}`}>Requast Details</Link>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 2rem 2rem;
`;

export default CreatedForm;
