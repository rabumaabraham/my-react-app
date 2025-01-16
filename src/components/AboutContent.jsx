import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react'

import client1 from "../assets/client1.jpg"
import client2 from "../assets/client2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
                I am react frontend developer. I create responsive secure websites for my clients.
            </p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top"> 
                    <img src={client1} className="img" alt="true"/>
                </div>

                <div className="img-stack bottom"> 
                    <img src={client2} className="img" alt="true"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent