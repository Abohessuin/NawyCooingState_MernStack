import React, { useState, useEffect } from "react";
import { createpost, updatepost } from "../actions/post";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Form = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.post.find((p) => p._id === currentId) : null
  );
  useEffect(() => {
    if (post) setformData(post);
  }, [post]);
  const [formData, setformData] = useState({
    Formtitle: "",
    Image: "",
    Description: "",
    name: "",
    Phone: "",
    Email: "",
    calltime: "",
    propertyType: "Defualt",
  });
  const clearHandler = (e) => {
    e.preventDefault();
    setCurrentId(null);
    setformData({
      Formtitle: "",
      Image: "",
      Description: "",
      name: "",
      Phone: "",
      Email: "",
      calltime: "",
      propertyType: "Defualt",
    });
  };
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatepost(currentId, formData));
    } else {
      console.log(formData.Formtitle.length);
      console.log(formData.Image.length);
      console.log(formData.Description.length);
      console.log(formData.name.length);
      console.log(formData.Phone.length);
      if (
        formData.Formtitle.length === 0 ||
        formData.Image.length === 0 ||
        formData.Description.length === 0 ||
        formData.name.length === 0 ||
        formData.Phone.length === 0
      ) {
        alert("Check that all star field contain values");
      } else {
        dispatch(createpost(formData));
      }
    }
  };
  return (
    <Container>
      <form onSubmit={submitHandler}>
        <label>Form title*</label>
        <br />
        <input
          type="text"
          value={formData.Formtitle}
          onChange={(e) => {
            setformData({ ...formData, Formtitle: e.target.value });
          }}
        />
        <br />
        <label>Image*:</label>
        <br />
        <input
          type="text"
          value={formData.Image}
          onChange={(e) => {
            setformData({ ...formData, Image: e.target.value });
          }}
        />
        <br />
        <label>Description*:</label>
        <br />
        <input
          type="text"
          value={formData.Description}
          onChange={(e) => {
            setformData({ ...formData, Description: e.target.value });
          }}
        />
        <br />
        <label>name*:</label>
        <br />
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setformData({ ...formData, name: e.target.value });
          }}
        />
        <br />
        <label>Phone*:</label>
        <br />
        <input
          type="text"
          value={formData.Phone}
          onChange={(e) => {
            setformData({ ...formData, Phone: e.target.value });
          }}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="text"
          value={formData.Email}
          onChange={(e) => {
            setformData({ ...formData, Email: e.target.value });
          }}
        />
        <br />
        <label>Best time to call:</label>
        <br />
        <input
          type="text"
          value={formData.calltime}
          onChange={(e) => {
            setformData({ ...formData, calltime: e.target.value });
          }}
        />
        <br />
        <label>Property Type:</label>
        <br />
        <select
          id="Property Type"
          name="Property Type"
          onChange={(e) => {
            setformData({ ...formData, propertyType: e.target.value });
          }}
        >
          <option value={formData.propertyType}>default</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Twinhouse">Twinhouse</option>
        </select>
        <br />
        <br />
        <FormAction>
          <input type="submit" />
          <button onClick={clearHandler}>Clear</button>
        </FormAction>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  min-height: 23rem;
  background-color: #fff;
  border-radius: 30px;
  padding: 1rem 1rem;
  z-index: 1;
  label {
    color: #898989;
    font-size: 13px;
    margin: 0.5rem 0.5rem;
  }
  input {
    border: 1px solid #b4bfcf;
    width: 100%;
    border-radius: 11px;
    padding: 0.3rem 0.3rem;
    :focus {
      outline: none;
    }
    margin: 0.2rem 0rem;
  }
`;
const FormAction = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    padding: 10px 18px;
    border-radius: 15px;
    text-decoration: none;
    color: #fff;
    background: #8426d4;
    transition: all 0.4s ease;
    border: none;
    cursor: pointer;
    :hover {
      font-size: 17px;
    }
  }
  button {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-color: red;
    border-radius: 15px;
    text-decoration: none;
    color: #fff;
    background: #8426d4;
    transition: all 0.4s ease;
    border: none;
    cursor: pointer;
    :hover {
      font-size: 17px;
    }
  }
`;

export default Form;
