import React,{useEffect,useState} from "react";
import {useDispatch} from "react-redux";
import Form from "./components/Form"
import AdminPanal from "./pages/AdminPanal";
import GlobalStyles from "./components/GlobalStyles";
import {getposts} from "./actions/post";
import { Route } from "react-router-dom";
const App = () => {
  const [currentId,setCurrentId]=useState(null)
  const dispatch =useDispatch();
  useEffect(() =>{
      dispatch(getposts()); 
  },[dispatch])
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={"/"} exact>
       <Form  currentId={currentId} setCurrentId={setCurrentId}/>
      </Route>
      <Route path={"/adminpanal"} exact>
       <AdminPanal currentId={currentId} setCurrentId={setCurrentId}/>
      </Route>
      
    </div>
  );
};

export default App;
