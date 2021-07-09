import React, { useState,useEffect } from "react";
import { createpost,updatepost } from "../actions/post";
import {useDispatch,useSelector} from "react-redux";
import styled from "styled-components";

const Form = ({currentId,setCurrentId}) => {
  const post = useSelector((state) =>currentId?state.post.find((p)=>p._id===currentId):null);
  useEffect(() =>{
     if(post) setformData(post)
  },[post])
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
    if(currentId){
      dispatch(updatepost(currentId,formData));
     
    }else{
      dispatch(createpost(formData));
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
        <label>Email</label>
        <br />
        <input
          type="text"
          value={formData.Email}
          onChange={(e) => {
            setformData({ ...formData, Email: e.target.value });
          }}
        />
        <br />
        <label>Best time to call</label>
        <br />
        <input
          type="text"
          value={formData.calltime}
          onChange={(e) => {
            setformData({ ...formData, calltime: e.target.value });
          }}
        />
        <br />
        <label>Property Type</label>
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
        <input type="submit"/>
        <button onClick={clearHandler}>Clear</button>
      </form>
    </Container>
  );
};

const Container = styled.div``;



export default Form;
