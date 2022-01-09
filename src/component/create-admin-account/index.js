import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import authApi from "../../apis/auth.api";
import Notification from "../Notifications/Notification";
import { useNavigate } from "react-router-dom";

const CreateAdmin = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const create = async (e) => {
    try {
      e.preventDefault();
      await authApi.register({
        username: username,
        password: password,
        fullname: fullname,
        email: email,
      });
      setNotify({
        isOpen: true,
        message: "Create new admin account successfully!",
        type: "success",
      });

      window.open("/admin", "_self", "")
    } catch (err) {
      console.log("ERROR login, err: ", err);

      if (Object.keys(err).length > 0) {
        alert(err?.message);
      } else {
        // An error has occurred
        alert("An error has occurred");
      }
    }
  };
  return (
    <div>
      <h1 align="center">Create Admin Account</h1>

      <form
        onSubmit={create}
        style={{
          width: "50%",
          margin: "auto",
          align: "center",
          alignItems: "center",
        }}
      >
        <TextField
          onChange={(e) => setFullname(e.target.value)}
          label="Full name"
          placeholder="Enter Full name"
          required
          fullWidth
          style={{ margin: "1rem" }}
        />
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          placeholder="Enter username"
          required
          fullWidth
          style={{ margin: "1rem" }}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="Enter email"
          type="email"
          required
          fullWidth
          style={{ margin: "1rem" }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Enter password"
          type="password"
          required
          fullWidth
          style={{ margin: "1rem" }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={{ display: "flex", margin: "0 24rem" }}
        >
          Create
        </Button>
      </form>
      <Notification Notify={Notify} setNotify={setNotify} />
    </div>
  );
};

export default CreateAdmin;
