import React from 'react'
import Navbar from '../utils/Navbar'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Lumpyvirus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let t = localStorage.getItem('token');
    if (!t) {
        navigate("/auth");
    }
}, [navigate])
  return (
    <div>
      <Navbar/>
       <div>
      <div className="page-heading">
        <h2>Livestock Have Symptoms Of</h2>
        <span className="highlight">Lumpy Virus</span>
        <p>Here are our solutions for the treatment of diseases</p>
      </div>
      <section className="container">
        <div className="slide swiper-slide">
          <img src={"https://media.istockphoto.com/id/1223737192/vector/medicine-icon-vector-illustration-medicine-vector-illustration-template-medicine-icon-design.jpg?s=612x612&w=0&k=20&c=tyZHi-ZTFsjrQO5dHdftTwRKB3guBaxAkoS-QVoS5Xk="} alt="" className="image" />
          <p>
          Isolate the affected livestock from healthy animals to prevent the potential spread of the disease. Quarantine is essential to minimize contact and reduce the risk of transmission within the herd.
          </p>
          <i className="bx bxs-quote-alt-left quote-icon"></i>
          <div className="details">
            <span className="name"></span>
            <span className="job">Isolation and Quarantine</span>
          </div>
        </div>
      </section>



      <div className="cta-button">
        <a href="#">Connect to Veterinarian</a>
      </div>
    </div>
    </div>
  )
}

export default Lumpyvirus
