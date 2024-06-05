/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login(props) {

    let navigate = useNavigate();

    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);

    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleClick = async (e) => {
        // e.preventDefault();
        const url = "https://inotebook-backend-lsgn.onrender.com/api/auth/login";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ "email": email, "password": password })
        });

        const json = await response.json();
        console.log(json);
        if(json.success){
            //redirect
            localStorage.setItem("token", json.authToken);
            navigate("/");
        }
        else{
            alert("invalid credentails");
        }



    }


    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} aria-describedby="emailHelp" onChange={handleEmail} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} id="exampleInputPassword1" onChange={handlePassword} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}
