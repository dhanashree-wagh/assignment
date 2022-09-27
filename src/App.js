import React from "react";
// import { BrowserRouter, Route, Navigate , Routes } from "react-router-dom";
import UserPage from "./containers/UserPage";

import "./App.css";

function App() {
  // const username = prompt("Enter Github Username");
  

  return (
    <UserPage/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/:userName" component={UserPage} />
    //     {/* <Redirect to={`/${username}`} /> */}
    //     <Route path='/' element={<Navigate replace to='/${username}' />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;