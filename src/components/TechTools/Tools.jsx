import React from "react";
import "./Tools.css";
import tools from "../../data/tools";

const Tools = () => {
    return (
        <section id="tools">
            <div className="tools-header">
                <h1>Technology Stack</h1>
                <p>Every great product is built with the right set of tools. Here's what I use to bring ideas to life.</p>
            </div>

            {tools.map((category) => (
                <div key={category.id} className="tools-category">
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                    <div className="tools-container">
                        {category.items.map((tool) => (
                            <div key={tool.id} className="tool-card">
                                <img src={tool.logo} alt={tool.name} className="tool-logo" />
                                {/* <p>{tool.name}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Tools;
