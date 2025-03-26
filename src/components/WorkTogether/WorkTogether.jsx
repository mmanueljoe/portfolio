import React from 'react'
import "./WorkTogether.css";
import { LuArrowRight } from "react-icons/lu";

const WorkTogether = () => {
    return (
        <>
            <section id="work-together">
                <div className="work-container">
                    <h1>Let's Build Something Exceptional</h1>
                    <p>
                        I craft scalable software, design seamless user experiences, and push the boundaries of Web3 innovation. If you need someone who gets the tech, understands the vision, and executes with precision, let’s connect and make it happen.
                    </p>
                    <button className="contact-btn">Contact Now <LuArrowRight className='contact-right-arrow'/></button>
                </div>
            </section>
        </>
    )
}

export default WorkTogether