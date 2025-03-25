import React from 'react'
import "./BestServices.css";
import bestServices from "../../data/bestServices";

const BestServices = () => {
    return (
        <>
            <section id='best-services'>
                <div>
                    <div className='best-services-header'>
                        <h1>Best Services</h1>
                        <p>With a deep understanding of design principles and industry trends, I provide services that empower clients to achieve their unique objectives.</p>
                    </div>
                    <div className="services-container">
                        {bestServices.map((service) => (
                            <div key={service.id} className="service-card">
                                <span className='service-icon'>{<service.icon />}</span>
                                <div className="service-info">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestServices