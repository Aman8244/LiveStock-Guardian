import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const [hiddenClass,setHiddenClass] = useState('visible');

    useEffect(()=>{
        const t = localStorage.getItem("token");
        if(t){
            setHiddenClass('hidden');
        }
        else{
            setHiddenClass('visible');
        }
    },[])
    return (
        <div className='home-body'>
           <header>
                <nav>
                    <div className="logo">
                        <div className='nav-title'>
                            <Link to={"/"}>Livestock Guardian</Link>
                        </div>
                        <div className={`nav-links ${hiddenClass}`}>
                            <Link to={"/auth"}>Sign Up!</Link>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to <span>Livestock</span> Guardian</h1>
                    <hr className='hr-rule1' />
                    <hr className='hr-rule2' />
                    <h2>Empowering Livestock Health for a Prosperous <span>Future</span> </h2>
                    <p>At Livestock Guardian, we are committed to enhancing the health and productivity of your livestock</p>
                    <button onClick={()=>{navigate('/auth')}}>Get Started</button>
                </div>
            </section>
            <section className="features">
                <div className="feature">
                    <h3>Rapid Disease Detection</h3>
                    <p>Our AI-powered system quickly analyzes symptoms to provide you with a likely diagnosis.</p>
                </div>
                <div className="feature">
                    <h3>Timely Recommendations</h3>
                    <p>Receive actionable suggestions for treatment and care, helping you respond proactively.</p>
                </div>
                <div className="feature">
                    <h3>Data-Driven Insights</h3>
                    <p>Our platform is based on extensive data analysis, ensuring reliable results.</p>
                </div>
                <div className="feature">
                    <h3>User-Friendly Interface</h3>
                    <p>A simple and intuitive interface designed for users of all backgrounds.</p>
                </div>
            </section>
            <section className="why-us">
                <h2>Why Livestock Guardian</h2>
                <p>Your livestock is not just your livelihood; they are part of your family. We understand the importance of keeping them healthy...</p>
            </section>
            <section className="testimonials">
                <h2>What Users Say</h2>
                <div className="testimonial">
                    <p>"Livestock Guardian has been a game-changer for our farm. It helps us identify diseases early and take action swiftly. Highly recommended!"</p>
                </div>
                <div className="testimonial">
                    <p>"I'm not an expert in livestock, but this tool makes me feel like one. It's a lifeline for our animals."</p>
                </div>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions or need support, feel free to contact us at <a href="mailto:contact@livestockguardian.com">contact@livestockguardian.com</a></p>
            </section>
            <footer>
                <p>&copy; 2023 Livestock Guardian</p>
            </footer>
        </div>

    )
}

export default Home
