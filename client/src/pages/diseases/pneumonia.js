import React from 'react'
import Navbar from '../utils/Navbar'
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
const Pneumonia = () => {
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
      <div className="page-heading">
        <h2>Livestock Have Symptoms Of</h2>
        <span className="highlight">Pneumonia</span>
        <p>Here are our solutions for the treatment of diseases</p>
      </div>
      <section className="container">
        <div className="slide swiper-slide">
          <img src={"https://media.istockphoto.com/id/1223737192/vector/medicine-icon-vector-illustration-medicine-vector-illustration-template-medicine-icon-design.jpg?s=612x612&w=0&k=20&c=tyZHi-ZTFsjrQO5dHdftTwRKB3guBaxAkoS-QVoS5Xk="} alt="" className="image" />
          <p>
            Broad-spectrum antibiotics are commonly used to treat bacterial pneumonia in livestock. The specific antibiotic and dosage will depend on the type of bacteria causing the infection. Your veterinarian will prescribe the appropriate antibiotics. Follow the veterinarian's instructions for the correct dosage, duration of treatment, and withdrawal periods to ensure that treated animals do not enter the food supply until the antibiotics have cleared from their systems.
          </p>
          <i className="bx bxs-quote-alt-left quote-icon"></i>
          <div className="details">
            <span className="name">Antibiotics</span>
            <span className="job">(Naxcel or Excenel), florfenicol (Nuflor), or tilmicosin (Micotil)</span>
          </div>
        </div>
      </section>



      <div className="cta-button">
        <a href="#">Connect to Veterinarian</a>
      </div>
    </div>
  )
}

export default Pneumonia
