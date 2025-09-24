import React from 'react';
import './Hero.css';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import heroImg from '../../assets/heroImg.png'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='hero'>


            <div className="container">
                <div className='row'>

                    <div className="hero-content col-6">
                        <p style={{ fontWeight: '500', fontSize: 'larger', margin: '0', padding: '0.5rem 0' }}>Skip the travel! Find Online</p>
                        <h1 className="hero-title" style={{ fontWeight: '600' }}>Medical <span style={{ color: '#2AA7FF' }}>Centers</span></h1>
                        <p className="hero-subtitle">
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                        </p>
                        <Link to='/search'><Button>Find Centers</Button></Link>
                    </div>
                    <div className='col-6'>
                        <img style={{ height: 'auto', maxWidth: '100%' }} src={heroImg} alt="heroImg" />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;