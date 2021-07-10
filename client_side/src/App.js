import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Forms from "./pages/Forms";
import AdminPanal from "./pages/AdminPanal";
import Nav from "./pages/Nav";
import GlobalStyles from "./components/GlobalStyles";
import { getposts } from "./actions/post";
import { Route } from "react-router-dom";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getposts());
  }, [dispatch]);
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={"/"} exact>
        <Forms currentId={currentId} setCurrentId={setCurrentId} />
      </Route>
      <Route path={["/adminpanal", "/details/:compoundtitle"]}>
        <AdminPanal currentId={currentId} setCurrentId={setCurrentId} />
      </Route>
    </div>
  );
};

export default App;
