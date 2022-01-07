import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./component/home";
import Login from "./component/login";
import Header from "./component/Header/Header";
import AdminList from "./component/list-admin";
import UserList from "./component/list-user";
import ClassList from "./component/list-class";
import AdminDetail from "./component/detail-admin";
import UserDetail from "./component/detail-user";
function App() {
  return (
    <>
      <Router>
        <Header isLogin={'true'}/>
        <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/admin"} element={<AdminList/>}/>
        <Route exact path={"/admin/:adminId"} element={<AdminDetail/>}/>
        <Route exact path={"/user"} element={<UserList/>}/>
        <Route exact path={"/user/:userId"} element={<UserDetail/>}/>
        <Route exact path={"/class"} element={<ClassList/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
