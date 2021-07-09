import React, { useState } from "react";
import styled from "styled-components";
import CreatedForm from "../components/CreatedForm";
import Form from "../components/Form";
import { deletepost } from "../actions/post";
import { useSelector, useDispatch } from "react-redux";

const AdminPanal = ({ currentId,setCurrentId }) => {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const EditHandler = (postid) => {
    setCurrentId(postid);
  };

  const DeleteHandler = (postid) => {
    console.log(postid);
    dispatch(deletepost(postid));
  };
  return (
    <Container>
      <CreatedForms>
        {posts.length > 0
          ? posts.map((post) => (
              <CreatedForm Formtitle={post.Formtitle} key={post.id}>
                <button onClick={() => EditHandler(post._id)}>Edit</button>
                <button onClick={() => DeleteHandler(post._id)}>Delete</button>
              </CreatedForm>
            ))
          : " "}
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
      </CreatedForms>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 2rem 2rem;
`;

const CreatedForms = styled.div``;

export default AdminPanal;
