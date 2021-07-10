import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const FormDetails = ({ FormTitle }) => {
  const history = useHistory();
  const post = useSelector((state) =>
    state.post.find((p) => p.Formtitle === FormTitle)
  );
  console.log(post);
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/adminpanal");
    }
  };
  return (
    <Container className="shadow" onClick={exitDetailHander}>
      <Detail>
        <h1>{post.Formtitle}</h1>

        <Parent>
          <div>
            <p>{post.Description}</p>
          </div>
          <div>
            <h3>Name:{post.name}</h3>
            <h3>Phone:{post.Phone}</h3>
            <h3>Email:{post.Email}</h3>
          </div>
          <div>
            <h3>Call time:{post.calltime}</h3>
            <h3>Propeerty Type:{post.propertyType}</h3>
          </div>
        </Parent>
      </Detail>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Parent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Detail = styled.div`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  top: 40%;
  color: black;
  z-index: 10;
  h1 {
    text-align: center;
  }
  div {
    h3 {
      margin: 2rem 2rem;
    }
  }
`;

export default FormDetails;
