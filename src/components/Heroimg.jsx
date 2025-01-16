import "./HeroimgStyles.css";

import React from 'react'

import IntroImg from "../assets/intro-img.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />

        </div>

        <div className="content">
            <p>HI, I'M A Rabuma.</p>
            <h1>React Developer</h1>

            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
};

export default  Heroimg;