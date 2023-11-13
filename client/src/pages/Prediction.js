import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Prediction() {
    const navigate = useNavigate();
    const [livestockType, setLivestockType] = useState('Select an option');
    const [age, setAge] = useState('');
    const [temperature, setTemperature] = useState('');
    const [symptom1, setSymptom1] = useState('');
    const [symptom2, setSymptom2] = useState('');
    const [symptom3, setSymptom3] = useState('');
    const [imgurl, setImgUrl] = useState('');
    const [name, setName] = useState('');
    const SymptomsArr = ['depression', 'painless lumps', 'loss of appetite', 'difficulty walking', 'lameness', 'chills', 'crackling sound ', 'sores on gums', 'fatigue', 'shortness of breath', 'chest discomfort', 'swelling in limb', 'swelling in abdomen', 'blisters on gums', 'swelling in extremities', 'swelling in muscle', 'blisters on hooves', 'blisters on tongue', 'sores on tongue', 'sweats', 'sores on hooves', 'blisters on mouth', 'swelling in neck', 'sores on mouth']
    const AnimalArr = ['cow', 'buffalo', 'sheep', 'goat']

    useEffect(() => {
        let t = localStorage.getItem('token')
        if (!t) {
            navigate('/auth');
        }
        else {
            axios.post(`${process.env.REACT_APP_BACKEND_NODE_URI}api/verifytoken`, {
                token: t
            }).then(res => {
                axios.post(`${process.env.REACT_APP_BACKEND_NODE_URI}api/getuser`, {
                    email: res.data.email
                }).then(user => {
                    console.log(user)
                    setName(user.data._doc.name);
                    setImgUrl(user.data._doc.imgurl);
                })
            })

        }
    }, [navigate])
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URI}/predict`, {
            "Animal": livestockType,
            "Age": parseInt(age),
            "Temperature": parseInt(temperature),
            "Symptom 1": symptom1,
            "Symptom 2": symptom2,
            "Symptom 3": symptom3
        }).then(res => {
            console.log(res.data.prediction)
            if (res.data.prediction === 50) {    
                navigate("/disease/pneumonia")
            }
            else if (res.data.prediction === 51) {            
                navigate("/disease/lumpyvirus")
            }
            else if (res.data.prediction === 52) {
                navigate("/disease/blackleg")
            }
            else if (res.data.prediction === 53) {
                navigate("/disease/footandmouth")
            }
            else {
                navigate("/disease/anthrax")
            }
        })
    };
    // const replica_obj_disease = {
    //     50:'pneumonia',
    //     51:'lumpy virus',
    //     52:'blackleg',
    //     53:'foot and mouth',
    //     54:'anthrax'
    // }
    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate("/")
    }
    return (
        <div>
            <div>
                <header>
                    <nav>
                        <div className="logo">
                            
                            <div className='nav-title'>
                                <Link to={"/"}>Livestock Guardian</Link>
                            </div>
                            
                        </div>
                    </nav>
                </header>
            </div>

            <div className='dashboard-div'>
                <div className={`profile-div`}>
                    {imgurl === '' ?
                        <img height={200} width={200} src={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="} alt='dp' /> :
                        <img src={`${imgurl}`} alt="dp" id='dp' />}
                    <h1>{name}</h1>
                    <button className='btn-logout' onClick={handleLogOut}>Logout</button>
                </div>
                <div className='pred-form'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Select the Type of Livestock</label>
                            <select
                                value={livestockType}
                                onChange={(e) => setLivestockType(e.target.value)}
                            required>
                                <option value="Select an option">Select an option</option>
                                {AnimalArr.map((e, i) => {
                                    return <option value={i + 1}>{e}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <label>Age:</label><span>(Enter Age Between 1-15 Only)</span>
                            <input required
                                type="text"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Temperature:</label><span>(Enter Temperature Between 1-105 degree farhenheit Only)</span>
                            <input required
                                type="text"
                                value={temperature}
                                onChange={(e) => setTemperature(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Enter Symptom 1:</label>
                            <select required
                                value={symptom1}
                                onChange={(e) => { setSymptom1(e.target.value) }}
                            >
                                <option value="Select an option">Select an option</option>
                                {SymptomsArr.map((e, i) => {
                                    return <option value={(i + 10)}>{e}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <label>Enter Symptom 2:</label>
                            <select required
                                value={symptom2}
                                onChange={(e) => setSymptom2(e.target.value)}
                            >
                                <option value="Select an option">Select an option</option>
                                {SymptomsArr.map((e, i) => {
                                    return <option value={(i + 10)}>{e}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <label>Enter Symptom 3:</label>
                            <select required
                                value={symptom3}
                                onChange={(e) => setSymptom3(e.target.value)}
                            >
                                <option value="Select an option">Select an option</option>
                                {SymptomsArr.map((e, i) => {
                                    return <option value={(i + 10)}>{e}</option>
                                })}
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Prediction;

