import React from "react";
import styled from "styled-components";
import CreatedForm from "../components/CreatedForm";
import Form from "../components/Form";
import FormDetails from "../components/FormDetails";
import { deletepost } from "../actions/post";
import { useSelector, useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";

const AdminPanal = ({ currentId, setCurrentId }) => {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const EditHandler = (postid) => {
    setCurrentId(postid);
  };

  const DeleteHandler = (postid) => {
    console.log(postid);
    dispatch(deletepost(postid));
  };
  let location = useLocation();

  const pathId = location.pathname.split("/");
  const FormTitle = pathId[2];
  console.log(FormTitle);
  return (
    <Container>
      <h1>Your Requasts</h1>
      <CreatedForms>
        {posts.length > 0
          ? posts.map((post) => (
              <CreatedForm Formtitle={post.Formtitle} key={post.id}>
                <button
                  className="btn-edit"
                  onClick={() => EditHandler(post._id)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => DeleteHandler(post._id)}
                >
                  Delete
                </button>
              </CreatedForm>
            ))
          : " "}
        <EditForm>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </EditForm>
        {pathId[1] === "details" && <FormDetails FormTitle={FormTitle} />}
      </CreatedForms>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 2rem;
`;

const CreatedForms = styled.div`
  .btn-edit {
    width: 25%;
    margin: 0rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    padding: 10px 18px;
    border-radius: 15px;
    text-decoration: none;
    color: #fff;
    background: black;
    transition: all 0.4s ease;
    border: none;
    cursor: pointer;
    :hover {
      font-size: 17px;
    }
  }
  .btn-delete {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    padding: 10px 18px;
    border-radius: 15px;
    text-decoration: none;
    color: #fff;
    background: red;
    transition: all 0.4s ease;
    border: none;
    cursor: pointer;
    :hover {
      font-size: 17px;
    }
  }
`;

const EditForm = styled.div`
  position: fixed;
  right: 1.5rem;
  top: 6rem;
`;
export default AdminPanal;
