import React, {useState} from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";
export const LoginPage = () => {
    const [userDetail, setUserDetail] = useState({email:"", password:""});
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const loginHandler = (e) => {
        setUserDetail( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    const loginUserHandler = async () => {
        try{
            const response = await axios.post("/api/auth/login",userDetail)
            setUser({
                user: response.data.foundUser,
                token: response.data.encodedToken
            });
            navigate("/products")
        console.log(response.data.foundUser)

        }
        catch (error){
            console.log(error);
        }

    }
    return(
        <React.Fragment>
            <div>
                <h1 style={{textAlign:"center"}} className="welcome">Welcome to<span className="span-head"> Calendar</span></h1>
                <h2 className="login-heading"style={{textAlign:"center",margin:"1rem"}}>Login</h2>
                <div className="input-box">
                <label htmlFor="login-email">
                <h4 className="lbl">Email</h4>
                <input 
                name="email"
                id="login-email"
                onChange={ e => loginHandler(e)}
                value={userDetail.email}
                className="login-email-id" 
                type="text" 
                placeholder="Enter email"/>
            </label>
            <label htmlFor="login-password">
                <h4 className="lbl">Password</h4>
                <input 
                name="password"
                onChange={ e => loginHandler(e)}
                value={userDetail.password}
                className="login-pw" 
                id="login-password" 
                type="password" 
                placeholder="Password"/>
            </label>
            <div className="login-btn-box">
            <button className="login-btn" onClick={()=>loginUserHandler()}> Login</button>
            </div>
                </div>
            </div>
        </React.Fragment>
    )
}