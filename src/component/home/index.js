import React from "react";
import "./index.css";
import admin from "../../images/admin.png";
import user from "../../images/man.png";
import classroom from "../../images/class.png";
import { useNavigate } from "react-router-dom";
import authApi from "../../apis/auth.api";
import { useLocalContext } from "../../context/context";
import cookie from "react-cookies";

const Home = () => {
  const navigate = useNavigate();
  const {list_admin,setListAdmin} = useLocalContext();
  const {list_class, setListClass} = useLocalContext();
  const {list_user, setListUser} = useLocalContext();

  const adminClick = async () => {
    try {
      const response = await authApi.getListAdmin();
      setListAdmin(response.data);
      cookie.save('list_admin',response.data)
      navigate("/admin");
    } catch (err) {
      if (Object.keys(err).length > 0) {
        alert(err?.message);
      } else {
        alert("An error has occurred");
      }
    }
  };

  const userClick = async () => {
    try {
      const response = await authApi.getListUser();
      setListUser(response.data);

      navigate("/user");
    } catch (err) {
      if (Object.keys(err).length > 0) {
        alert(err?.message);
      } else {
        alert("An error has occurred");
      }
    }
  };

  const classClick = async () => {
    try {
      const response = await authApi.getListClass();
      setListClass(response.data);

      navigate("/class");
    } catch (err) {
      if (Object.keys(err).length > 0) {
        alert(err?.message);
      } else {
        alert("An error has occurred");
      }
    }
  };

  return (
    <>
      <div className="container">
        <div
          className="admin"
          onClick={() => {
            adminClick();
          }}
        >
          <img className="img" src={admin} alt="" />
          <h1>Manage admin accounts</h1>
        </div>
        <div
          className="user"
          onClick={() => {
            userClick();
          }}
        >
          <img className="img" src={user} alt="" />
          <h1>Manage user accounts</h1>
        </div>
        <div
          className="classroom"
          onClick={() => {
            classClick();
          }}
        >
          <img className="img" src={classroom} alt="" />
          <h1>Manage classes</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
