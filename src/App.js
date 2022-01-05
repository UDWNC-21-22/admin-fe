import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./component/home";
import Login from "./component/login";
import Header from "./component/Header/Header";
import AdminList from "./component/list-admin";
import UserList from "./component/list-user";

function App() {
  return (
    <>
      <Router>
        <Header isLogin={'true'}/>
        <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/admin"} element={<AdminList/>}/>
        <Route exact path={"/user"} element={<UserList/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
