import React, { useState} from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import authApi from '../../apis/auth.api';
import cookie from 'react-cookies';
import {useNavigate} from 'react-router-dom'
import { useLocalContext } from '../../context/context';

const Login = () => {

    const navigate = useNavigate()

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const {setDataInfo, setAuthLogin} = useLocalContext();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [check, setChecked] = useState(false);

    const login = async e => {
        try {
            e.preventDefault()

            const response = await authApi.login({ username, password })
            
            setDataInfo(response.data);
            setAuthLogin(true)
            // set access_token to cookie
            cookie.save('access_token', response.data?.access_token);
            cookie.save('user_data', response.data);
            alert(response.message)
            setChecked(!check)
            navigate("/")

        }
        catch (err) {
            console.log("ERROR login, err: ", err)

            if (Object.keys(err).length > 0) {
                alert(err?.message)
            }
            else {
                alert('An error has occurred')
            }
        }
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <div>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h1>Admin page</h1>
                        <h2>Sign In</h2>
                    </Grid>
                </div>
                <form onSubmit={login}>
                    <TextField onChange={(e) => setUsername(e.target.value)} label='Username' placeholder='Enter username' fullWidth required />
                    <TextField onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>
                        Sign in
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login;