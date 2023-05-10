import React, { useState } from "react";
import "./projects.css"

const Projects = () => {
    const [toggleState, setToggleState] = useState();
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    return (
        <section id="projects" className="projects section">
            <h2 className="section__title"><span class="color">P</span>rojects</h2>
            <span className="section__subtitle">The most exciting part of my work</span>

            <div className="sevices__container container grid">
                <div className="projects__content">

                <a href="https://github.com/varunsethi515/realEstatePricePrediction" className="project__social-icon" id="github" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>

                    <div>
                        <i className="uil uil-edit sevices__icon"></i>
                        <h3 className="projects__title">Real Estate<br /> Price Estimator</h3>
                    </div>
                    <span className="projects__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil uil-arrow-right service__button-icon"></i></span>
                    <div className={toggleState === 1 ? "projects__model active-model" : "projects__model"}>
                        <div className="projects__model-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__model-close"></i>
                            <h3 className="projects__model-title">Data Science<br /> Project</h3>
                            <p className="projects__model-description">Developed an interactive application for predicting the price of the property taking references from the desires of the user, implementing a fully-fledged 
                                application using Python, SQL and Machine Learning as the main contributor for effective outcome.</p>
                            <p className="projects__model-subdescription">Technologies involved with their usage:</p>
                           <ul className="projects__model-projects grid">
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">Pandas, NumPy for Data Cleaning</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">matplotlib, Seaborn for Data Visualisation</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">Sklearn for Model Building</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">Flask server for deployment of the model</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">HTML, CSS, JavaScript for UI development</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                <a href="https://github.com/varunsethi515/celebFaceRecognition" className="project__social-icon" id="github" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
                <div>
                <i className="uil uil-edit sevices__icon"></i>
                    <h3 className="projects__title">Sports Celeb <br /> Face Recognition</h3>
                </div>
                <span className="projects__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil uil-arrow-right service__button-icon"></i></span>
                <div className={toggleState === 2 ? "projects__model active-model" : "projects__model"}>
                    <div className="projects__model-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__model-close"></i>
                        <h3 className="projects__model-title">Data Science<br /> Project</h3>
                            <p className="projects__model-description">Developed an interactive application for predicting the price of the property taking references from the desires of the user, implementing a fully-fledged 
                                application using Python, SQL and Machine Learning as the main contributor for effective outcome.</p>
                            <p className="projects__model-subdescription">Technologies involved with their usage:</p>
                           <ul className="projects__model-projects grid">
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">Pandas, NumPy for Data Cleaning</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">matplotlib, Seaborn for Data Visualisation</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">Sklearn for Model Building</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">Flask server for deployment of the model</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">HTML, CSS, JavaScript for UI development</p>
                                </li>
                            </ul>
                    </div>
                </div>
                </div>

                <div className="projects__content">
                <a href="https://github.com/varunsethi515/dataAnalysisDashboards" className="project__social-icon" id="github" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
                    <div>
                    <i className="uil uil-edit sevices__icon"></i>
                        <h3 className="projects__title">Data Analysis<br /> Dashboards</h3>
                    </div>
                    <span onClick={()=>toggleTab(3)} className="projects__button">View More {" "} <i className="uil uil uil-arrow-right service__button-icon"></i></span>
                    <div className={toggleState === 3 ? "projects__model active-model" : "projects__model"}>
                        <div className="projects__model-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__model-close"></i>
                            <h3 className="projects__model-title">Data Analysis projects <br /> Dashboards</h3>
                            <p className="projects__model-description">Build Dashboards to present the extracted valuable insighs from the raw dataset provided in human readable and understandable manner.</p>
                            <p className="projects__model-subdescription">Technologies involved with their usage:</p>
                            <ul className="projects__model-projects grid">
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">Pandas, NumPy for Data cleaning and processing</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">Matplotlib, Seaborn for Data Visualisation</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">Tableau, PowerBI for Dashboard Creation</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                <a href="https://github.com/varunsethi515/cloneProgrammingPathshala" className="project__social-icon" id="github" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
                    <div>
                    <i className="uil uil-edit sevices__icon"></i>
                        <h3 className="projects__title">Clone <br /> Progrmming Pathshala</h3>
                    </div>
                    <span onClick={()=>toggleTab(4)} className="projects__button">View More {" "} <i className="uil uil uil-arrow-right service__button-icon"></i></span>
                    <div className={toggleState === 4 ? "projects__model active-model" : "projects__model"}>
                        <div className="projects__model-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__model-close"></i>
                            <h3 className="projects__model-title">Front-end Development<br /> Project</h3>
                            <p className="projects__model-description">Build a clone of Programming Pathshala as an assignment to have the hands on experience working with front-end</p>
                            <p className="projects__model-subdescription">Technologies involved with their usage:</p>
                            <ul className="projects__model-projects grid">
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">HTML Skeleton of the Website</p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">CSS for designing of Website </p>
                                </li>
                                <li className="projects__model-projects">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="projects__model-info">JavaScript for make it responsive.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Projects