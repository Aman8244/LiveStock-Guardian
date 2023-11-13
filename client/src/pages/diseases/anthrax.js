import React from 'react'
import Navbar from '../utils/Navbar'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Anthrax = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let t = localStorage.getItem('token');
    if (!t) {
      navigate("/auth");
    }
  }, [navigate])
  return (

    <div>
      <Navbar />
      <div>
        <div className="page-heading">
          <h2>Livestock Have Symptoms Of</h2>
          <span className="highlight">Anthrax</span>
          <p>Here are our solutions for the treatment of diseases</p>
        </div>
        <section className="container">
          <div className="slide swiper-slide">
            <img src={"https://media.istockphoto.com/id/1223737192/vector/medicine-icon-vector-illustration-medicine-vector-illustration-template-medicine-icon-design.jpg?s=612x612&w=0&k=20&c=tyZHi-ZTFsjrQO5dHdftTwRKB3guBaxAkoS-QVoS5Xk="} alt="" className="image" />
            <p>
              Anthrax Spore Vaccine is a vaccine for anthrax in domestic farm animals. It's made up of live, non-disease causing spores of the *B. anthracis* bacterium. It's widely available through veterinarians and is relatively inexpensive
            </p>
            <i className="bx bxs-quote-alt-left quote-icon"></i>
            <div className="details">
              <span className="name">Vaccinations</span>
              <span className="job">Anthrax Spore Vaccine</span>
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

export default Anthrax
