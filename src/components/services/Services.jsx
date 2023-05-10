import React, { useState } from "react";
import "./services.css";

const Service = () => {
    const [toggleState, setToggleState] = useState();
    const toggleTab = (index) =>{
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title"><span class="color">S</span>ervices</h2>
            <span className="section__subtitle">What all I can Offer..</span>

            <div className="sevices__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit sevices__icon"></i>
                        <h3 className="services__title">Data <br /> Scientist</h3>
                    </div>
                    <span className="services__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil uil-arrow-right service__button-icon"></i></span>
                    <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__model-close"></i>
                            <h3 className="services__model-title">Data <br /> Scientist</h3>
                            <p className="services__model-description">Currently a fresher, but have the on ground working experience of 9+ months.</p>

                            <ul className="services__model-services grid">
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="services__model-info">I can perform Data Processing using BeautifulSoup, ScraPy, Pandas, NumPy</p>
                                </li>
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="services__model-info">I can analyse Data using Pandas, NumPy</p>
                                </li>
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="services__model-info">I can visualise the Data using MatplotLib, Seaborn</p>
                                </li>
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="services__model-info">I can build Machine Learning models using SkLearn, SciPy</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
    <div>
        <i className="uil uil-web-grid sevices__icon"></i>
        <h3 className="services__title">Data <br /> Analyst</h3>
    </div>
    <span className="services__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil uil-arrow-right service__button-icon"></i></span>
    <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
        <div className="services__model-content">
            <i onClick={()=>toggleTab(0)} className="uil uil-times services__model-close"></i>
            <h3 className="services__model-title">Data <br /> Analyst</h3>
            <p className="services__model-description">Currently a fresher, but have the on ground working experience of 9+ months.</p>

            <ul className="services__model-services grid">
                <li className="services__model-services">
                    <i className="uil uil-check-circle serveices__model-icon"></i>
                    <p className="services__model-info">I can perform all Data preprocessing using BeautifulSoup, ScraPy, Pandas, NumPy</p>
                </li>
                <li className="services__model-services">
                    <i className="uil uil-check-circle serveices__model-icon"></i>
                    <p className="services__model-info">I can dig out valuable insights from the Data</p>
                </li>
                <li className="services__model-services">
                    <i className="uil uil-check-circle serveices__model-icon"></i>
                    <p className="services__model-info">I can visualise Data using MatplotLib, Seaborn</p>
                </li>
                <li className="services__model-services">
                    <i className="uil uil-check-circle serveices__model-icon"></i>
                    <p className="services__model-info">I can present reactive Dashboads using Tableau and PowerBI</p>
                </li>
            </ul>
        </div>
    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow sevices__icon"></i>
                        <h3 className="services__title">Front-end <br /> UI/UX <br /> Developer</h3>
                    </div>
                    <span onClick={()=>toggleTab(3)} className="services__button">View More {" "} <i className="uil uil uil-arrow-right service__button-icon"></i></span>
                    <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__model-close"></i>
                            <h3 className="services__model-title">Front-end <br /> UI/UX Developer</h3>
                            <p className="services__model-description">Currently a fresher, but have the on ground working experience of 9+ months.</p>

                            <ul className="services__model-services grid">
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="services__model-info">I can design webpages using Figma</p>
                                </li>
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="services__model-info">I can develop webpages using HTML, CSS, JavaScript</p>
                                </li>
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="services__model-info">I can add responsiveness to website using ReactJS</p>
                                </li>
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="services__model-info">I have some basic knowledge regarding NextJS, MongoDB</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-database sevices__icon"></i>
                        <h3 className="services__title">Data <br /> Base Developer</h3>
                    </div>
                    <span onClick={()=>toggleTab(4)} className="services__button">View More {" "} <i className="uil uil uil-arrow-right service__button-icon"></i></span>
                    <div className={toggleState === 4 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__model-close"></i>
                            <h3 className="services__model-title">Data <br /> Base Developer</h3>
                            <p className="services__model-description">Currently a fresher, but have the on ground working experience of 9+ months.</p>

                            <ul className="services__model-services grid">
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="services__model-info">I can craete Database using NoSQL, SQL, MongoDB</p>
                                </li>
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle serveices__model-icon"></i>
                                    <p className="services__model-info">I can manage all CRUD operation on database</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service