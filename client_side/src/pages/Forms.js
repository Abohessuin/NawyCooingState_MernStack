import React from "react";
import Form from "../components/Form";
import styled from "styled-components";
const Forms = ({ currentId,setCurrentId}) => {
  return (
    <Container>
      <Form currentId={currentId}  setCurrentId={setCurrentId}/>;
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 2rem 2rem;
`;

export default Forms;
