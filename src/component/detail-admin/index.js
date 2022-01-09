import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import cookie from "react-cookies";

const AdminDetail = () => {
  const {adminId} = useParams();
  const list_admin = cookie.load("list_admin");

  const admin = list_admin.find((acc) => (acc.id === adminId));

  console.log(admin)
  const fullname = admin?.fullname;
  const email = admin?.email;
  const username = admin?.username;
  let createAt = admin?.createAt;

  if (!createAt){
    createAt="1/7/2022 03:24:00 PM" 
  }
  
  return (
    <div>
      <h1 align="center">Admin Detail</h1>
      <div className="detail-container">
      <div className="information">
        <p className="title">Full name</p>
        <p className="info">{fullname}</p>
      </div>

      <div className="information">
        <p className="title">Username</p>
        <p className="info">{username}</p>
      </div>

      <div className="information">
        <p className="title">Email</p>
        <p className="info">{email}</p>
      </div>

      <div className="information">
        <p className="title">Create at</p>
        <p className="info">{createAt}</p>
      </div>
      </div>
    </div>
  );
};

export default AdminDetail;
