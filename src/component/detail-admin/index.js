import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { list_admin } from "../../dummy-data/admin";
import "./index.css";

const AdminDetail = () => {
  const adminId = useParams();
  const admin = list_admin.find((acc) => (acc.id = adminId));
  const fullname = admin?.fullName;
  const email = admin?.email;
  const username = admin?.username;
  const createAt = admin?.createAt;

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
