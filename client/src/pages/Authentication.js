import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [state, setState] = useState(0);
    const [name, setname] = useState('');
    const [imgurl, setImgUrl] = useState('');
    const [password, setPassword] = useState('');
    const [hiddenClass, setHiddenClass] = useState('hidden');
    const [message, setMessage] = useState('');

    const REACT_APP_BACKEND_NODE_URI = process.env.REACT_APP_BACKEND_NODE_URI;
    useEffect(() => {
        let t = localStorage.getItem('token');
        if (t) {
            navigate("/predict");
        }
    }, [navigate])
    const handleLogInSubmit = async (e) => {
        e.preventDefault();
        console.log(password)
        await axios.post(`${REACT_APP_BACKEND_NODE_URI}api/auth/signin`, {
            email: email,
            password: password
        }).then(res => {
            if (res.status === 201) {
                setHiddenClass('visible');
                setMessage(res.data.message);
            }
            else {
                let token = res.data.token;
                localStorage.setItem('token', token);
                navigate("/predict");
            }
        })

    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        await axios.post(`${REACT_APP_BACKEND_NODE_URI}api/auth/signup`, {
            email: email,
            password: password,
            name: name,
            imgurl: imgurl
        }).then(res => {
            if (res.status === 201) {
                setHiddenClass('visible');
                setMessage(res.data.message);
            }
            else {
                let token = res.data.token;
                localStorage.setItem('token', token);
                navigate("/predict");
            }
        })

    }
    if (state === 0)
        return (
            <div className='wrapper-body'>
                <div className="wrapper" >
                    <h2>Sign In</h2>
                    <form onSubmit={handleLogInSubmit}>
                        <div className="input-box">
                            <input value={email} onChange={(e) => {
                                setEmail(e.target.value)
                                setHiddenClass("hidden")
                            }} type="text" placeholder="Enter email" required />
                        </div>
                        <div className="input-box">
                            <input onChange={(e) => {
                                setPassword(e.target.value)
                                setHiddenClass("hidden")
                            }} type="password" value={password} placeholder="Enter password" required />
                        </div>
                        {/* <div className="policy">
                                <input type="checkbox" />
                                <h3>I accept all terms & condition</h3>
                            </div> */}
                        <div className="input-box button">
                            <input type="submit" value="Sign In" />
                        </div>
                        <div style={{color:"red"}} className={hiddenClass}>
                            {message}
                        </div>
                        <div className="text">
                            <h3>New User? <button className="btn-login" onClick={() => {
                                setState(1)
                                setEmail('')
                                setPassword('')
                                setname('')
                                setImgUrl('')
                            }}>Register</button></h3>
                        </div>
                    </form>

                </div>
            </div>

        )
    else
        return (
            <div className='wrapper-body'>
                <div className="wrapper" >
                    <h2>Registration</h2>
                    <form onSubmit={handleSignUp}>
                        <div className="input-box">
                            <input onChange={(e) => {
                                setname(e.target.value)
                                setHiddenClass("hidden")
                            }} value={name} type="text" placeholder="Enter name" required />
                        </div>
                        <div className="input-box">
                            <input value={email} onChange={(e) => {
                                setEmail(e.target.value)
                                setHiddenClass("hidden")
                            }} type="text" placeholder="Enter email" required />
                        </div>
                        <div className="input-box">
                            <input onChange={(e) => {
                                setPassword(e.target.value)
                                setHiddenClass("hidden")
                            }} type="password" value={password} placeholder="Create password" required />
                        </div>
                        <div className="input-box">
                            <input onChange={(e) => {
                                setImgUrl(e.target.value)
                                setHiddenClass("hidden")
                            }} type="password" placeholder="Profile Image Url (If Any)" />
                        </div>
                        {/* <div className="policy">
                                <input type="checkbox" />
                                <h3>I accept all terms & condition</h3>
                            </div> */}
                        <div className="input-box button">
                            <input type="submit" value="Register Now" />
                        </div>
                        <div className="text">
                            <h3>Already have an account? <button className="btn-login" onClick={() => {
                                setState(0)
                                setEmail('')
                                setPassword('')
                                setname('')
                                setImgUrl('')
                            }}>Log In</button></h3>
                        </div>
                    </form>
                </div>
            </div>
        )
}

export default Authentication
