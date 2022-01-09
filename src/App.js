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
import ClassDetail from "./component/detail-class";
import CreateAdmin from "./component/create-admin-account";
import AuthMiddleware from "./middleware/auth.middleware";
import cookie from "react-cookies";
import authApi from "./apis/auth.api";
import { useLocalContext } from "./context/context";

function App() {
  const { dataInfo, authLogin, setDataInfo, setAuthLogin } = useLocalContext();

  const [loadingAuth, setloadingAuth] = useState(true);

  // auto check access_token
  useEffect(() => {
    async function fetchData() {
      let access_token = cookie.load("access_token");
      if (!!access_token) {
        try {
          setloadingAuth(true);
          let response = await authApi.authenticate();

          setDataInfo(response.data);
          setAuthLogin(true);

          // set access_token to cookie
          cookie.save("access_token", response.data?.access_token);
          cookie.save("user_data", response.data);
        } catch (err) {
          console.log(err);
          setAuthLogin(false);
        }
      }
      setloadingAuth(false);
    }
    fetchData();
  }, [setDataInfo,setAuthLogin,setloadingAuth]);

  return (
    <>
      {!loadingAuth ? (
        <Router>
          <Header />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/"
              element={
                <AuthMiddleware>
                  <Home />
                </AuthMiddleware>
              }
            />
            <Route
              exact
              path="/admin"
              element={
                <AuthMiddleware>
                  <AdminList />
                </AuthMiddleware>
              }
            />
            <Route
              exact
              path="/create-admin"
              element={
                <AuthMiddleware>
                  <CreateAdmin />
                </AuthMiddleware>
              }
            />
            <Route
              exact
              path="/admin/:adminId"
              element={
                <AuthMiddleware>
                  <AdminDetail />
                </AuthMiddleware>
              }
            />
            <Route
              exact
              path="/user"
              element={
                <AuthMiddleware>
                  <UserList />
                </AuthMiddleware>
              }
            />
            <Route
              exact
              path="/class"
              element={
                <AuthMiddleware>
                  <ClassList />
                </AuthMiddleware>
              }
            />            
            <Route
            exact
            path="/class/:userId"
            element={
              <AuthMiddleware>
                <UserDetail />
              </AuthMiddleware>
            }
          />
            <Route
              exact
              path="/class/:classId"
              element={
                <AuthMiddleware>
                  <ClassDetail />
                </AuthMiddleware>
              }
            />
          </Routes>
        </Router>
      ) : (
        <h3>Loading....</h3>
      )}
    </>
  );
}

export default App;
