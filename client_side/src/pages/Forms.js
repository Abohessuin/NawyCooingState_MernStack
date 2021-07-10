import React from "react";
import Form from "../components/Form";
import styled from "styled-components";
import backgorund from "../img/1.jpg";
const Forms = ({ currentId, setCurrentId }) => {
  return (
    <Container>
      <div className="background">
        <img src={backgorund} alt="background" />
      </div>
      <Incontainer>
        <FormBack>
          <div className="content">
            <h1>Get in touch with us!</h1>
            <h3>we have multiple properties in cairo fill the form below</h3>
          </div>
          <div className="theform">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </FormBack>
      </Incontainer>
    </Container>
  );
};

const Container = styled.div`
  .background {
    height: 20rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Incontainer = styled.div`
  width: 100%;
  position: relative;
`;

const FormBack = styled.div`
  height: 13rem;
  width: 80%;
  margin: 3rem 9rem;
  background-color: #9236d9;
  border-radius: 1rem;
  .content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 2.2rem;
    text-shadow: 1.1px 1.1px black;
  }
  .theform {
    position: absolute;
    right: 15rem;
    top: 15rem;
    right: 18rem;
    z-index: 1;
  }
`;

export default Forms;
