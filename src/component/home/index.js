import React from "react";
import './index.css';
import admin from '../../images/admin.png'
import user from '../../images/man.png'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
        <div className="container">
            <div className="admin" onClick={()=>{navigate('/admin')}}>
                <img className="img" src={admin} alt=""/>
                <h1>Manage admin account</h1>
            </div>
            <div className="user" onClick={()=>{navigate('/user')}}>
                <img className="img" src={user} alt=""/>
                <h1>Manage user account</h1>
            </div>
        </div>
        </>
    )
}

export default Home