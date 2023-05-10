import React from "react";
import "./skill.css";
import FrontEnd from "./FrontEnd";
import DataScience from "./DataScience";
import DataAnalysis from "./DataAnalysis";

const Skill = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title"><span class="color">S</span>kills</h2>
            <span className="section__subtitle">My Technical Skill</span>
            <div className="skills__container container grid">
            <DataScience />
            <DataAnalysis />
            <FrontEnd />
            </div>
        </section>
    )
}

export default Skill