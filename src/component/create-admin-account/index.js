import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { list_admin } from "../../dummy-data/admin";
import {
  TextField,
  Button
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const CreateAdmin = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [createAt, setCreateAte] = useState("");

  const create = () => {
      navigate('/admin')
 };
  return (
    <div>
      <h1 align="center">Create Admin Account</h1>

        <form onSubmit={create} style={{
            width:'50%',
            margin:'auto',
            align:'center',
            alignItems:'center'
        }}>
          <TextField
            onChange={(e) => setFullname(e.target.value)}
            label="Full name"
            placeholder="Enter Full name"
            required
            fullWidth
            style={{margin:'1rem'}}
          />
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            placeholder="Enter username"
            required
            fullWidth
            style={{margin:'1rem'}}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter email"
            type='email'
            required
            fullWidth
            style={{margin:'1rem'}}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter password"
            type="password"
            required
            fullWidth
            style={{margin:'1rem'}}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{display:'flex', margin:'0 24rem'}}
          >
            Create
          </Button>
        </form>
    </div>
  );
};

export default CreateAdmin;
