import { useState } from "react";
import { baseUrl } from "../config/api";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../store/action/actionCreator";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

 export default function FormRegister(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ dataUser, setDataUser ] = useState({
        username : "",
        email : "",
        password :"",
        role : "",
        phoneNumber : "",
        address : "",
    })

    const handleChange = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await dispatch(registerUser(dataUser))
        toast.success("Register Success")
        navigate("/")
        // try {
        //     let data = {
        //         ...dataUser
        //     }
        //     const response = await fetch(`${baseUrl}/register`, {
        //         method : "POST",
        //         headers : {
        //             "Content-Type": "application/json"
        //         },
        //         body : JSON.stringify(data)
        //     })
        //     const result = await response.json()
        // } catch (err) {
        //     console.log(err);
        // }
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    }

    const formStyle = {
        width: "50%",
        padding: "20px",
    }
    return (
        <section style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h1>Register</h1>
                <h5>Create your staff account. It's only takes a minute</h5>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={dataUser.username}
                        onChange={(event) => handleChange(event)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={dataUser.email}
                        onChange={(event) => handleChange(event)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={dataUser.password}
                        onChange={(event) => handleChange(event)} />
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Role</label>
                    <input
                        type="text"
                        className="form-control"
                        name="role"
                        value={dataUser.role}
                        onChange={(event) => handleChange(event)} />
                </div> */}
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        value={dataUser.phoneNumber}
                        onChange={(event) => handleChange(event)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={dataUser.address}
                        onChange={(event) => handleChange(event)} />
                </div>
                <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" type="submit" className="btn btn-danger ">Cancel</Link>
                </div>

            </form>
        </section>
    )
 }