import React from 'react'
import Navbar from '../utils/Navbar'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Footandmouth = () => {
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
        <span className="highlight">Foot and Mouth Disease</span>
        <p>Here are our solutions for the treatment of diseases</p>
      </div>
      <section className="container">
        <div className="slide swiper-slide">
          <img src={"https://media.istockphoto.com/id/1223737192/vector/medicine-icon-vector-illustration-medicine-vector-illustration-template-medicine-icon-design.jpg?s=612x612&w=0&k=20&c=tyZHi-ZTFsjrQO5dHdftTwRKB3guBaxAkoS-QVoS5Xk="} alt="" className="image" />
          <p>
          Mouth and feet of the affected animals should be washed with 1% potassium permanganate (KMnO4) antiseptic mouth wash3-4 times a day. Glycerin may be applied over the lesions. Antibiotic treatment and consultation should be made with qualified veterinary Doctor.
          </p>
          <i className="bx bxs-quote-alt-left quote-icon"></i>
          <div className="details">
            <span className="name">Antiseptic</span>
            <span className="job">1% potassium permanganate (KMnO4)</span>
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

export default Footandmouth
