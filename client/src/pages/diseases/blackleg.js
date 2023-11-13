import React from 'react'
import Navbar from '../utils/Navbar'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Blackleg = () => {
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
          <span className="highlight">Blackleg</span>
          <p>Here are our solutions for the treatment of diseases</p>
        </div>
        <section className="container">
          <div className="slide swiper-slide">
            <img src={"https://media.istockphoto.com/id/1223737192/vector/medicine-icon-vector-illustration-medicine-vector-illustration-template-medicine-icon-design.jpg?s=612x612&w=0&k=20&c=tyZHi-ZTFsjrQO5dHdftTwRKB3guBaxAkoS-QVoS5Xk="} alt="" className="image" />
            <p>
              Blackleg vaccines are widely available and are very effective at preventing livestock from contracting this deadly disease.
              Most blackleg vaccines require a two-shot series administered 3-4 weeks apart. Calves vaccinated under 3 months of age must be re-vaccinated at weaning or 4-6 months of age to be protective. All blackleg vaccines recommend an annual booster
            </p>
            <i className="bx bxs-quote-alt-left quote-icon"></i>
            <div className="details">
              <span className="name">Vaccination</span>
              <span className="job">Prophylactically with administration of penicillin (10,000 IU/kg, IM)</span>
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

export default Blackleg
