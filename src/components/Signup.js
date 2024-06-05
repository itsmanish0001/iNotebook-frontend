/* eslint-disable no-unused-vars */
import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const navigate = useNavigate();

    const [info, setInfo] = useState({
        "name": "",
        "email":"",
        "password": "",
        "cpassword" : ""
    })

    const onchange=(e)=>{
        setInfo({...info, [e.target.name]: e.target.value});

    }

    const handleClick = async(e) => {
        e.preventDefault();
        const url = "https://inotebook-backend-lsgn.onrender.com/api/auth/createuser";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ "email": info.email, "password": info.password, "name": info.name })
        });

        const json = await response.json();
        console.log(json);
        if(json.success === false){
            alert("failed")
        }
        else{
            localStorage.setItem('token', json.authToken);
            navigate("/");
        }

    }

    return (
        <div className="container">

            <form onSubmit={handleClick}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name = "name" value = {info.name} aria-describedby="emailHelp" onChange= {onchange} required minLength={3} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name = "email" value = {info.email} aria-describedby="emailHelp" onChange= {onchange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name = "password" value = {info.password} onChange= {onchange} required minLength={5} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" name = "cpassword" value = {info.cpassword} onChange= {onchange} required minLength={5}/>
                </div>

                <button type="submit" className="btn btn-primary"  >Submit</button>
            </form>

        </div>
    )
}
