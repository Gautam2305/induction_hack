import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
export const SignupPage = () => {
    const navigate = useNavigate()

    const [userSignup, setUserSignup] = useState({
        username:"",
        email:"",
        password:"",
    });
    const { setUser } = useAuth();

    const signupHandler = (e) => {
        setUserSignup( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const signupUserHandler = async () => {
        try{
            const response = await axios.post("/api/auth/signup", userSignup)
            setUser({
                user: response.data.createdUser,
                token: response.data.encodedToken
            });
            navigate("/")
        }catch (error){
            console.log(error)
        }
    }
    return(
        <React.Fragment>
            <div>
                <h1 style={{textAlign:"center"}} className="welcome">Welcome to<span className="span-head"> Calendar</span></h1>
                <h2 className="login-heading"style={{textAlign:"center",margin:"1rem"}}>Signup</h2>
                <div className="input-box">
                <label htmlFor="login-username">
                <h4 className="lbl">Username</h4>
                <input 
                name="password"
                onChange={ e => signupHandler(e)}
                value={userSignup.username}
                className="login-user" 
                id="login-username" 
                type="text" 
                placeholder="Username"/>
            </label>
                <label htmlFor="login-email">
                <h4 className="lbl">Email</h4>
                <input 
                name="email"
                id="login-email"
                onChange={ e => signupHandler(e)}
                value={userSignup.email}
                className="login-email-id" 
                type="text" 
                placeholder="Enter email"/>
            </label>
            <label htmlFor="login-password">
                <h4 className="lbl">Password</h4>
                <input 
                name="password"
                onChange={ e => signupHandler(e)}
                value={userSignup.password}
                className="login-pw" 
                id="login-password" 
                type="password" 
                placeholder="Password"/>
            </label>
            <div className="login-btn-box">
            <button className="login-btn" onClick={()=>signupUserHandler()}>Signup</button>
            </div>
                </div>
            </div>
        </React.Fragment>
    )
}